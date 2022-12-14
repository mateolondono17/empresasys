import Proveedor from "../models/proveedorModel.js";

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
            const proveedor = await Proveedor.findAll()
            res.json(proveedor)
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
            await Proveedor.update(req.body,{
                where: { id: req.params.id},
            })
            res.json({
                message: 'Proveedor Editado Correctamente'
            })
        } catch (error) {
            res.json({
                message: error.message
            });
        }
};
    
    
    const eliminarProveedor = async (req, res) =>{
        try {
            await Proveedor.destroy({
                where: {id: req.params.id},
            });
            res.json({
                message: 'Proveedor Eliminado Correctamente'
            });
            
        } catch (error) {
            res.json({
                message: error.message
            });
        }
};

export {
    mostrarProveedor,
    mostrarProveedores,
    crearProveedor,
    eliminarProveedor,
    editarProveedor
}