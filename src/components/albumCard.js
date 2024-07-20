import React from 'react';
import { Card } from 'react-bootstrap';
import '../'

function AlbumCard({ album, photo }) {
  return (
    <Card className="scale-up fade-in mb-4">
      <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;
