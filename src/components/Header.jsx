import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
  const { getCatAPI, getDogAPI, activePage } = React.useContext(AppContext);
  const catAPI = () => {
    getCatAPI();
  };
  const dogAPI = () => {
    getDogAPI();
  };

  return (
    <header className="sticky top-0 bg-slate-800 w-full h-auto sm:h-36 sm:flex sm:justify-center">
      <section className="sm:w-4/6 sm:flex sm:justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="sm:text-6xl text-4xl text-gray-400 sm:text-gray-100 text-center sm:text-left hover:text-gray-400">
            Pet Feed
          </h1>
          <p className="text-lg text-gray-400 sm:text-gray-300 hover:text-gray-400 text-center">
            Random pics of our favorites pets
          </p>
        </div>
        <nav className="flex gap-6 text-gray-100 justify-center">
          <Link to={'/'}>
            <button className="sm:w-20 rounded-md p-1 hover:scale-x-110 duration-75">
              Home
            </button>
          </Link>
          <Link to={'/dogs'}>
            <button
              className={`sm:w-20 ${activePage == 'Dogs' && 'sm:border-2 text-emerald-300'} rounded-md p-1 hover:scale-x-110 duration-75 sm:text-gray-100`}
              onClick={dogAPI}
            >
              Dogs
            </button>
          </Link>
          <Link to={'/cats'}>
            <button
              className={`sm:w-20 ${activePage == 'Cats' && 'sm:border-2 text-emerald-300'} rounded-md p-1 hover:scale-x-110 duration-75 sm:text-gray-100`}
              onClick={catAPI}
            >
              Cats
            </button>
          </Link>
          <Link to={'/favorites'}>
            <button
              className={`sm:w-20 ${activePage == 'Favorites' && 'sm:border-2 text-emerald-300'} rounded-md p-1 hover:scale-x-110 duration-75 sm:text-gray-100`}
            >
              Favorites
            </button>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
