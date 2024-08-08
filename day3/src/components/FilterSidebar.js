import React from 'react';
import '../styles/FilterSidebar.css';

const FilterSidebar = () => (
  <aside className="filter-sidebar">
    <h3>Filters</h3>
    <div className="filter-group">
      
    </div>
    <div className="filter-group">
      <label>
        Property Type
        <br></br>
        <br></br>
        <select>
          <option>Apartment</option>
          <option>House</option>
          <option>Condo</option>
          <option>Villa</option>
          <option>penthouse</option>
        </select>
      </label>
      <label>
        price
        <br></br>
        <br></br>
        <select>
          <option>10K-30k</option>
          <option>30k-50k</option>
          <option>50k-70k</option>
          <option>70k-90k</option>
          <option>1L-1.5L</option>
          <option>1.5L-2L</option>
          <option>Above 2L</option>
        </select>
      </label>
    </div>
  </aside>
);

export default FilterSidebar;
