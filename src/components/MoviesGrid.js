import React, { useState, useEffect } from "react";
import "../styles.css";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((responce) => responce.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            className="movie-poster"
            src={`images/${movie.image}`}
            alt={movie.title}
          />
          <div className="movie-card-info">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-genre">{movie.genre}</p>
            <p className="movie-card-rating">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
