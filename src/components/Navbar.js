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
      <div className="greeting" />Click an image to begin!
      <div className="score" />Score: 0 | Top Score: 0
    </nav>
  );
}

export default Navbar;
