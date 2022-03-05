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
      <div className="dog-container">
        <h1>Dogs</h1>
        {activePage == 'Dogs' && <Pets></Pets>}
      </div>
    </Layout>
  );
};
