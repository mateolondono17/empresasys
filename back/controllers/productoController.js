import Producto from "../models/productoModel.js";



const mostrarProducto = async (req, res) =>{
    try {
        const Producto = await Producto.findOne({where: {id: req.params.id}})
        res.json(Producto)
      } catch (error) {
        res.json({
          message: "producto no existe: "+ error
      })
    
      }
};



    const mostrarProductos = async (req, res) =>{
        try {
            const Producto = await Producto.findAll()
            res.json(Producto)
          } catch (error) {
            res.json({
              message: "base de datos vacia"
            })
            
          }
      
};



const crearProducto = async (req, res) => {
    try {

        await Producto.create(req.body)
        res.json({
            message:'Producto Creado Correctamente'
        })
        
    } catch (error) {
        res.json({
            message:'No se pudo registrar el Producto'+ error
        })
        
    }

};




const editarProducto = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
};




const eliminarProducto = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
};




export{
    mostrarProducto,
    mostrarProductos,
    crearProducto
}