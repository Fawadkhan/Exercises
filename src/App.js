import React, { Component } from "react";
import { profiles, users, movies } from "./data.js";
import "./App.css";
import FavoriteMovies from "./FavouriteMovies.js";
import PopularMovies from "./PopularMovies.js";

class App extends Component {
  render() {
    return (
      <div>
        <PopularMovies profiles={profiles} users={users} movies={movies} />
      </div>
    );
  }
}

export default App;
