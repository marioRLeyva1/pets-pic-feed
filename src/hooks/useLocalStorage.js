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

  const initialState = () => {
    const getLocalStorage = localStorage.getItem('images');
    console.log('getLocalStorage Ejecuted');
    const parsedLocalStorage = JSON.parse(getLocalStorage);
    if (!parsedLocalStorage) {
      console.log('Favorites Empty');
      localStorage.setItem('images', JSON.stringify(favorites));
    } else {
      parsedLocalStorage.map((favorite) => addToFavorites(favorite));
      setFavorites(JSON.parse(localStorage.getItem('images')));
      console.log('Getting local favorites');
      console.log(parsedLocalStorage);
    }
    if (!localStorage.images) {
      localStorage.setItem('images', JSON.stringify(favorites));
    } else {
      setFavorites(JSON.parse(localStorage.images));
    }
  };
  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(favorites));
    console.log("useEffect from useLocalStorage");
  },[favorites]);

  const addToFavorites = (image) => {
    setFavorites([...favorites, image]);
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
  };
};

export default useLocalStorage;
