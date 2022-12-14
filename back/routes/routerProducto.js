import express from 'express'
import { mostrarProducto, mostrarProductos, crearProducto, eliminarProducto, editarProducto } from '../controllers/productoController.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos)
productoRouter.get('/:id', mostrarProducto)
productoRouter.delete('/:id', eliminarProducto)
productoRouter.put('/:id', editarProducto)

export default productoRouter;