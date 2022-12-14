import express from 'express'
import { crearProveedor, mostrarProveedor, mostrarProveedores } from '../controllers/proveedoresController.js'

const proveedorRouter = express.Router();

proveedorRouter.post('/', crearProveedor)
proveedorRouter.post('/:id', mostrarProveedor)
proveedorRouter.post('/', mostrarProveedores)

export default proveedorRouter;