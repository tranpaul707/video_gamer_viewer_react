import "./Genre.css";
import { useState } from "react";

const Genre = () => {
  const genres = [
    "Indie",
    "Casual",
    "Action",
    "Adventure",
    "Simulation",
    "Strategy",
    "RPG",
    "Exploration",
    "Puzzle",
    "Action-Adventure",
    "Arcade",
    "Horror",
    "Early Access",
    "Shooter",
    "Platformer",
    "Visual Novel",
    "Free to Play",
    "Survival",
    "Roguelike",
    "Open World",
  ];

  const [Highlightindex, setHighlightindex] = useState(-1);

  const handleClick = (index: number) => {
    setHighlightindex(index);
  };

  return (
    <>
      <h5> Genres </h5>
      <div className="list-group genre-list">
        {genres.map((genre, index) => (
          <button
            type="button"
            key={genre}
            className={
              Highlightindex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => handleClick(index)}
          >
            {genre}
          </button>
        ))}
      </div>
    </>
  );
};

export default Genre;
