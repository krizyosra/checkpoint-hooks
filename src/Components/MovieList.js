import React from "react";
import MovieCard from "../Components/MovieCard";


function MovieList({ filmList }) {
  const Styleobj = {
    display: "flex",
    marginTop: "20px",
    marginLeft: "5%",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "space-evenly",
    gap: "10px",
  };

  return (
    <div style={Styleobj}>
      {filmList.map((el) => (
        <MovieCard obj={el} />
      ))}
    </div>
  );
}

export default MovieList;
