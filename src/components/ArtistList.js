import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

function ArtistList() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setArtists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <h1 className="my-4">Artists</h1>
      <Row>
        {artists.map(artist => (
          <Col key={artist.id} sm={12} md={6} lg={4} className="mb-3">
            <ListGroup>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1 me-3">
                  <h5>{artist.name}</h5>
                </div>
                <div className="button-container">
                  <Link to={`/artist/${artist.id}/albums`} className="me-2">
                    <Button variant="primary" className="myButton">
                      <i className="bi bi-music-note"></i> Albums
                    </Button>
                  </Link>
                  <Link to={`/artist/${artist.id}/tweets`}>
                    <Button variant="secondary" className="myButton">
                      <i className="bi bi-twitter"></i> Tweets
                    </Button>
                  </Link>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ArtistList;
