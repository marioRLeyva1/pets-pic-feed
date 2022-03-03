import React, { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContex from '../context/FavortiesContext';

export const Favorites = () => {
  const { removeFromFavorites, favorites, setFavorites } =
    React.useContext(FavoritesContex);
  const { setActivePage } = React.useContext(AppContext);
  useEffect(() => {
    document.title = 'Favorites';
    setActivePage('Favorites');
  }, []);

  return (
    <Layout>
      <div className="favorites-container">
        <h1>Favorites</h1>
        <Pets></Pets>
      </div>
    </Layout>
  );
};
