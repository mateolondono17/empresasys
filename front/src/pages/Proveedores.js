import { ConexionProveedores } from "../components/helpers/Conexiones/ConexionProveedores";
import TituloProveedores from "../components/layouts/Titulos/TituloProveedores";


const Proveedores = () => {
    return(
        <section>
          <TituloProveedores/>
          <ConexionProveedores/>
        
      </section>

       
    )
};

export default Proveedores;