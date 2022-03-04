import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className="bg-slate-800 text-center h-auto">
      <h1 className="fixed top-5 w-full text-2xl sm:text-5xl text-gray-100 p-4 md:text-6xl hover:text-gray-400">
        Pets Pictures Feed
      </h1>
      <section className="flex justify-center w-full h-screen">
        <div className="w-4/6 flex-col md:flex md:h-80 md:flex-row justify-center self-center">
          <Link to={'/cats'} className="group md:w-full mx-5 hover:scale-110 transition">
            <img
              src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
              alt="cat"
              className="rounded h-full w-full object-cover group-hover:opacity-50 transition"
            />
            <h2 className='absolute top-1/2 w-full z-10 hidden group-hover:block text-white text-4xl transition'>Cats</h2>
          </Link>
          <Link to={'/dogs'} className="group md:w-full mx-5 md:h-80 hover:scale-110 transition">
            <img
              src="https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg"
              alt="dog"
              className="rounded h-full w-full object-cover group-hover:opacity-50 transition"
            />
            <h2 className='absolute top-1/2 w-full z-10 hidden group-hover:block text-white text-4xl transition'>Dogs</h2>
          </Link>
        </div>
      </section>
      <footer className="fixed bottom-0 w-screen">
        <Footer></Footer>
      </footer>
    </div>
  );
};
