
import './stylesheets/Peliculas.css';
import React, { useState, useEffect } from 'react';
import { dataBase } from './Data/data';
import Paginacion from './Paginacion';
import Ordenar from './Ordenar';
import PeliculaIndividual from './PeliculaIndividual';

interface PeliculaUI {
    title: string;
    id: number;
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
            <div className='contenedor-peliculas'>
            <Ordenar pelicula={pelicula} setPelicula={setPelicula} />
            <div className='contenedor-peliculas-principal'>
            {pelicula !== null 
            ? ( pelicula.map((peli) => <PeliculaIndividual key={peli.id}pelicula={peli}/>)) 
            : (<p>Cargando películas...</p>)}
            </div>
            <Paginacion pageState={pageState} setPageState={setPageState} />
            </div>
        
    )
}

export default Peliculas;