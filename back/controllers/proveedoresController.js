import Proveedor from "../models/productoModel.js";

const mostrarProveedor = async (req, res) =>{
    try {
        const Proveedor = await Proveedor.findOne({where: {id: req.params.id}})
        res.json(Proveedor)
      } catch (error) {
        res.json({
          message: "Proveedor no existe: "+ error
      })
    
      }
};


    const mostrarProveedores = async (req, res) =>{
        try {
            const Proveedor = await Proveedor.findAll()
            res.json(Proveedor)
          } catch (error) {
            res.json({
              message: "base de datos vacia"
            })
            
          }
      
};
    
    
    const crearProveedor = async (req, res) => {
        try {
    
            await Proveedor.create(req.body)
            res.json({
                message:'Proveedor Creado Correctamente'
            })
            
        } catch (error) {
            res.json({
                message:'No se pudo registrar el Proveedor'+ error
            })
            
        }
    
};
    
    
    const editarProveedor = async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
};
    
    
    const eliminarProveedor = async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
};

export {
    mostrarProveedor,
    mostrarProveedores,
    crearProveedor
}