import { DataTypes } from "sequelize";
import baseDatos from "../database/conexionBaseDatos.js";


const Cliente = baseDatos.define('clientes', {
    nombre: {
        type:DataTypes.STRING
    },
    descripcion: {
        type:DataTypes.STRING
    }
})

export default Cliente;