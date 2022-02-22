import React, { useEffect } from 'react';
import axios from 'axios';

const ImageLoader = React.createContext();

function ImageLoaderProvider(props) {

  const [data, setData] = React.useState({
    numberOfImages: 9,
    pageOrigin: 1
  })
  const [results, setResults] = React.useState([]);
  useEffect(() => {
    console.log(data);
    const url = `https://api.thecatapi.com/v1/images/search?limit=${data.numberOfImages}&page=${data.pageOrigin}&order=Rand`;
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
      .catch((error) => console.error(error));
  }, [data]);

  if (!results) {
    return <p>Cargando</p>;
  }
  return (
    <div>
      <ImageLoader.Provider value={{data, setData, results, setResults,}}>
        {props.children}
      </ImageLoader.Provider>

      {/* {results.map((result) => (
        <img src={result.url} key={result.id} alt="cats" />
      ))}
      <p>test</p> */}
    </div>
  );
}

export {ImageLoader, ImageLoaderProvider};
