import { ConexionCliente } from "../components/helpers/Conexiones/ConexionCliente";

import TituloClientes from "../components/layouts/Titulos/TituloClientes";


const Clientes = () => {
    return(
        <section>
        <TituloClientes/>
        <ConexionCliente/>
      </section>

       
    )
};

export default Clientes;