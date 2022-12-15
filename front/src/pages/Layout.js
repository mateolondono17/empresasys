import { Outlet, Link } from "react-router-dom";
import { BarraLateral } from "../components/helpers/barraLateral/BarraLateral";
import { Logo } from "../components/helpers/barraLateral/Logo";
import { Menu } from "../components/helpers/barraLateral/Menu";
import { RedesSociales } from "../components/helpers/barraLateral/RedesSociales";
import { Titulo } from "../components/helpers/vistaProducto/Titulo";

const Layout = () => {
  return (
        <section className="d-flex "> 
        
    <nav className="w-50">
      <section class="wrapper">
       
        <nav id="sidebar">
            <section class="sidebar-header">
                <Logo/>
            </section>

            <ul class="list-unstyled d-flex flex-column justify-content-between align-items-center components">
                <li className="w-75">
                <Link to="/Home" className="item text-center my-1">Inicio</Link>
                    
                </li>
                <li className="w-75">
                <Link to="/Productos"className="item text-center my-1" >Productos</ Link>
                </li>
                <li>

                </li>
                <li className="w-75">
                <Link to="/Clientes" className="item text-center my-1">Proveedores</Link>
                </li>
                <li className="w-75">
                <Link to="/Proveedores" className="item text-center my-1">Clientes</Link>
                </li>
            </ul>

            <RedesSociales/>
        </nav>  
    </section>
      </nav>  
      <Outlet />
    </section>
  )
};

export default Layout;