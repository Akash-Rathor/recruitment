import React, { useState } from 'react';
// import './searchpanel.css';

const SearchComponent = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [experience, setExperience] = useState('');
 const [location, setLocation] = useState('');
 const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']; // Example locations

 const handleExperienceChange = (e) => {
  const re = /^[+-]?\d+(\.\d{1})?$/;
  if (e.target.value === '' || re.test(e.target.value)) {
     setExperience(e.target.value);
  }
 };
 

 const handleSearch = () => {
    // Implement search logic here
    console.log(searchTerm, experience, location);
 };

 return (
    <div className="container mx-auto px-20">
      <div className='justify-center position-relative items-center flex flex-col sm:flex-col'>
        <h1 className="text-4xl font-bold mb-4 mt-20 heading-font">Find your dream job now</h1>
        <p className="text mb-4 mt-5">100k+ Jobs to explore</p>
      </div>
      <div className="flex justify-center">
        <main className="container mx-auto mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-full bg-white shadow-md p-7 rounded-full">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-2 flex-grow">
              <i className="fas fa-search text-gray-800"></i>
              <input
                type="text"
                placeholder="Enter skills/designations/companies"
                className="p-2 mb-2 md:mb-0 flex-grow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search Term"
              />
              <div className='border border-custom-gray h-5 mx-2 bg-custom-gray'></div>
              <input
              type="text"
              placeholder="Select Experience in years"
              className="p-2 mb-2 md:mb-0 flex-grow"
              value={experience}
              onChange={handleExperienceChange}
              aria-label="Experience"
              />
              <div className='border border-custom-gray h-5 mx-2 bg-custom-gray'></div>
              <select
                className="p-2 mb-2 md:mb-0 flex-grow bg-white rounded-md p-2 focus:outline-none focus:ring-0 text-base shadow-md p-3.5"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Location"
                >
                <option value="">Select Location</option>
                {locations.map((locationOption, index) => (
                    <option key={index} value={locationOption}>{locationOption}</option>
                  ))}
                </select>
            </div>
            <button
              className="bg-gray-800 hover:bg-blue-700 text-white ml-2 font-bold py-2 px-8 rounded-full"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </main>
      </div>
    </div>
 );
};

export default SearchComponent;
