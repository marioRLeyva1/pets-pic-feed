import React from 'react';
import AppContext from '../context/AppContext';
import PetContainer from './PetContainer';

const Pets = () => {
  const {results} = React.useContext(AppContext);

  return (
    <div className="pets-container">
      <div className="images-container">
        {results.map(element => <PetContainer key={element.url} src={element.url} description={element.id}></PetContainer>)}
      </div>
    </div>
  );
};

export default Pets;
