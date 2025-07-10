import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../features/Movies/movieSlice";
import "./MovieDetails.scss";
import Loader from "../Loader/Loader";

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbId));

    return () => {
      dispatch(removeSelectedMovie()); // clean up when unmounting
    };
  }, [dispatch, imdbId]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div><Loader /></div>
      ) : (
        <>
          <div className="section-left">
            <h2>{data.Title}</h2>
            <p>
              <strong>Year:</strong> {data.Year}
            </p>
            <p>
              <strong>Genre:</strong> {data.Genre}
            </p>
            <p>
              <strong>Director:</strong> {data.Director}
            </p>
            <p>
              <strong>Actors:</strong> {data.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {data.Plot}
            </p>
            <p>
              <strong>Language:</strong> {data.Language}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {data.imdbRating}
            </p>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
