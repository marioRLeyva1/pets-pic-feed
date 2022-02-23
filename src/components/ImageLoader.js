import React, { useEffect } from 'react';
import axios from 'axios';
import { Home } from '../containers/Home';

export const MyContext = React.createContext();

function ImageLoader() {
  const [params, setParams] = React.useState([9, 1]);
  const [results, setResults] = React.useState([]);
  const [errorAPI, setErrorAPI] = React.useState('Loanding pics...');
  const [images, setImages] = React.useState([]);
  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=${params[0]}&page=${params[1]}&order=Rand`;
    axios({
      method: 'GET',
      url,
      timeout: 4000, // 4 seconds timeout
      Headers: {
        'x-api-key': 'eaae48d5-0315-4c01-bc25-f7585f78bcfe',
      },
    })
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        setErrorAPI(error);
      });
  }, []);

  if (!results) {
    console.log(errorAPI);
  } else {
    results.map((url) => setImages([...url, url]));
    console.log(images);
  }
}

export default ImageLoader;
