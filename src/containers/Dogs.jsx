import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';

export const Dogs = () => {
  const {getDogAPI} = React.useContext(AppContext);
  useEffect(() => {getDogAPI}, [])
  return (
    <Layout>
      <div className="dog-container">
        <h1>Dogs</h1>
        <Pets></Pets>
      </div>
    </Layout>
  );
};
