// import { useState } from 'react'
import './App.css';
import Filter from './Componentes/Filtrar';
import Peliculas from './Componentes/Peliculas';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <main className='contenedor-principal'>
        <div className='contenedor-busqueda'>
        <div className='contenedor-filtro'><Filter/></div>
        </div>
        <div className='contenedor-peliculas'><Peliculas/></div>
      </main>
  )
}

export default App
