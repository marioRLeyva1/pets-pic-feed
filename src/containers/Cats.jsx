import React, { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import PetContainer from '../components/PetContainer';
import Pets from '../components/Pets';
import AppContext from '../context/AppContext';

export const Cats = () => {
  const {getCatAPI} = React.useContext(AppContext)
  useEffect(() => {getCatAPI()}, [])
  
  return (
    <Layout>
      <h1>Cats</h1>
      <Pets></Pets>
    </Layout>
  );
};
