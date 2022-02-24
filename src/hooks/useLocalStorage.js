import React from 'react';
import { Favorites } from '../containers/Favorites';

const useLocalStorage = () => {
    
    
    const [favorites, setFavorites] = React.useState([]);
    
    const isFavorites = () => {
        // getLocalStorage = localStorage.getItem('images')
        // console.log('gatito');
        // const parsedLocalStorage = JSON.parse(getLocalStorage);
        // if (!parsedLocalStorage) {
        //     console.log('in');
        //     localStorage.setItem('images', JSON.stringify(favorites));
        // } else {
        //     parsedLocalStorage.map((favorite) => addToFavorites(favorite));
        //     setFavorites(JSON.parse(localStorage.getItem('images')));
        //     console.log('out');
        //     console.log(parsedLocalStorage);
        // }
        // if (!localStorage.images) {
        //     localStorage.setItem('images', JSON.stringify(favorites))
        // }else{
        //     setFavorites(JSON.parse(localStorage.images))
        // }
  };

  const addToFavorites = (image) => {
      setFavorites([...favorites, image])
      
  };

  const removeFromFavorites = (image) => {
    setFavorites({
      ...favorites,
      favorites: favorites.favorites.filter((item) => item !== image),
    });
  };

  return {
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    isFavorites,
  };
};

export default useLocalStorage;
