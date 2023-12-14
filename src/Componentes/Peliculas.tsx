
import './stylesheets/Peliculas.css';
import React from 'react';
import PeliculaIndividual from './PeliculaIndividual';

function Peliculas ({peliculas}) {
    return (
        <div className='contenedor-peliculas'>
            
            <div className='contenedor-peliculas-principal'>
                {peliculas !== null 
                ? ( peliculas.map((peli) => <PeliculaIndividual key={peli.id}pelicula={peli}/>)) 
                : (<p>Cargando películas...</p>)}
            </div>
        
        </div>
)
}

export default Peliculas;