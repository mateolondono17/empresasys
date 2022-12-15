import React from 'react'
import { BarraLateral } from '../barraLateral/BarraLateral'
import { TablaProducto } from './TablaProducto'
import { Titulo } from './Titulo'

export const ConexionProducto = () => {
  return (
    <section>
        
        <section className='bodyTabla'>
        <TablaProducto/>
        </section>
        
    </section>
  )
}