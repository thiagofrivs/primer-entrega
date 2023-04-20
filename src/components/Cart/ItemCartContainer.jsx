import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const ItemCartContainer = ({productos}) => {

  const [carrito, setCarrito] = useState([]);
  
  const history = useNavigate();

  useEffect(() => {
    // Obtener el carrito del Local Storage al cargar el componente
    let carritoLS = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoLS);
    carritoLS=[]

  }, []);

  function eliminarDelCarrito(componente) {
    // Encontrar el objeto del componente que se desea eliminar
    const objetoComponente = carrito.find(c => c.id === componente.id);

    // Si se encontró el componente, eliminarlo del arreglo
    if (objetoComponente) {
        const indice = carrito.indexOf(objetoComponente);
        let nuevoCarrito = [...carrito];
        if (objetoComponente.cantidad === 1) {
            nuevoCarrito.splice(indice, 1);
        } else {
            objetoComponente.cantidad = objetoComponente.cantidad - 1
        }
        setCarrito(nuevoCarrito);

        // Actualizar el carrito en el Local Storage
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        
        nuevoCarrito=[]
    }
}

  function vaciarCarrito(){
    if(carrito){
      console.log(carrito)
      setCarrito([])
      localStorage.clear()
      console.log(carrito)
    }
  }

  function registraCompra(){
    const carritoComprado= carrito
    sessionStorage.setItem('carritoComprado',JSON.stringify(carritoComprado))
    history('/comprado')
  }
  

  

  return (
    <div className="container d-flex flex-column justify-content-around align-items-center pad">
      { 
      carrito.map(item=>
        <div className="lista flex-cont" key={item.id}>
            <div className="d-flex justify-content-around align-items-center border p-5 flex-cont">
                <img className='img' src={item.img} alt={item.title} />
                <p>{item.title}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal: ${item.cantidad * item.price}</p>
                <button className='boton' onClick={() => eliminarDelCarrito(item)}><i className="bi bi-x-lg"></i></button>
            </div>
        </div>
      )}

      <div className='botones'>
            <button className='botones-cart' onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <button className='botones-cart' onClick={registraCompra}>Comprar Carrito</button>
      </div>

      
    </div>
  )
}
