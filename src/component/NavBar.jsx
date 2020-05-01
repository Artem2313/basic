import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <li>
        <Link to="/" label="Home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" label="about">
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
