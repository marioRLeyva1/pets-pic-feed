import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';

const PetContainer = (props) => {
  const [added, setAdded] = React.useState(false);
  const { addToFavorites, favorites } = React.useContext(FavoritesContext);
  const add = (url) => () => {
    addToFavorites(url);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    },350);
  };
  return (
    <section className="flex justify-center">
      <div className="rounded bg-slate-400 border-2 border-slate-300 w-full h-96 md:hover:scale-105 transition">
        <img className={`w-full h-full object-contain ${added == true && 'opacity-50 transition'}`} src={props.src} onDoubleClick={add(props.src)}></img>
      </div>
    </section>
  );
};

export default PetContainer;
