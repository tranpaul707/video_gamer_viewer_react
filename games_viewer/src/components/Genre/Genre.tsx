import "./Genre.css";
import { useState } from "react";
import { GENRES } from "../../constants/genres"

const Genre = () => {
  

  const [Highlightindex, setHighlightindex] = useState(-1);

  const handleClick = (index: number) => {
    setHighlightindex(index);
  };

  return (
    <>
      <h5> Genres </h5>
      <div className="list-group genre-list">
        {GENRES.map((genre, index) => (
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
