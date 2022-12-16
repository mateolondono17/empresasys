import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiCliente = "http://localhost:3100/clientes";

export const TablaCliente = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes();
  }, []);

  const listarClientes = async () => {
    const response = await axios.get(apiCliente);
    setClientes(response.data);
    console.log(response.data);
  };

  return (
    <section className="d-flex prueba justify-content-center flex-column ml-5 ">
      <section>
        <Link to={"/crear"} className="botonProducto mt-5  btn">
          Nuevo Cliente
        </Link>
      </section>
      
      <table className="table tabla table-striped">
        <thead className="m-5 thead ">
          <tr className="tr encabezado">
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <td scope="col">Acciones</td>
          </tr>
        </thead>
        <tbody className="tbody">
          {clientes.map((cliente) => (
            <tr className="text-center w-80" key={cliente.id}>
              <td className="text-white ">{cliente.nombre}</td>
              <td className="text-white ">{cliente.descripcion}</td>
              <td>
                <Link className="text-white color btn w-80" to={"/editar"}>
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