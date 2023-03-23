import React, { useState } from 'react'

function ItemCount  ({stockItems})  {

    
    const handleStock = () =>{
        if (counter===stock) return true
    }

    const handleZero = () =>{
        if (counter === 0 ) return true

    }

    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        
    }

    const onAdd = () => {
        if (counter <= stock){
            setStock(stock - counter);
            setCounter(0);
        }

    }


    return (
        <div className="cardNoBorde" >
            <p>Seleccione la cantidad que desea llevar (Quedan {stock})</p>
            <div className="contador">
                <button className='operador' onClick={incrementarStock} disabled={handleStock()}>+</button>
                <p>{counter}</p>
                <button className='operador' onClick={decrementarStock} disabled = {handleZero()}>-</button>
            </div>
            <button className='agregar' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount