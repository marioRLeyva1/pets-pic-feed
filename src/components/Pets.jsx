import React from 'react';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';
import PetContainer from './PetContainer';

const Pets = (props) => {
  const { results, isFavoritesPageActive } = React.useContext(AppContext);
  const { favorites } = React.useContext(FavoritesContext);

  if (isFavoritesPageActive) {
    return (
      <div className="pets-container">
        <div className="image-container">
          {favorites.map(element => (
            <img key={element} src={element}></img>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="pets-container">
        <div className="images-container">
          {results.map((element) => (
            <PetContainer
              key={element.url}
              src={element.url}
              description={element.id}
            ></PetContainer>
          ))}
        </div>
      </div>
    );
  }
};

export default Pets;
