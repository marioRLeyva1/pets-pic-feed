import React from 'react';
import {ImageLoader, ImageLoaderProvider} from '../components/ImageLoader';

export const Home = () => {
  const {data} = React.useContext(ImageLoaderProvider);
  console.log(data);
  return (
    <div>
      <p>Home</p>
      
    </div>
  );
};
