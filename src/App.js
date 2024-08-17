import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import Forms from "./Components/Forms";
import Filter from "./Components/Filter/Filter";
import initialMovies from "./movies";
import "./App.css";
import Detail from "./Components/Details";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [datamovies, setMovies] = useState(initialMovies);

  // Fonction pour ajouter un film
  const addMovie = (movie) => {
    setMovies([...datamovies, movie]);
  };

  //fonction pour filter by title

  function filter(title) {
    setMovies(
      datamovies.filter((el) =>
        el.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  }

  function filterrating(rating) {
    setMovies(datamovies.filter((el) => el.rating >= rating));
  }

  return (
    <div className="App">
      
      <Routes>
      
       
        <Route
          path="/"
          element={
            <>
              <Filter filter={filter} filterrating={filterrating} />
              <MovieList filmList={datamovies} />
            </>
          }
         
        />
      
        <Route path="/add" element={<Forms addMovie={addMovie} />} />
        <Route path="/details/:id" element={<Detail data={datamovies} />} />
       
      </Routes>
      <Link to={'/add'}>
  <button className="css-button">Add movie</button>
</Link>
    </div>
  );
}

export default App;
