import React, { useState } from 'react'
import { IdCompra } from './IdCompra';

export const Inputs = () => {
    const [formData, setFormData] = useState({
        email: "",
        confirmEmail: "",
        nombre: "",
        apellido: ""
    });


    const [mostrarId, setMostrarId] = useState(false)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.email !== formData.confirmEmail) {
            alert("Los emails no coinciden");
            return;
        }
        if (formData.email === formData.confirmEmail) {
            setMostrarId(true)
            }
        console.log(formData);
    };

    const handeClick = () => {
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="confirmEmail">Confirmar email:</label>
                <input
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" onClick={handeClick}>Enviar y confirmar compra</button>
            {mostrarId?<IdCompra/>:null}
        </form>
    )
}
