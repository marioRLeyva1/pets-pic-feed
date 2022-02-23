import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {

  const {getCatAPI, getDogAPI} = React.useContext(AppContext)
  const catAPI = () =>{
    getCatAPI();
  }
  const dogAPI = () =>{
    getDogAPI();
  }
  
  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="header-title">Pet Feed</h1>
        <p className="header-description">
          Random pics of our favorites pets
        </p>
      </div>
      <div className="button-container">
        <Link to={'/'}>
          <button className="home-button">Home</button>
        </Link>
        <Link to={'/dogs'}>
          <button className="dog-button" onClick={dogAPI}>Dog</button>
        </Link>
        <Link to={'/cats'}>
          <button className="cat-button" onClick={catAPI}>Cats</button>
        </Link>
        <Link to={'/favorites'}>
          <button className="favorites">Favoritos</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
