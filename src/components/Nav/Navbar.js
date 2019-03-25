/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './Navbar.css';

function Navbar({ message, score, topScore }) {
  return (
    <nav className="bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text">
      <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
        <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
          <a className="nav-calc-font navbar-brand p-0 m-0 title-line-hgt" href="/">Click! The Game</a>
        </li>
        <li
          id="animate-this"
          className="col list-inline-item my-auto nav-calc-font m-0 p-0 text-center"
        >
          {message}
        </li>
        <li className="col list-inline-item my-auto nav-calc-font m-0 p-0 score-li-width text-center">
          score: {score} | top score: {topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
