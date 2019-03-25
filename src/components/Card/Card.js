/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Card({clickHandler, id, image}) {
  return (
    <div className="card-holder">
      <img
        src={image}
        className="card-select grow img-thumbnail m-2 pointer"
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default Card;
