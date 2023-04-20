import React from "react";
import ItemCount from "../components/ItemCount";


const ItemDetail = ({ item }) => {

    return (

        <div className="itemdetail" id="itemdetail">
            <div className="col-md-7 center">
                <img src={item.img} className="img-fluid" alt={item.title} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>${item.price} </p>

            </div>

            <ItemCount item={item} />


        </div>
    )

}


export default ItemDetail;