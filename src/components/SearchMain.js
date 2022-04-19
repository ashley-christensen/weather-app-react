import React, { useState } from 'react';
import WeatherDetails from './WeatherDetails';

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState('oakland');
  console.log(searchTerm);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder=' search city..'
            id='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className='searchButton'>Search</button>
      </div>
      <WeatherDetails />
    </>
  );
};

export default SearchMain;
