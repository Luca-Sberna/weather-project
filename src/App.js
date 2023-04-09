import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Container } from 'react-bootstrap';


/* DA FARE:
-TOGLIERE sole
- gradient SFONDO
-posizionamento elementi tablet e pc 
-aggiunta ulteriori info in forecast affianco a gradi
-animazioni e hover
-pagina details della citta con tutte le stats fornite dalla prima fetch e possibilita di tornare nella home
-cambio ombreggiature con sass
*/



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
