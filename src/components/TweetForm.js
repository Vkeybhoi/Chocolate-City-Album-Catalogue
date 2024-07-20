import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

function TweetForm({ artistId, onNewTweet }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Tweet content cannot be empty');
      return;
    }
    axios.post('https://jsonplaceholder.typicode.com/comments', { body: content, postId: artistId })
      .then(response => {
        setContent('');
        setError('');
        onNewTweet(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="tweetContent">
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          required
        />
      </Form.Group>
      {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
      <Button type="submit" variant="primary" className="mt-2">Tweet</Button>
    </Form>
  );
}

export default TweetForm;
