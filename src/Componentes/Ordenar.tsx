import './stylesheets/Ordenar.css';
// import { useState, useEffect } from "react";
import {opciones} from './utils/ordenado.json';


function Ordenar ({ setOrden }) {

    return (
        <div className="ordenar">
        <div className="select-ordenar">
        <select className="seleccionar-orden" onChange={(event) => setOrden(event.target.value)}
        
        // value={select} onChange={cambioSeleccionado} 
        >
            <option value=''>Ordenar por:</option>
            {opciones.map((opcion) => 
                <option value={opcion.valor}>{opcion.texto}</option>
            )}
        </select>
        </div>
    </div>
    )
}

export default Ordenar;