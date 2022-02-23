import React from 'react';
import AppContext from '../context/AppContext';

const PetContainer = (props) => {

  return (
    <div className="pet-container">
      <div className="pet">
        <img src={props.src}></img>
        <i className="fa-regular fa-heart"></i>
        <p className="fact">{props.description}</p>
      </div>
    </div>
  );
};

export default PetContainer;
