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
    <header className="sticky z-10 top-0 bg-slate-800 w-full h-auto md:h-36 md:flex md:justify-center">
      <section className="md:w-4/6 md:flex md:justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-400 md:text-gray-100 text-center md:text-left hover:text-gray-400">
            Pet Feed
          </h1>
          <p className="text-lg text-gray-400 md:text-gray-300 hover:text-gray-400 text-center">
            Random pics of our favorites pets
          </p>
        </div>
        <nav className="flex gap-6 text-gray-100 justify-center">
          <Link to={'/'}>
            <button className="md:w-20 rounded-md p-1 hover:scale-x-110 duration-75">
              Home
            </button>
          </Link>
          <Link to={'/dogs'}>
            <button
              className={`md:w-20 ${activePage == 'Dogs' && 'md:border-2 text-emerald-300'} rounded-md p-1 hover:scale-x-110 duration-75 md:text-gray-100`}
              onClick={dogAPI}
            >
              Dogs
            </button>
          </Link>
          <Link to={'/cats'}>
            <button
              className={`md:w-20 ${activePage == 'Cats' && 'md:border-2 text-emerald-300'} rounded-md p-1 hover:scale-x-110 duration-75 md:text-gray-100`}
              onClick={catAPI}
            >
              Cats
            </button>
          </Link>
          <Link to={'/favorites'}>
            <button
              className={`md:w-20 ${activePage == 'Favorites' && 'md:border-2 text-emerald-300'} rounded-md p-1 hover:scale-x-110 duration-75 md:text-gray-100`}
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
