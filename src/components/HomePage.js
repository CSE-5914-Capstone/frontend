// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Playlist App</h1>
      <Link to="/app">
        <button>Create Playlist</button>
      </Link>
    </div>
  );
}

export default HomePage;
