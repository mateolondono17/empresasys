import React from 'react'
import { BarraLateral } from '../barraLateral/BarraLateral'
import { TablaProducto } from './TablaProducto'
import { Titulo } from './Titulo'

export const ConexionProducto = () => {
  return (
    <section>
        <Titulo/>
        <TablaProducto/>
        
    </section>
  )
}