
import React from 'react'
import { ItemComprado } from './ItemComprado'
import { Inputs } from './Inputs'

export const FinalizaCompra = () => {

  const carritoComprado = JSON.parse(sessionStorage.getItem('carritoComprado'))
  const carritoCompradoFull = carritoComprado


  const categoriasYcantidades = carritoComprado.reduce((acc, producto) => {
    if (!acc[producto.category]) {
      acc[producto.category] = 0;
    }
    acc[producto.category] += producto.cantidad;
    return acc;
  }, {});

  const total = carritoComprado.reduce(
    (acc, producto) => acc + producto.cantidad * producto.price,
    0
  );

  categoriasYcantidades.total = total;


  return (
    <div className='container full'>
      <h3 className="comprado">Los artículos a comprar son:</h3>
      {
        carritoCompradoFull.map(item =>
          <ItemComprado item={item} key={item.id} />
        )}

      <h4 className="comprado">El total de la orden es de: ${total}</h4>
      <Inputs/>


    </div>
  )
}
