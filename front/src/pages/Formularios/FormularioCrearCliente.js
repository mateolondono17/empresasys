import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const apiClientes = "http://localhost:3100/clientes";

const FormularioCrearCliente = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate()

  const guardarCliente = async(e) => {
    e.preventDefault()
    const cliente = {
      nombre: nombre,
      descripcion: descripcion
    }
    await axios.post(apiClientes, cliente)
    navigate('/clientes')
  }

  return (
    <section>
      
      <section className="row ">
        <section className="col-3"></section>
        <section className=" col-6">
          <form onSubmit={guardarCliente} className="formulario form-control  mt-5 p-5">
            <h1 className="m-5 text-4xl">Crear nuevo Cliente</h1>
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
                className="btnFormulario btn  form-control"
                type="submit"
              />
              <Link
                className="btnFormulario btn form-control"
                to={"/clientes"}
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

export default FormularioCrearCliente;