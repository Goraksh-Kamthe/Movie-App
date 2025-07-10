import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllSeries,
  getLoading,
  getError,
} from "../../features/Movies/movieSlice";
import MovieCard from "../Moviecard/MovieCard";
import '../MovieListing/MovieListing.scss';
import Loader from "../Loader/Loader";

const MovieListing = () => {
  const allMovies = useSelector(getAllMovies);
  const allShows = useSelector(getAllSeries);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  if (loading) return <Loader />;

  if (error) return <div className="movie-error"><h3 style={{ color: 'red' }}>{error}</h3></div>;

  return (
    <>
      {/* 🎬 Movie Section */}
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2 style={{margin:'10px'}}>Movies</h2>
          <div className="movie-container">
            {allMovies.Response === "True" ? (
              allMovies.Search?.map((item, index) => (
                <MovieCard key={index} cardItem={item} />
              ))
            ) : (
              <div className="movie-error">
                <h3 style={{ color: "orange" }}>{allMovies.Error}</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 📺 Series Section */}
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>TV Shows</h2>
          <div className="movie-container">
            {allShows.Response === "True" ? (
              allShows.Search?.map((item, index) => (
                <MovieCard key={index} cardItem={item} />
              ))
            ) : (
              <div className="movie-error">
                <h3 style={{ color: "orange" }}>{allShows.Error}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
