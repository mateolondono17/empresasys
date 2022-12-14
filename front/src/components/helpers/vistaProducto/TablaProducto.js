import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiProductos = 'http://localhost:3000/productos'


export const TablaProducto = () => {
  
  const [productos, setProductos] = useState([])
  
  useEffect(()=>{
    listarProductos()

  }, [])

  const listarProductos = async () =>{
    const response = await axios.get(apiProductos)
    setProductos(response.data)
    console.log(response.data)
    
  }

  return (
    <section className='bodyTabla'>
        <table className="tablaProducto table table-dark table-striped">
        <section>
        <Link to={'/crear'} className="mt-5 btn">Nuevo producto</Link>
        </section>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      productos.map((producto) => (
        <tr className='text-center' key={producto.id}>
          <td>{producto.nombre} </td>
          <td>{producto.descripcion} </td>
          <td>
          <Link className='btn' href=''>Editar</Link>{"|"}
          <Link className="btn" href="">Eliminar</Link>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
    </section>
  )
}