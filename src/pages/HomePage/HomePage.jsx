import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>This is Home Page</h1>
    <p>
      If you need to watch our list of posts and add your post, please, follow
      the link below!
    </p>
    <Link to="/posts">To Posts!</Link>
  </div>
);

export default HomePage;
