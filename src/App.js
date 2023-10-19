import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>
    );
};

export default App;