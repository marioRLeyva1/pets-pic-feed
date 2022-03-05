import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';
import PetContainer from './PetContainer';

const Pets = () => {
  const { results, activePage } = React.useContext(AppContext);
  const { favorites } = React.useContext(FavoritesContext);
  
  if (activePage == 'Favorites') {
    return (
      <section className="pets-container">
        <div className="image-container">
          {favorites.map((element) => (
            <PetContainer key={element} src={element}></PetContainer>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col md:grid md:grids-col-4">
        <div className="flex flex-col m-6 gap-3 md:grid md:grid-cols-3 md:gap-6 md:m-12 md:palce-items-center">
          {results.map((element) => (
            <PetContainer
              key={element.url}
              src={element.url}
            ></PetContainer>
          ))}
        </div>
      </section>
    );
  }
};

export default Pets;
