import React from "react";
import Item from "./Item";


const ItemList = ({ item }) => {
    console.log(item)
    return (

        <div className="container list" id="itemdetail" >
            {
                
                

                item.map(item =>
                    <div className="col-md-3" key={item.id}>
                        <Item item={item}/>
                    </div>

                )
            }

        </div>

    )
}

export default ItemList;


