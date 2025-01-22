import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";

const useTopRatedMovies =()=>{
    const dispatch = useDispatch();

   const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
   }

   useEffect(()=>{
    getTopRatedMovies();
   }, [])
}

export default useTopRatedMovies;