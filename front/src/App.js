import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";

import FormularioCrearCliente from "./pages/Formularios/FormularioCrearCliente";
import FormularioCrearProveedor from "./pages/Formularios/FormularioCrearProveedor";
import FormularioCrearProducto from "./pages/Formularios/FormularioCrearProducto";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="Productos" element={<Productos />} />
          <Route path="Clientes" element={<Clientes />} />
          <Route path="Proveedores" element={<Proveedores />} />
          <Route path="/crear" element={<FormularioCrearCliente />} />
          <Route path="/crearProveedores" element={<FormularioCrearProveedor />} />
          <Route path="/crearProductos" element={<FormularioCrearProducto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

