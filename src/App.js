import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Container } from 'react-bootstrap';




const App = () => {
  return (
    <Container fluid className='p-0'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
