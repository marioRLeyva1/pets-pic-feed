import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

export const Dogs = () => {
  const { getDogAPI, setIsFavoritesPageActive, setActivePage } =
    React.useContext(AppContext);
  useEffect(() => {
    getDogAPI();
    document.title = 'Dogs';
    setIsFavoritesPageActive(false);
    setActivePage('Dogs');
  }, []);
  return (
    <Layout>
      <div className="dog-container">
        <h1>Dogs</h1>
        <Pets></Pets>
      </div>
    </Layout>
  );
};
