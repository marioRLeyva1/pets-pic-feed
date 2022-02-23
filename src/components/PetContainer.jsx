import React from 'react';

const PetContainer = () => {
  return (
    <div className="pet-container">
      <div className="pet">
        <img
          src={
            'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg'
          }
        />
        <i class="fa-regular fa-heart"></i>
        <p className="fact">Los gatitos</p>
      </div>
    </div>
  );
};

export default PetContainer;
