import React, { useState } from 'react'




function ItemCount({ item }) {

    
    
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito'))
    if (!productosEnCarrito){
        productosEnCarrito=[]
    }


    const [counter, setCounter] = useState(0);


    const handleStock = () => {
        if (counter === item.stock) return true
    }

    const handleZero = () => {
        if (counter === 0) return true
    }


    const incrementarStock = () => {
        if (counter < item.stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }

    }

    const onAdd = () => {
        resetStock()
        agregarCarrito()
    }

    const resetStock = () => {
        if (counter <= item.stock) {
            item.stock = item.stock - counter;
            setCounter(0);
        }
    }

    const agregarCarrito = () => {

        if(productosEnCarrito.some(producto=>producto.id===item.id)){
            const index = productosEnCarrito.findIndex(producto=>producto.id===item.id)
            productosEnCarrito[index].cantidad=productosEnCarrito[index].cantidad+counter;
        }
        else{
            item.cantidad=item.cantidad+counter
            productosEnCarrito.push(item)
            localStorage.setItem("carrito",JSON.stringify(productosEnCarrito))
        }

        console.log(productosEnCarrito)

        
        
    }
    




return (
    <div className="cardNoBorde" >
        <p>Seleccione la cantidad que desea llevar (Quedan {item.stock})</p>
        <div className="contador">
            <button className='operador' onClick={decrementarStock} disabled={handleZero()}>-</button>
            <p>{counter}</p>
            <button className='operador' onClick={incrementarStock} disabled={handleStock()}>+</button>
        </div>
        <button className='botonAgregar' onClick={onAdd} id={item.id}>Agregar al carrito</button>
    </div>
)
    
}

export default ItemCount