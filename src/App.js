import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import CityDetails from './components/CityDetails';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*  <Route path='/details/:id/' element={<CityDetails />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
