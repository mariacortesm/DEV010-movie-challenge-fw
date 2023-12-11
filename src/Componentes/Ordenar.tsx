import './stylesheets/Ordenar.css';
import { useState, useEffect } from "react";

interface Pelicula {
    id: string,
    title: string,
}

function Ordenar ( { pelicula, setPelicula }) {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([])
    const click = ( ) => {
        setPeliculas([]);
    }
    useEffect (() => {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjAxMWUwNmM0NTA4ZDRkMTA1ZGMyNTk4MzE5MmM4ZCIsInN1YiI6IjY1NWNkNjE1N2YwNTQwMThkMzQ0ZWNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A30JBSAJu2w3UDMkGA22RXiwU6PfbC2HF2BKRqr8P-8'
            }
          };
          
          fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.asc', options)
            .then(response => response.json())
            .then(data => {
            setPeliculas(data.results)
        })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="ordenar">
        <div className="select-ordenar">
        <select className="seleccionar-orden" 
        // value={select} onChange={cambioSeleccionado} 
        >
            <option value=''>Ordenar por:</option>
                <option>
                    Más popular</option>
            <option value='desc'>Mayor a menor</option>
        </select>
        </div>
        <div className="boton-ordenar">
            <button className="boton-orden">Ir</button>
        </div>
    </div>
    )
}

export default Ordenar;

    // const [select, setSelect] = useState<string>('');
    // console.log(pelicula);
    // const ordenPeliculas = () => {
    //     const ordenData = 
    //     pelicula.sort((a, b) => {
    //         if (pelicula === 'asc') {
    //             return a.title.localCompare(b.title);
    //         } else if (pelicula === 'desc') {
    //             return b.title.localCompare(a.title);
    //         }
    //         return 0; 
    //     })
    //     setPelicula(ordenData);
    // }

    // const cambioSeleccionado = (e:React.ChangeEvent<HTMLSelectElement>) => {
    //     console.log('PRUEBA', cambioSeleccionado);
    //     const valorSeleccionado = e.target.value;
    //     setSelect(valorSeleccionado);
    //     ordenPeliculas();
    // };