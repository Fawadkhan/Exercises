import React, { Component } from "react";

const FavoriteMovies = props => {
  const { profiles, users, movies } = props;
  return (
    <ol>
      {profiles.map(profile => (
        <li key={profile.id}>
          {users[profile.userID].name}'s favourite movie is{" "}
          {movies[profile.favoriteMovieID].name}
        </li>
      ))}
    </ol>
  );
};

export default FavoriteMovies;
