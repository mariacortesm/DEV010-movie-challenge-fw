// import { useState } from 'react'
import './App.css';
import React, {useState, useEffect} from 'react';
import Filter from './Componentes/Filtrar';
import Peliculas from './Componentes/Peliculas';
import { dataBase } from './Componentes/Data/data';
import Paginacion from './Componentes/Paginacion';
import Ordenar from './Componentes/Ordenar';

interface PeliculaUI {
  title: string;
  id: number;
  release_date: string;
  poster_path: string | null;
}

function App() {
  // const [count, setCount] = useState(0)
  const [peliculas, setPeliculas] = useState<PeliculaUI[] | null>(null);

  const [paginacion, setPaginacion] = useState<number>(1)

  const [orden, setOrden] = useState("")

  useEffect(() => {
    dataBase(paginacion, orden).then(data =>  {
      setPeliculas(data)
    })
    console.log(orden);
  }, [paginacion, orden])

  return (
      <main className='contenedor-principal'>
        <div className='contenedor-busqueda'>
         <Ordenar setOrden={setOrden} />
          <Filter/>
        </div>
        <Peliculas peliculas={peliculas} />
        <Paginacion paginacion={paginacion} setPaginacion={setPaginacion} />
      </main>
  )
}

export default App
