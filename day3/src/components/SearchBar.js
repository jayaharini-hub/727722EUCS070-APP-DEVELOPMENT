import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search for properties..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default SearchBar;
