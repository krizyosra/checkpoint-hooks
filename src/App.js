import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import Forms from "./Components/Forms";
import Filter from "./Components/Filter/Filter";
import initialMovies from "./movies"; 
function App() {
  const [datamovies, setMovies] = useState(initialMovies);

  // Fonction pour ajouter un film
  const addMovie = (movie) => {
    setMovies([...datamovies, movie]);
  };

  //fonction pour filter by title 

  function filter(title){
    setMovies(datamovies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())))
  }

  function filterrating(rating){
    setMovies(datamovies.filter(el=>el.rating>=rating))
  }

  return (
    <div className="App">
      <div className="spacing">
        <Filter filter={filter} filterrating={filterrating} />
        <MovieList filmList={datamovies} />
      </div>
      <Forms addMovie={addMovie} />
    </div>
  );
}

export default App;
