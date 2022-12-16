import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiProductos = "http://localhost:3100/productos";

export const TablaProducto = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos();
  }, []);

  const listarProductos = async () => {
    const response = await axios.get(apiProductos);
    setProductos(response.data);
    console.log(response.data);
  };

  return (
    <section className="d-flex prueba justify-content-center flex-column ml-5">
      <section>
        <Link to={"/crearProductos"} className="botonProducto mt-5 btn">
          Nuevo producto
        </Link>
      </section>
      <table className="table tabla table-striped">
        <thead className="m-5 thead ">
          <tr className="tr encabezado">
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {productos.map((producto) => (
            <tr className="text-center w-80" key={producto.id}>
              <td className="text-white">{producto.nombre}</td>
              <td className="text-white"> {producto.descripcion}</td>
              <td>
                <Link className=" text-white  btn w-80" to={"/editar"}>
                  Editar
                </Link>{" "}
                {"| "}
                <Link className="text-white btn w-80" to={"eliminar"}>
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    
    
  );
};
