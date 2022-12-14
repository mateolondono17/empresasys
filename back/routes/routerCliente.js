import express from 'express'
import { mostrarCliente, mostrarClientes, crearCliente, eliminarCliente, editarCliente } from '../controllers/clienteController.js'

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente)
clienteRouter.get('/', mostrarClientes)
clienteRouter.get('/:id', mostrarCliente)
clienteRouter.delete('/:id', eliminarCliente)
clienteRouter.put('/:id', editarCliente)

export default clienteRouter;