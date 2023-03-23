import React from "react";
import { Link } from "react-router-dom";
import CartWidget from  './CartWidget'

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Tienda de hogar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <Link to={'/category/reposeras'} className="nav-link" >Reposeras</Link>
                        <Link to={'/category/muebles'} className="nav-link" >Muebles</Link>
                        <Link to={'/category/almohadas'} className="nav-link" >Almohadas</Link>
                    </div>
                </div>
                <CartWidget/>
            </div>
        </nav>

        )
} 

export default Navbar;
