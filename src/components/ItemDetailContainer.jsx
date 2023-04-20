import React from "react";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./ItemListContainer";



const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();




    useEffect(() => {
        const getProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'items'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })

                })
                setItem(docs.find(item => item.id === id))

            }
            catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [id]);




    return (

        <div className="container">
            <ItemDetail item={item} />
        </div>

    )
}

export default ItemDetailContainer;