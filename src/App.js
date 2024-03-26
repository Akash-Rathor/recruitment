import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import NavBar from '../src/components/navbar/NavBar';
import CompanyReview from '../src/pages/review/CompanyReview';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/company/review' element={<CompanyReview/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
