import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getDocs, collection } from "firebase/firestore";
import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9qaGcxkiMs-Ni8P7ejY4fYvs87Db4Avg",
    authDomain: "coderhouse-ecommerce-c2bf9.firebaseapp.com",
    projectId: "coderhouse-ecommerce-c2bf9",
    storageBucket: "coderhouse-ecommerce-c2bf9.appspot.com",
    messagingSenderId: "733181629973",
    appId: "1:733181629973:web:6d24cc4b1c07c92aaaa01c"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);

const ItemListContainer = () =>{

    const [item,setItem]=useState([])
    const {id}=useParams();

    useEffect(() =>{
        const getProducts = async ()=> {
            try{
                const querySnapshot = await getDocs(collection(db, 'items'))
                const docs = []
                
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(),id:doc.id})
                
                })

                id?setItem(docs.filter(item=>item.category===id)):setItem(docs)
                
            }
            catch(error){
                console.log(error)
            }
        }
        getProducts()
    },[id]);



    return(
        <div className="container">
                <ItemList item={item} />

            
        </div>    
    )
}

export default ItemListContainer