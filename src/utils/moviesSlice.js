import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies : null,
        nowPlayingMovieTrailer : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingMovieTrailer : (state, action) =>{
            state.nowPlayingMovieTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addNowPlayingMovieTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;