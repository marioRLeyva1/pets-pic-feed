import React from 'react';
import { Layout } from '../components/Layout';
import PetContainer from '../components/PetContainer';
import Pets from '../components/Pets';

export const Cats = () => {
  return (
    <Layout>
      <h1>Cats</h1>
      <Pets></Pets>
    </Layout>
  );
};
