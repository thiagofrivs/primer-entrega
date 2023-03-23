import React from "react";
import ItemCount from "../components/ItemCount";


const ItemDetail = ({item}) => {
    return (
 
            <div className="itemdetail" id="itemdetail">
                <div className="col-md-4 ">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p>${item.precio} </p>
                    
                </div>
                
                <ItemCount stockItems={10} />
                
                
            </div>    
    )
 
}


export default ItemDetail;