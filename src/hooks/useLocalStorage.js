import React, { useEffect } from 'react';
import { Favorites } from '../containers/Favorites';
import initialState from '../initialState';

const useLocalStorage = () => {
  const [favorites, setFavorites] = React.useState([]);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('images');
    console.log('getLocalStorage Ejecuted');
    if (!getLocalStorage) {
      console.log('Favorites Empty');
      localStorage.setItem('images', JSON.stringify([]));
    } else {
      console.log("Favorites alredy exists in localStorage");
      setFavorites(JSON.parse(localStorage.getItem('images')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(favorites));
    console.log("useEffect from useLocalStorage");
  },[favorites]);

  const addToFavorites = (image) => {
    setFavorites([...favorites, image]);
  };
  
  let newFavorites = favorites;
  const removeFromFavorites = (image) => {
    const index = favorites.indexOf(image);
    console.log('removing...');
    setFavorites(newFavorites.splice(index, 1));
    console.log(favorites);
    // setFavorites(favorites.splice(index, 1));
  };

  return {
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
  };
};

export default useLocalStorage;
