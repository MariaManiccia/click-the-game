/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './Navbar.css';

function Navbar({ message, score, topScore }) {
  return (
    <nav className="navbar-light bg-light fixed-top">
      <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
        <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
          <a className="nav-calc-font navbar-brand p-0 m-0 title-line-hgt" href="/" id="title">Click! The Game</a>
        </li>
        <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center" id="greeting">
          {message}
        </li>
        <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center" id="score">
          SCORE: {score} | TOP SCORE: {topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
