import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

export const Dogs = () => {
  const { getDogAPI, setIsFavoritesPageActive, setActivePage, activePage } =
    React.useContext(AppContext);
  useEffect(() => {
    getDogAPI();
    document.title = 'Dogs | Pets Pictures Feed';
    setIsFavoritesPageActive(false);
    setActivePage('Dogs');
  }, []);

  return (
    <Layout>
      <h5 className='text-center text-white pt-4'>Double tap to add to Favorites</h5>
      <div className="dog-container">
        {activePage == 'Dogs' && <Pets></Pets>}
      </div>
    </Layout>
  );
};
