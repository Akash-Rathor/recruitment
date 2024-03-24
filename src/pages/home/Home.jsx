import React from 'react'
import NavBar from '../../components/navbar/NavBar';
import SearchPanel from '../../components/search/SearchPanel';
import TopCompanies from '../../components/topcompanies/TopCompanies';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <SearchPanel/>
      <TopCompanies/>
    </div>
  )
}

export default Home;