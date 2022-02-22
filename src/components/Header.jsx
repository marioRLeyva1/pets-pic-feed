import React from 'react';

const Header = () => {
  const petType = 'gato';
  return (
    <div className="header-container">
      <h1 className="header-title">Pet Feed</h1>
      <p className="header-description">
        Random pics of our favorites {petType}
      </p>
    </div>
  );
};

export default Header;
