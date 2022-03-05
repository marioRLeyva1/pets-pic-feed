import React from 'react';
import AppContext from '../context/AppContext';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';

export const Layout = ({ children }) => {
  const {openModal} = React.useContext(AppContext);
  return (
    <div className="bg-slate-700 self-center min-h-screen relative">
      {openModal == true && <Modal title={"Error!"} msg={"You added this pic to Favorites in the past"}></Modal>}
      <Header />
      {children}
      <Footer />
    </div>
  );
};
