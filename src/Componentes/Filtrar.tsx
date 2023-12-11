import './stylesheets/Filtrar.css';

function Filter () {
    return (
        <div className="filtro">
            <div className="select-filtro">
            <select className="seleccionar-filtro" 
            // value={filtros} onChange={seleccionarFiltro} 
            >
                <option value=''>Filtrar por:</option>
            </select>
            </div>
            <div className="boton-filtrar">
                <button className="boton-filtro"> 
                    Ir
                </button>
            </div>
        </div>
    )
}

export default Filter;