import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
  const { getCatAPI, getDogAPI } = React.useContext(AppContext);
  const catAPI = () => {
    getCatAPI();
  };
  const dogAPI = () => {
    getDogAPI();
  };

  return (
    <header className='bg-slate-800 w-full h-36 flex justify-center'>
      <section className='w-4/6 flex justify-between items-center'>
        <div className="flex flex-col justify-center">
          <h1 className='text-6xl text-gray-100'>Pet Feed</h1>
          <p className='text-lg text-gray-300 hover:text-gray-400'>Random pics of our favorites pets</p>
        </div>
        <nav className="flex gap-6 text-gray-100">
          <Link to={'/'}>
            <button className="rounded-md p-1 hover:scale-x-110 duration-75">Home</button>
          </Link>
          <Link to={'/dogs'}>
            <button className="rounded-md p-1 hover:scale-x-110 duration-75" onClick={dogAPI}>
              Dog
            </button>
          </Link>
          <Link to={'/cats'}>
            <button className="rounded-md p-1 hover:scale-x-110 duration-75" onClick={catAPI}>
              Cats
            </button>
          </Link>
          <Link to={'/favorites'}>
            <button className="rounded-md p-1 hover:scale-x-110 duration-75">Favoritos</button>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
