import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiProductos = "http://localhost:3000/productos";

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
    <section>
      <section>
        <Link to={"/crear"} className="botonProducto mt-5  btn">
          Nuevo producto
        </Link>
      </section>
      <table className="table tabla table-striped">
        <thead className="m-5 tablaProducto space-between w-80  ">
          <tr className="tr">
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr className="text-center w-80" key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>
                <Link className="btn w-80" to={"/editar"}>
                  Editar
                </Link>{" "}
                {"| "}
                <Link className="btn w-80" to={"eliminar"}>
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
