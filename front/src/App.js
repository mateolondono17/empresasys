
import './App.css';
import { BarraLateral } from './components/helpers/barraLateral/BarraLateral';
import {Main} from './components/layouts/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/helpers/Inicio/Home';
import { ConexionProducto } from './components/helpers/vistaProducto/ConexionProducto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
  {
    path: '/productos',
    element: <ConexionProducto />
  }
  
])
function App() {
  return (
    <section className="">
      <RouterProvider router={router} />
      <BarraLateral/>
      <Main/>
      
    </section>
  );
}


export default App;
