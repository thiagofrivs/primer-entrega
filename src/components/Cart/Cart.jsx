import React, { useState } from 'react'
import { CartVacio } from './CartVacio'
import { ItemCartContainer } from './ItemCartContainer'





export const Cart = () => {

  
  const [productosEnCarrito]= useState(JSON.parse(localStorage.getItem("carrito")))



  let lenProdu=null

  if (productosEnCarrito && productosEnCarrito.length >0) {
    lenProdu=true
  }else{
    lenProdu=null
  }



  return (
    <div className='container'>
        {lenProdu?<ItemCartContainer productos={productosEnCarrito}/>:<CartVacio/>}
    </div>
  )
}
