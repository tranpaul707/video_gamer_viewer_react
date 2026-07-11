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
      <h5> Genres </h5>
      <ul className="list-group">
        {genres.map((genre) => (
          <li> {genre} </li>
        ))}
      </ul>
    </>
  );
};

export default Genre;
