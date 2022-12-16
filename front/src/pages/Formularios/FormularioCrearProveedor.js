import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const apiProveedoor = "http://localhost:3100/proveedores";

const FormularioCrearProveedor = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate()

  const guardarProveedor = async(e) => {
    e.preventDefault()
    const proveedor = {
      nombre: nombre,
      descripcion: descripcion
    }
    await axios.post(apiProveedoor, proveedor)
    navigate('/proveedores')
  }

  return (
    <section>
      
      <section className="row ">
        <section className=" col-3"></section>
        <section className=" col-6">
          <form onSubmit={guardarProveedor} className="formulario form-control  mt-5 p-5">
            <h1 className="m-5 text-4xl">Crear nuevo Proveedor</h1>
            <input
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              placeholder="Nombre"
              className="form-control mt-3"
              type="text"
            />
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripcion"
              className="form-control mt-3 mb-3"
              type="text"
            />
            <section className="">
              <input
                value={"Guardar"}
                className="btnFormulario btn form-control"
                type="submit"
              />
              <Link
                className="btnFormulario btn form-control"
                to={"/proveedores"}
              >
                Cancelar
              </Link>
            </section>
          </form>
        </section>
        <section className="col-3"></section>
      </section>
    </section>
  );
};

export default FormularioCrearProveedor;