import React, { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import PetContainer from '../components/PetContainer';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

export const Cats = () => {
  const { getCatAPI, setIsFavoritesPageActive, setActivePage } =
    React.useContext(AppContext);
  useEffect(() => {
    getCatAPI();
    document.title = 'Cats';
    setIsFavoritesPageActive(false);
    setActivePage('Cats');
  }, []);

  return (
    <Layout>
      <h1 className='text-4xl'>Cats</h1>
      <Pets></Pets>
    </Layout>
  );
};
