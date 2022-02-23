import React, { useContext } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';

export const Favorites = () => {
  const { errorAPI, params, test, setTest, favorites, removeFromFavorites, addToFavorites } = useContext(AppContext);
  
  const fav = favorites.favorites
  const onClick = () => {
    console.log(test);
    console.log(errorAPI);
    console.log(params);
    console.log(favorites);
    console.log(fav);
    addToFavorites("test")
    
  }
  return (
    <Layout>
      <div className="favorites-container">
        <h1>Favorites</h1>
        <button onClick={onClick} image={'poncho'}>Add poncho</button>
        {/* {fav.map(element => <p key={element}>{element}</p>)} */}
        <Pets></Pets>
      </div>
    </Layout>
  );
};
