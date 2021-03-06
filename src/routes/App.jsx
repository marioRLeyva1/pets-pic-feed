import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Cats } from '../containers/Cats';
import { Dogs } from '../containers/Dogs';
import { About } from '../containers/About';
import { Favorites } from '../containers/Favorites';
import { NotFound } from '../containers/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import useLocalStorage from '../hooks/useLocalStorage';
import FavoritesContext from '../context/FavortiesContext';
import '../styles/tailwind.css';

export const App = () => {

  const context = useInitialState();
  const favorites = useLocalStorage();
  return (
    <AppContext.Provider value={context}>
      <FavoritesContext.Provider value={favorites}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cats" element={<Cats />} />
            <Route exact path="/dogs" element={<Dogs />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FavoritesContext.Provider>
    </AppContext.Provider>
  );
};
