/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navList">
        <a className="navbar-brand" href="#" id="title">Click! the Game</a>
        <li id="greeting">
        Click on any picture to start
        </li>
        <li id="score">
        Score: {props.score} | High Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
