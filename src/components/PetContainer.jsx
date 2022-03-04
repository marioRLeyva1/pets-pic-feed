import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

const PetContainer = (props) => {
  const { addToFavorites, favorites } = React.useContext(FavoritesContext);
  const add = (url) => () => {
    addToFavorites(url);
  };
  return (
    <div className="pet-container">
      <div className="pet">
        <img src={props.src}></img>
        <i onClick={add(props.src)} className="fa-regular fa-heart"></i>
      </div>
    </div>
  );
};

export default PetContainer;
