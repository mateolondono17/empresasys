import express from 'express'
import { mostrarProducto, mostrarProductos, crearProducto } from '../controllers/productoController.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos)
productoRouter.get('/:id', mostrarProducto)

export default productoRouter;