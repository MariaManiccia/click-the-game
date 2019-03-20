/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#" id="title">Click! the Game</a>
      <p id="greeting">
        Click on any picture to start
      </p>
      <p id="score">
        Score: 0 | High Score: 0
      </p>
    </nav>
  );
}

export default Navbar;
