import React, { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../ItemListContainer'

export const IdCompra = () => {

    const carritoComprado = JSON.parse(sessionStorage.getItem('carritoComprado'))


    const [datos, setDatos] = useState(null);

  useEffect(() => {

    const getProducts = async () => {
      try {

        const categoriasYcantidades = carritoComprado.reduce((acc, producto) => {
          if (!acc[producto.category]) {
            acc[producto.category] = 0;
          }
          acc[producto.category] += producto.cantidad;
          return acc;
        }, {});

        const total = carritoComprado.reduce(
          (acc, producto) => acc + producto.cantidad * producto.price,
          0
        );

        categoriasYcantidades.total = total;

        console.log(categoriasYcantidades);

        const objetoFecha = {
          fecha: serverTimestamp()
        }

        const data = Object.assign({}, objetoFecha, categoriasYcantidades);
        



        const docRef = await addDoc(collection(db, "orders"), data);
        console.log("Document written with ID: ", docRef.id);
        setDatos(docRef);


      }
      catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, []);
  //si en el array de dependencias pongo lo que me dice la consola se me hace un bucle infinito



  if (datos === null) {
    return <p>Confirmando Compra...</p>;
  }

localStorage.clear()
    return (
        <>
        
        <h4 className='comprado id'> La compra ha sido generada, el id es: {datos.id}</h4>
        </>
    )
}
