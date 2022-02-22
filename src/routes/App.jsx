import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Cats } from '../containers/Cats';
import { Dogs } from '../containers/Dogs';
import { About } from '../containers/About';
import { Favorites } from '../containers/Favorites';
import { NotFound } from '../containers/NotFound';
import { Layout } from '../components/Layout';
import { ImageLoader } from '../components/ImageLoader';

export const App = () => {
  return (
    <ImageLoader.Consumer value={{data}}>
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

    </ImageLoader.Consumer>
    );
};
