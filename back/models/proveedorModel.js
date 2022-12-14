import { DataTypes } from "sequelize";
import baseDatos from "../database/conexionBaseDatos.js";


const Proveedor = baseDatos.define('proveedores', {
    nombre: {
        type:DataTypes.STRING
    },
    descripcion: {
        type:DataTypes.STRING
    }
})

export default Proveedor;