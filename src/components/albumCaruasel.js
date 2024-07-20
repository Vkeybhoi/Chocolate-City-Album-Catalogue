import React from 'react';
import { Carousel } from 'react-bootstrap';


function AlbumCarousel({ albums }) {
  return (
    <Carousel>
      {albums.map(album => (
        <Carousel.Item key={album.id}>
          <img
            className="d-block w-100"
            src={album.coverUrl}  // Replace with the actual image URL
            alt={album.title}
          />
          <Carousel.Caption>
            <h3>{album.title}</h3>
            <p>{album.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default AlbumCarousel;
