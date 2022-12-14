import Producto from "../models/productoModel.js";



const mostrarProducto = async (req, res) =>{
    try {
        const producto = await producto.findOne({where: {id: req.params.id}})
        res.json(producto)
      } catch (error) {
        res.json({
          message: "producto no existe: "+ error
      })
    
      }
};



    const mostrarProductos = async (req, res) =>{
        try {
            const producto = await producto.findAll()
            res.json(producto)
          } catch (error) {
            res.json({
              message: "base de datos vacia",
              
               
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
        await Producto.update(req.body,{
            where: {id: req.params.id}
        });
        res.json({
            message:'Producto Editado Correctamente '
        });
    } catch (error) {
        res.json({
            message: error.message
        });
        
    }
};




const eliminarProducto = async (req, res) =>{
    try {
        await Producto.destroy({
            where: { id: req.params.id},
        })
        res.json({
            message: 'Producto Eliminado Correctamente'
        })
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};




export{
    mostrarProducto,
    mostrarProductos,
    crearProducto,
    editarProducto,
    eliminarProducto
}