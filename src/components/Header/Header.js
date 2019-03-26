/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="align-items-center bg-header jumbotron text-center">
      <h1 className="header">
        Click on an image to earn points,
      </h1>
      <h1 className="header">
        But don't click on any more than once!
      </h1>
    </div>
  );
}
export default Header;
