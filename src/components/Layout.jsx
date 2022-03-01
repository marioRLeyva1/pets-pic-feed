import React from 'react';
import Footer from './Footer';
import Header from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="bg-slate-700 self-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
