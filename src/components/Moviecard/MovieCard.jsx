import React from "react";
import "./MovieCard.scss"; // optional if separated
import { Link } from "react-router-dom";

const MovieCard = ({ cardItem }) => {
  const defaultPoster = "https://via.placeholder.com/300x450?text=No+Image";

  return (
     <Link to={`/movie/${cardItem.imdbID}`} className="card-link">
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img
            src={cardItem.Poster !== "N/A" ? cardItem.Poster : defaultPoster}
            alt={cardItem.Title}
          />
        </div>
        <div className="card-botton">
          <div className="card-info">
            <h4>{cardItem.Title}</h4>
            <p>{cardItem.Year}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
