import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Card() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                console.log(response.data)
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella richiesta:', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Caricamento...</div>;
    }
    return (
        <div className="container text-center">
            <h1 >Lista dei Film</h1>
            <div className='row align-items-center justify-content-center g-3' >
                {movies.map((movie) => (
                    <div key={movie.id} className='col-3 p-3' style={{width: '18rem'}}>
                        <img src={`../public/${movie.id}.jpg`} style={{width: '100%', height: '350px'}} />
                        <div className="card-body p-3">
                            <h5 >{movie.title}</h5>
                            <p >by <strong> {movie.director}</strong></p>
                            <h4>Trama:</h4>
                            <p>{movie.abstract}</p>
                        </div>
                        <NavLink className='btn btn-primary m-3' to={`/${movie.id}`}>Dettagli e recensioni </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;