import express from 'express';
import baseDatos from './back/database/conexionBaseDatos.js';
import cors from'cors';
import productoRouter from './back/routes/routerProducto.js';


const app = express();

try {
    await baseDatos.authenticate()
    console.log('Conexion Exitosa A La Base De Datos')
    
}catch (error) {
    console.log('Conexion No Exitosa')
}


app.use(cors())
app.use('/productos', productoRouter)
app.use(express.json())



app.listen(3100, () =>{
    console.log('Servidor Corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})