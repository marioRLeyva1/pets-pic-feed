import React from 'react';
import axios from 'axios';
import initialState from '../initialState';

const useInitialState = () => {
  const [params, setParams] = React.useState([15, 1]);
  const [results, setResults] = React.useState([]);
  const [errorAPI, setErrorAPI] = React.useState('Loanding pics...');
  const [isFavoritesPageActive, setIsFavoritesPageActive] =
    React.useState(false);
  const [activePage, setActivePage] = React.useState('Home');

  const configParams = (config) => {
    setParams(config);
  };
  const getCatAPI = () => {
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
  };
  const getDogAPI = () => {
    const url = `https://api.thedogapi.com/v1/images/search?limit=${params[0]}&page=${params[1]}&order=Rand`;
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
  };
  return {
    getCatAPI,
    getDogAPI,
    results,
    errorAPI,
    configParams,
    errorAPI,
    params,
    isFavoritesPageActive,
    setIsFavoritesPageActive,
    activePage,
    setActivePage,
  };
};

export default useInitialState;
