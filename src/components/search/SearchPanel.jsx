import React from 'react';
import './searchpanel.css';

const SearchComponent = () => {
 return (
    <div className="container mx-auto px-20 heading">
      <h1 className="text-4xl font-bold mb-4 mt-20" style={{"font-family":'Satoshi',textAlign:'center'}}>Find your dream job now</h1>
      <h1 className="text mb-4 mt-5" style={{"font-family":'Satoshi',textAlign:'center'}}>100k+ Jobs to explore</h1>
      <div className="flex justify-center">
        <main className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-full bg-white rounded-lg shadow-md p-7">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 flex-grow">
              <i className="fas fa-search text-gray-800"></i>
            <input type="text" placeholder="Enter skills/designations/companies" className="  p-2 mb-2 md:mb-0 flex-grow" />
            <div className='pipe'></div>
            <input type="text" placeholder="Select Experience" className="  p-2 mb-2 md:mb-0 flex-grow" />
            <div className='pipe'></div>
            <input type="text" placeholder="Enter Location" className="  p-2 mb-2 md:mb-0 flex-grow" />
          </div>
          <button className="bg-gray-800 hover:bg-blue-700 text-white ml-2 font-bold py-2 px-8 rounded-full">Search</button>
          </div>
      </main>
      </div>
    </div>
 );
};

export default SearchComponent;
