import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import TweetForm from './TweetForm';
import { Container, ListGroup, Button, ListGroupItem } from 'react-bootstrap';

function TweetList() {
  const { id } = useParams();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => setTweets(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleNewTweet = (newTweet) => {
    setTweets([...tweets, newTweet]);
  };

  const handleUpdateTweet = (tweetId, newContent) => {
    axios.put(`https://jsonplaceholder.typicode.com/comments/${tweetId}`, { body: newContent })
      .then(response => {
        setTweets(tweets.map(tweet => tweet.id === tweetId ? response.data : tweet));
      })
      .catch(error => console.error(error));
  };

  const handleDeleteTweet = (tweetId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/comments/${tweetId}`)
      .then(() => {
        setTweets(tweets.filter(tweet => tweet.id !== tweetId));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='tweet'>
    <Container>
      <h1 className="my-4">Tweets</h1>
      <Button as={Link} to="/" variant="primary" className="mb-3">
        <i className="bi bi-arrow-left"></i> Back to Artists
      </Button>
      <TweetForm artistId={id} onNewTweet={handleNewTweet} />
      <ListGroup>
        {tweets.map(tweet => (
          <ListGroupItem
            key={tweet.id}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="flex-grow-1 me-3">
              <i className="bi bi-chat-left-text"></i> {tweet.body}
            </div>
            <div className="d-flex">
              <Button
                variant="warning"
                className="me-2 myButton"
                onClick={() => handleUpdateTweet(tweet.id, prompt('Update tweet:', tweet.body))}

              >
                <i className="bi bi-pencil"></i> Update
              </Button>
              <Button
                variant="danger"
                className='myButton'
                onClick={() => handleDeleteTweet(tweet.id)}
              >
                <i className="bi bi-trash"></i> Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
    </div>
  );
}

export default TweetList;
