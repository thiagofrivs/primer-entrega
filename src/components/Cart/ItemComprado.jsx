import React from 'react'

export const ItemComprado = (item,key) => {

  item=item.item
  return (

    <div className="d-flex justify-content-around align-items-center border p-5 flex-cont" key={key}>
      <img className='img' src={item.img} alt={item.title} />
      <p>{item.title}</p>
      <p>Cantidad: {item.cantidad}</p>
      <p>Subtotal: ${item.cantidad * item.price}</p>
    </div>

  )
}
