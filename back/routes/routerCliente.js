import express from 'express'
import { mostrarCliente, mostrarClientes, crearCliente } from '../controllers/clienteController.js'

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente)
clienteRouter.post('/:id', mostrarCliente)
clienteRouter.post('/', mostrarClientes)

export default clienteRouter;