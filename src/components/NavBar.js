import React from "react";
import CartIcon from './CartWidget';

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Pantalones</a>
                        <a class="nav-link" href="#">Remeras</a>
                        <a class="nav-link" href="#">Camisas</a>
                        <a class="nav-link" href="#">Camperas</a>
                    </div>
                </div>
                <CartIcon/>
            </div>
            
        </nav>

        )
} 

export default Navbar;
