import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apis/MovieApi";
import { API_KEY } from "../../common/Apis/MovieApiKey";

const movieText = "Race";
const seriesText = "Adventure";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchAsyncMoviesList = createAsyncThunk(
  "movies/fetchAsyncMoviesList",
  async () => {
    const response = await MovieApi.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`);
    await delay(1500);
    return response.data;
  }
);

export const fetchAsyncSeriesList = createAsyncThunk(
  "movies/fetchAsyncSeriesList",
  async () => {
    const response = await MovieApi.get(`?apikey=${API_KEY}&s=${seriesText}&type=series`);
    await delay(1500);
    return response.data;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await MovieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
    await delay(1500);
    return response.data;
  }
);

const initialState = {
  movie: {},
  shows: {},
  selectedMovie: {},
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movie = payload;
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMoviesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsyncMoviesList.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchAsyncMoviesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchAsyncSeriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsyncSeriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.shows = action.payload;
      })
      .addCase(fetchAsyncSeriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addMovies, removeSelectedMovie } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movie;
export const getAllSeries = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export const getLoading = (state) => state.movies.loading;
export const getError = (state) => state.movies.error;

export default movieSlice.reducer;
