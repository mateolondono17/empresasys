import {Link} from 'react-router-dom'


export const Menu = ({texto}) => {
    return(
        <section className="sectionLink">
          <ul>
      <li className="item">
      <Link to="/Home" className="item">Inicio</Link>
      </li>
      <li className="item">
      <Link to="/Productos" >Productos</ Link>
      </li>
      <li className="item">
      <Link to="/Clientes" className="item">Proveedores</Link>
      </li>
      <li className="item" >
      <Link to="/Proveedores" className="item">Clientes</Link>
      </li>
      </ul>
        </section>

       
    )
};
// 