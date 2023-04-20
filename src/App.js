
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


import React from 'react';
import { Cart } from './components/Cart/Cart';
import {FinalizaCompra} from './components/Cart/FinalizaCompra'

export const Context = React.createContext()

let productosEnCarrito = []
const productosEnCarritoLS = JSON.parse(localStorage.getItem("carrito"))

if (productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS
} else {
  productosEnCarrito = []
}




function App() {



  return (
    <Context.Provider value={productosEnCarrito}>
      <div >
        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/comprado'} element={<FinalizaCompra/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>

  );
}

export default App;
