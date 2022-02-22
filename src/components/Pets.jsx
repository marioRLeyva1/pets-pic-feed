import React from 'react';
import PetContainer from './PetContainer';

const Pets = () => {
  return (
    <div className="pets-container">
      <div className="images-container">
        {images.map((image) => (
          <PetContainer key={url} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Pets;
