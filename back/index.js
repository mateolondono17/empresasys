import express from 'express';
import baseDatos from './database/conexionBaseDatos.js';
import cors from'cors';
import productoRouter from './routes/routerProducto.js';
import proveedorRouter from './routes/routerProveedor.js';
import clienteRouter from './routes/routerCliente.js';


const app = express();
const port = 3100;

try {
    await baseDatos.authenticate()
    console.log('Conexion Exitosa A La Base De Datos')
    
}catch (error) {
    console.log('Conexion No Exitosa')
}

app.use(express.json())
app.use(cors())

app.use('/productos', productoRouter)
app.use('/clientes', clienteRouter)
app.use('/proveedores', proveedorRouter)




app.listen(3100, () =>{
    console.log('Servidor Corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})