import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Container, Button } from 'react-bootstrap';
import AlbumCard from './albumCard';
import { Link, useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function AlbumList() {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then(response => setAlbums(response.data))
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    albums.forEach(album => {
      axios.get(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
        .then(response => setPhotos(prevPhotos => ({
          ...prevPhotos,
          [album.id]: response.data
        })))

        .catch(error => console.error(error));
    });
  }, [albums]);
console.log(albums);
  return (
    <Container>
      <h1 className="my-4">Albums</h1>
      <Button as={Link} to="/" variant="primary" className="mb-3">
        <i className="bi bi-arrow-left"></i> Back to Artists
      </Button>
      <TransitionGroup>
        <Row>
          {albums.map(album => (
            <CSSTransition key={album.id} timeout={500} classNames="fade">
              <Col sm={12} md={6} lg={4} className="mb-4">
                <AlbumCard album={album} photo={photos[album.id] ? photos[album.id][0] : {}} />
              </Col>
            </CSSTransition>
          ))}
        </Row>
      </TransitionGroup>
    </Container>
  );
}

export default AlbumList;
