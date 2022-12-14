import Cliente from "../models/clienteModel.js";



const mostrarCliente = async (req, res) =>{
    try {
        const Cliente = await Cliente.findOne({where: {id: req.params.id}})
        res.json(Cliente)
      } catch (error) {
        res.json({
          message: "Cliente No Existe: "+ error
      })
    
      }
};



const mostrarClientes = async (req, res) =>{
        try {
            const Cliente = await Cliente.findAll()
            res.json(Cliente)
          } catch (error) {
            res.json({
              message: "Base De Datos Vacia"
            })
            
          }
      
};
    


const crearCliente = async (req, res) => {
    try {

        await Cliente.create(req.body)
        res.json({
            message:'Cliente Creado Correctamente'
        })
        
    } catch (error) {
        res.json({
            message:'No se pudo registrar el Cliente'+ error
        })
        
    }

};


const editarCliente = async (req, res) =>{
    try {
        await Cliente.update(req.body,{
            where: {id: req.params.id}
        });
        res.json({
            message: 'Cliente Editado Correctamente'
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};


const eliminarCliente = async (req, res) =>{
    try {
        Cliente.destroy({
            where: {id: req.params.id}
        });
        res.json({
            message:'Cliente Eliminado Correctamente'
        })
    } catch (error) {
        res.json({
            message: error.message
        });
    }
};


export {
    crearCliente,
    mostrarCliente,
    mostrarClientes,
    editarCliente,
    eliminarCliente
}