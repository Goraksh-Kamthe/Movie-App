import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncMoviesList, fetchAsyncSeriesList } from "../../features/Movies/movieSlice";

const Home = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
 dispatch(fetchAsyncMoviesList());
 dispatch(fetchAsyncSeriesList())
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
