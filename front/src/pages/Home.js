
import React from 'react'
import "../../src/App.css"   
import img2 from '../../src/assets/img/imgCarrusel2.png'
import { TituloPrincipal } from '../components/layouts/Titulos/TituloPrincipal';




const Home = () => {
    return (
      <section className=''>
        <TituloPrincipal/>
        <img className="imagenPrincipal" src={img2} alt=''/>
        </section>
        
    )
      
  };
  
  export default Home;