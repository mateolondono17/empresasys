import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiProveedores = "http://localhost:3100/Proveedores";

export const TablaProveedor = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    listarProveedor();
  }, []);

  const listarProveedor = async () => {
    const response = await axios.get(apiProveedores);
    setProveedores(response.data);
    console.log(response.data);
  };

  return (
    <section className="d-flex prueba justify-content-center flex-column ml-5">
      <section>
        <Link to={"/crearProveedores"} className="botonProducto mt-5  btn">
          Nuevo Proveedores
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
          {proveedores.map((proveedor) => (
            <tr className="text-center w-80" key={proveedor.id}>
              <td className="text-white ">{proveedor.nombre}</td>
              <td className="text-white ">{proveedor.descripcion}</td>
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
