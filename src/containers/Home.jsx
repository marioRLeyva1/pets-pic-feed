import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Pets Pictures Feed</h1>
      <Link to={'/cats'}>
        <img
          onClick={getCatAPI}
          src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
          alt="cat"
          className="cat-button"
        />
      </Link>
      <Link to={'/dogs'}>
        <img
          onClick={getDogAPI}
          src="https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg"
          alt="dog"
          className="cat-button"
        />
      </Link>
      <Footer></Footer>
    </div>
  );
};
