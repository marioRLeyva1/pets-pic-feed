import React from 'react';
import Footer from './Footer';
import Header from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
