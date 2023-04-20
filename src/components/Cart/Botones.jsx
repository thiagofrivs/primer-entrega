import React from 'react'


export const Botones = (setCarrito) => {
    return (
        <div className='botones'>
            <button className='botones-cart' onClick={() => setCarrito()}>Vaciar carrito</button>
            <button className='botones-cart'>Comprar Carrito</button>
        </div>
    )
}
