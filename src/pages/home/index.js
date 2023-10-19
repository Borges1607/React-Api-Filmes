import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(searchTerm)}`)
                .then((response) => response.json())
                .then((data) => {
                    setSearchedMovies(data.results);
                });
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    return (
        <Container>
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
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Buscar filme..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={handleSearch}
                            >
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <h1> </h1>

            <MovieList>
                {searchTerm && searchedMovies.length > 0
                    ? searchedMovies.map((movie) => (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span>{movie.title}</span>

                            <Link to={`/movie/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    ))
                    : movies.map((movie) => (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span>{movie.title}</span>

                            <Link to={`/movie/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    ))}
            </MovieList>
        </Container>
    );
}

export default Home;