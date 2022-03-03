import React from 'react';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';
import PetContainer from './PetContainer';

const Pets = (props) => {
  const { results, activePage } = React.useContext(AppContext);
  const { favorites } = React.useContext(FavoritesContext);

  if (activePage == 'Favorites') {
    return (
      <div className="pets-container">
        <div className="image-container">
          {favorites.map((element) => (
            <PetContainer key={element} src={element}></PetContainer>
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
            ></PetContainer>
          ))}
        </div>
      </div>
    );
  }
};

export default Pets;
