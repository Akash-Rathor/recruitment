import React, { useState } from 'react';
import './MyCompany.css'; // Ensure this import is correct


const MyCompany = () => {
 const [sidePanel, setSidePanel] = useState(false);

 const toggleSidePanel = () => {
    setSidePanel(!sidePanel);
 };


 return (
  <div className='flex flex-col bg-gray-800 w-72 h-full relative'>
    {!sidePanel && <span onClick={toggleSidePanel} className="text-slate-600 p-2 m-4 bg-white hover:bg-blue-50 hover:border-lime-500 border-2 px-3.5 border-slate-300 shadow-2xl font-bold rounded-full hover:cursor-pointer absolute"><i className="fa-solid fa-chevron-right"></i></span>}
      {sidePanel && <span onClick={toggleSidePanel} className="text-slate-600 p-2 m-4 bg-white hover:bg-blue-50 hover:border-lime-500 border-2 px-3.5 border-slate-300 shadow-2xl font-bold rounded-full hover:cursor-pointer absolute right-0"><i className="fa-solid fa-chevron-left"></i></span>}
   <div className="bg-gray-800 text-white position-absolute" style={{display: sidePanel? 'block':'none' }}>
    {/* <div className="flex flex-col items-center mt-6">
      <span className="text-2xl font-semibold">Dashboard</span>
    </div> */}
    <nav className="mt-5 flex flex-col px-2 bg-gray-800 text-white justify-center">
      <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700">
        <span className="truncate">Dashboard</span>
      </a>
      <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700">
        <span className="truncate">Team</span>
      </a>
      <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700">
        <span className="truncate">Projects</span>
      </a>
      <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700">
        <span className="truncate">Calendar</span>
      </a>
    </nav>
  </div>
  </div>
);
};

export default MyCompany;
