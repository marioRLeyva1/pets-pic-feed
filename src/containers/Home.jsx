import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const Home = () => {
  useEffect(() => {
    document.title = 'Home';
    // const getLocalStorage = localStorage.getItem('images');
    // console.log('getLocalStorage Ejecuted');
    // if (!getLocalStorage) {
    //   console.log('Favorites Empty');
    //   localStorage.setItem('images', JSON.stringify([]));
    // } else {
    //   console.log("Favorites alredy exists in localStorage");
    // }
  }, []);

  return (
    <div className="bg-slate-800 text-center h-auto">
      <h1 className="fixed top-0 w-full text-2xl text-gray-100 p-4 sm:text-6xl">
        Pets Pictures Feed
      </h1>
      <section className="flex justify-center w-full h-screen">
        <div className="w-4/6 flex-col sm:flex sm:flex-row justify-center self-center">
          <Link to={'/cats'} className="margin-5">
            <img
              src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
              alt="cat"
              className="margin-1"
            />
          </Link>
          <Link to={'/dogs'}>
            <img
              src="https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg"
              alt="dog"
              className="cat-button"
            />
          </Link>
        </div>
      </section>
      <footer className="fixed bottom-0 w-screen">
        <Footer></Footer>
      </footer>
    </div>
  );
};
