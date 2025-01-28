import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import FormComponent from '../components/FormComponent';

function Details() {
    const { id } = useParams();
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`)
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Film non trovato');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center">Caricamento...</div>;
    }
    if (error) {
        return <div className="text-center text-danger">{error}</div>;
    }
    return (
        <div className="container ">
            <h1 className="text-center p-3">{movies.title}</h1>
            <div className="d-flex flex-column align-items-center p-3 gap-5">
                <div className="">
                     <img src={`../public/${movies.id}.jpg`} style={{height: '350px'}} />
                </div>
                <div className="">
                    <h3 className=''>Trama:</h3>
                    <p>{movies.abstract}</p>
                    <h3 className="">Recensioni Utenti:</h3>
                    <div className="list-group">
                        {movies.reviews.length > 0 ? (
                            movies.reviews.map((review) => (
                                <div key={review.id} className="list-group-item bg-light gap-5">
                                    <strong>{review.name}</strong>
                                    <h6><strong>Voto: </strong>{review.vote}</h6>
                                    <p>{review.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>Non ci sono recensioni per questo film.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Details;