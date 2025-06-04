// Filter.js
import React from 'react';
import SearchIcon from '../../image/search.svg';
const Filter = ({ searchQuery, handleInputChange }) => {
  return (
    
    <div className="search-box">
      <button class="btn-search"><img src={SearchIcon} alt='Search icon'></img></button>
      <input  
        type="text" className="input-search"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Type to Search..."
      />
    </div>
   
    
  );
};

export default Filter;
