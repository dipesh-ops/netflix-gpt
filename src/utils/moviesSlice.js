import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies : null,
        nowPlayingMovieTrailer : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingMovieTrailer : (state, action) =>{
            state.nowPlayingMovieTrailer = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies : (state, action) =>{
            state.topRatedMovies =action.payload;
        },
        addUpcomingMovies : (state, action) =>{
            state.upComingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addNowPlayingMovieTrailer, addPopularMovies, addTrendingMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;