// import { useState } from 'react'
import './App.css';
import React from 'react';
import Filter from './Componentes/Filtrar';
import Peliculas from './Componentes/Peliculas';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <main className='contenedor-principal'>
        <div className='contenedor-busqueda'>
        <Filter/>
        </div>
        <Peliculas/>
      </main>
  )
}

export default App
