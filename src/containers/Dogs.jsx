import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

export const Dogs = () => {
  const { getDogAPI, setIsFavoritesPageActive } = React.useContext(AppContext);
  const {isFavorites, favorites} = React.useContext(FavoritesContext)
  useEffect(() => {
    getDogAPI();
    isFavorites();
    document.title = 'Dogs';
    setIsFavoritesPageActive(false);
  }, []);
  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(favorites)) //ACTUALIZA FAVORITES Y LO ALMACENA EN LOCALSTORAGE
  },[favorites])
  return (
    <Layout>
      <div className="dog-container">
        <h1>Dogs</h1>
        <Pets></Pets>
      </div>
    </Layout>
  );
};
