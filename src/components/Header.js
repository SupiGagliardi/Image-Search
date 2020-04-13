import React from 'react';
import './Header.scss';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <div className="header-container">
      <h1>Your image repository</h1>
      <SearchBox />
    </div>
  );
};

export default Header;
