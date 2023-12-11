// import { useState } from "react";
// import { dataBase } from "./Data/data";
import './stylesheets/Paginacion.css';

function Paginacion ( {pageState, setPageState} ) {
    // const [index, setIndex] = useState(0)
    
    // useEffect(() => {
    //     dataBase().then(data => {
    //         setIndex(data)
    //     })
    // }, []);

    const paginaSiguiente = () => {
        setPageState(pageState + 1)
    }

    const paginaAnterior = () => {
        setPageState(pageState - 1)
    }

    return (
        <div className="contenedor-botones-paginacion">
            <button onClick={paginaAnterior}>Anterior</button>
            <button onClick={paginaSiguiente}>Siguiente</button>
        </div>
    )
    }

export default Paginacion;