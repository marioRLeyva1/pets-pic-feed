import React, { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import PetContainer from '../components/PetContainer';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

export const Cats = () => {
  const { getCatAPI, setIsFavoritesPageActive, setActivePage, activePage } =
    React.useContext(AppContext);
  useEffect(() => {
    getCatAPI();
    document.title = 'Cats | Pets Pictures Feed';
    setIsFavoritesPageActive(false);
    setActivePage('Cats');
  }, []);

  return (
    <Layout>
      <h5 className='text-center text-white pt-4'>Double tap to add to Favorites</h5>
      {activePage == 'Cats' && <Pets></Pets>}
    </Layout>
  );
};
