import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ArtistList from './components/ArtistList';
import AlbumList from './components/AlbumList';
import TweetList from './components/TweetList';
import { Navbar, Nav } from 'react-bootstrap';
import AlbumCarousel from './components/albumCaruasel';
import './App.css';

function App() {
  return (

    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Chocolate City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Artists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='app'>
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="/artist/:id/albums" element={<AlbumList />} />
        <Route path="/artist/:id/tweets" element={<TweetList />} />
        <Route path="/carousel" element={<AlbumCarousel />} />
      </Routes>
      </div>
    </Router>

  
  );
}

export default App;
