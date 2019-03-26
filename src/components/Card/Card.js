/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Card.css';

function Card({clickHandler, id, image}) {
  return (
    <div className="card-holder" id="card">
      <img
        src={image}
        className="card-select grow img-thumbnail m-4 pointer"
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default Card;
