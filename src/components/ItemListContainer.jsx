import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productos from './Json/productos.json'

const ItemListContainer = () =>{

    const [item,setItem]=useState([])
    const {id}=useParams();

    useEffect(() =>{
        const promesa= new Promise((resolve)=>{
            setTimeout(() => {
                resolve(id? productos.filter(item => item.categoria === id) : productos)
            }, 2000)
        });

        promesa.then((data)=>{
            setItem(data)
        })
    },[id]);



    return(
        <div className="container">
            
                <ItemList item={item} />

            
        </div>    
    )
}

export default ItemListContainer