import React, { Component } from "react";
import { profiles, users, movies } from "./data.js";
import "./App.css";
import FavoriteMovies from "./FavouriteMovies.js";
import popularMovies from "./PopularMovies.js";

class App extends Component {
  render() {
    return (
      <div>
        <FavoriteMovies profiles={profiles} users={users} movies={movies} />
      </div>
    );
  }
}

export default App;
