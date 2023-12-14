// import { useState } from "react";
// import { dataBase } from "./Data/data";
import './stylesheets/Paginacion.css';

function Paginacion ( {paginacion, setPaginacion} ) {
    // const [index, setIndex] = useState(0)
    
    // useEffect(() => {
    //     dataBase().then(data => {
    //         setIndex(data)
    //     })
    // }, []);

    const paginaSiguiente = () => {
        setPaginacion(paginacion + 1)
    }

    const paginaAnterior = () => {
        setPaginacion(paginacion - 1)
    }

    return (
        <div className="contenedor-botones-paginacion">
            <button onClick={paginaAnterior}>Anterior</button>
            <button onClick={paginaSiguiente}>Siguiente</button>
        </div>
    )
    }

export default Paginacion;