import React from 'react';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <div>
      <label>
        Find your image:
        <input type="text" placeholder="Type keyword..." />
      </label>
    </div>
  );
};

export default SearchBox;
