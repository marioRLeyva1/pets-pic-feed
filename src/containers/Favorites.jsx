import React, { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContex from '../context/FavortiesContext';

export const Favorites = () => {
  const { removeFromFavorites, favorites, setFavorites } =
    React.useContext(FavoritesContex);
  const { setActivePage, activePage } = React.useContext(AppContext);
  useEffect(() => {
    document.title = 'Favorites | Pets Picture Feed';
    setActivePage('Favorites');
  }, []);

  return (
    <Layout>
      <div className="favorites-container">
        {activePage == 'Favorites' && <Pets></Pets>}
      </div>
    </Layout>
  );
};
