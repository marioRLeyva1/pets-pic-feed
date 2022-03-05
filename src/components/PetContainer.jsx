import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';
import FavoritesContext from '../context/FavortiesContext';
import Modal from './Modal';

const PetContainer = (props) => {
  const [added, setAdded] = React.useState(false);
  const { addToFavorites, favorites, removeFromFavorites } = React.useContext(FavoritesContext);
  const {activePage, openModal, setOpenModal} = React.useContext(AppContext);

  const add = (url) => () => {
    if(activePage == 'Favorites'){
      removeFromFavorites(url);
      setTimeout(() => {
        setAdded(false);
      },350);
    }else{
      if(favorites.includes(url)){
        setOpenModal(true);
        console.log("error, favorite already added!");
      }else{
        addToFavorites(url);
        setAdded(true);
        setTimeout(() => {
          setAdded(false);
        },350);
      }
    }
  };
  return (
    <section className="flex justify-center">
      <div className="shadow-2xl flex justify-content rounded bg-slate-400 border-2 border-slate-300 w-full h-96 md:hover:scale-105 transition">
        <img className={`w-full h-full object-contain ${added == true && 'opacity-50 transition'}`} src={props.src} onDoubleClick={add(props.src)}></img>
        <img className={`fixed z-10 w-full h-full scale-75 object-contain ${added == false && 'hidden'}`} src="/images/white-heart.png" alt="liked" />
      </div>
    </section>
  );
};

export default PetContainer;
