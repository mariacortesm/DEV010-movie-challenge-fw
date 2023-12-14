import React from 'react';
import notFoundImage from '../imagenes/not-found.jpg';

function PeliculaIndividual ( {pelicula} ){
    return (
        <div className="peliculas"> 
            {pelicula.poster_path ? (
            <img className='imagen-pelicula' src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}/>
            ) : (
                <img src={notFoundImage} className='notFoundImage'/> )}
            <h2 className="titulo-pelicula">{pelicula?.title}</h2>
            <p className="año-pelicula">Año de lanzamiento: {pelicula?.release_date}</p>
        </div>
    )
}

export default PeliculaIndividual;