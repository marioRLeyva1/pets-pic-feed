import React, { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import PetContainer from '../components/PetContainer';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

export const Cats = () => {
  const { getCatAPI, setIsFavoritesPageActive } = React.useContext(AppContext);
  const {isFavorites} = React.useContext(FavoritesContext);
  useEffect(() => {
    getCatAPI();
    isFavorites();
    document.title = 'Cats';
    setIsFavoritesPageActive(false);
  }, []);

  return (
    <Layout>
      <h1>Cats</h1>
      <Pets></Pets>
    </Layout>
  );
};
