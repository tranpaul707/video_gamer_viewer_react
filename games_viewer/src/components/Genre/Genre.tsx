import React from "react";
import './Genre.css'

const Genre = () => {
  const genres = [
    "Action",
    "RPG",
    "Adventure",
    "Strategy",
    "Sports",
    "Simulation",
    "Indie",
    "Casual",
    "Platformer",
    "Rogue-like",
    "Visual-Novel",
    "Puzzle",
  ];

  return (
    <>
      <h1>Genre</h1>
      <ul className="list-group">
        {genres.map((genre) => (
          <li> {genre} </li>
        ))}
      </ul>
    </>
  );
};

export default Genre;
