import React from 'react'
import SearchPanel from '../../components/search/SearchPanel';
import TopCompanies from '../../components/topcompanies/TopCompanies';

const Home = () => {
  return (
    <div>
      <SearchPanel/>
      <TopCompanies/>
    </div>
  )
}

export default Home;