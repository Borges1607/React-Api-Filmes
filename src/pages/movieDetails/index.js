import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState({});
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });
    }, [id, KEY]);

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Populares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h1></h1>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <img
                    className="img_movie"
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                />
                </div>
                <div className="col-md-8">
                <h1>{movie.title}</h1>
                <h4>Data de lançamento: {movie.release_date}</h4>
                <div className="descricao">
                    <h3>Descrição: </h3>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>
</div>
        </div>
    );
};

export default MovieDetails;