import React, { useContext } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';

export const Favorites = () => {
  const { errorAPI, params, test, setTest, favorites, removeFromFavorites, addToFavorites } = useContext(AppContext);
  
  const fav = favorites.favorites
  const add = () => {
    console.log(test);
    console.log(errorAPI);
    console.log(params);
    removeFromFavorites('gatnecia')
    console.log(favorites);
    console.log(fav);
  }
  const addTest = () => {
    addToFavorites('test')
  }
  return (
    <Layout>
      <div className="favorites-container">
        <h1>Favorites</h1>
        <button onClick={add} image={'poncho'}>Add poncho</button>
        {favorites.favorites.map(element => <p key={element}>{element}</p>)}
        <button onClick={addTest}>Borar</button>
        <Pets></Pets>
      </div>
    </Layout>
  );
};
