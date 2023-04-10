import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Container } from 'react-bootstrap';


/* DA FARE:
-aggiunta ulteriori info in forecast affianco a gradi -IMPORTANT
-pagina details della citta con tutte le stats fornite dalla prima fetch(e aggiunta delle stesse nella tabella della versione xl) e possibilita di tornare nella home
-cambio ombreggiature con sass
-personaliz. not found


      sorry stefano non sono riuscito a finirlo come avrei voluto , sono le 23:17 del 10/04/2023 e penso dopo questo week-end di svenire sul letto istantaneamente
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
