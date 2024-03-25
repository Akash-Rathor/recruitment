import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import MyCompany from './pages/mycompany/MyCompany';
import NavBar from '../src/components/navbar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:company_name' element={<MyCompany/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
