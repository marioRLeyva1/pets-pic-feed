import React, { useContext } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';

export const Favorites = () => {
  const { favorites, removeFromFavorites, addToFavorites } = useContext(AppContext);
  const images  = favorites;
  const fav = 'poncho'
  const onClick = image => () => {
    addToFavorites('misho')
  }
  return (
    <Layout>
      <div className="favorites-container">
        <h1>Favorites</h1>
        <button onClick={onClick} image={'poncho'}>Add poncho</button>
        {!images && <p>Nada</p>}
        {images && <p>{images}</p>}
        <Pets></Pets>
      </div>
    </Layout>
  );
};
