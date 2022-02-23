import React from 'react';
import { Layout } from '../components/Layout';
import Pets from '../components/Pets';

export const Dogs = () => {
  return (
    <Layout>
      <div className="dog-container">
        <h1>Dogs</h1>
        <Pets></Pets>
      </div>
    </Layout>
  );
};
