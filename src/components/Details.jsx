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
            <div className="d-flex flex-column align-items-center p-3 gap-5">
                <div className='card text-center' style={{width: '18rem'}}>
                    <div className="card-img-top">
                        <img src={`../public/${movies.id}.jpg`} style={{width:'100%', height: '350px'}} />
                    </div>
                    <h3 className="card-title">{movies.title}</h3> 
                    <p className='card-text'>{movies.abstract}</p>
                </div>
                <div>
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