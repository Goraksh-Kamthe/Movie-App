import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { fetchAsyncMoviesList } from './Movies/movieSlice'

const store = configureStore({
    reducer:{movies:moviesReducer},
    
    
})

export default store;