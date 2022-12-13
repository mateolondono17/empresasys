
import './App.css';
import { BarraLateral } from './components/helpers/barraLateral/BarraLateral';
import {Main} from './components/layouts/Main';


function App() {
  return (
    <section className="App">
      <BarraLateral/>
      <Main/>
    </section>
  );
}


export default App;
