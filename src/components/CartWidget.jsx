import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";



function CartWidget() {

    let cantidadTotal=0


    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        // Obtener el carrito del Local Storage al cargar el componente
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoLS);
    }, []);

    carrito.forEach(item => {
        cantidadTotal=cantidadTotal+item.cantidad
    });

    
    
    return (

        <div>
            <Link to={'/cart'} className="nav-link">
                <i className="bi bi-cart" id="i">{cantidadTotal}</i>
            </Link>
        </div>

    )
}

export default CartWidget