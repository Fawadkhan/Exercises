import React, { Component } from "react";
import { profiles, users, movies } from "./data.js";
import "./App.css";
import FavoriteMovies from "./FavouriteMovies.js";
import PopularMovies from "./PopularMovies.js";

const App = () => {
  return (
    <div>
      <PopularMovies profiles={profiles} users={users} movies={movies} />
    </div>
  );
};

export default App;
