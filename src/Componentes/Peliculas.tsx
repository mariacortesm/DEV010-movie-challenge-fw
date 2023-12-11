import notFoundImage from '../imagenes/not-found.jpg';
import './stylesheets/Peliculas.css';
import { useState, useEffect } from 'react';
import { dataBase } from './Data/data';
import Paginacion from './Paginacion';
import Ordenar from './Ordenar';

interface PeliculaUI {
    title: string;
    release_date: string;
    poster_path: string | null;
}


function Peliculas () {
    const [pelicula, setPelicula] = useState<PeliculaUI[] | null>(null);
    const [pageState, setPageState] = useState<number>(1)

    useEffect(() => {
        dataBase(pageState).then(data =>  {
            setPelicula(data)
        })
    }, [pageState])

        return (
            <>
            <Ordenar pelicula={pelicula} setPelicula={setPelicula} />
            <div className='contenedor-peliculas-principal'>
            {pelicula !== null ? (
                pelicula.map((pelicula, movieData) => (
        <div className="peliculas" key={movieData}> 
        {pelicula.poster_path ? (
        <img className='imagen-pelicula' src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
        alt={pelicula.title}/>
        ) : (
            <img src={notFoundImage} className='notFoundImage'/> )}
        <h2 className="titulo-pelicula">{pelicula?.title}</h2>
        <p className="año-pelicula">Año de lanzamiento: {pelicula?.release_date}</p>
                    </div>
        ))
        ) : (
            <p>Cargando películas...</p>
        )}
        </div>
        <Paginacion pageState={pageState} setPageState={setPageState} />
        </>
        
    )
}

export default Peliculas;