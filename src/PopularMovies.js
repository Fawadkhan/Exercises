import React, { Component } from "react";
import UserLiked from "./UserLiked";

class PopularMovies extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    const moviesArr = Object.values(movies);
    return (
      <div className="PopularMovies-container">
        {moviesArr.map(movie => (
          <div key={movie.id}>
            <h3>{movie.name}</h3>
            <UserLiked movieID={movie.id} users={users} profiles={profiles} />
          </div>
        ))}
      </div>
    );
  }
}

export default PopularMovies;
