import Cliente from "../models/productoModel.js";



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
        
    } catch (error) {
        
    }
};


const eliminarCliente = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
};


export {
    crearCliente,
    mostrarCliente,
    mostrarClientes
}