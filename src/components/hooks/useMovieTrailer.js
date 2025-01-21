import { useDispatch } from "react-redux";
import { addNowPlayingMovieTrailer } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";

const useMovieTrailer = (trailerId) =>{
    const dispatch = useDispatch();
    const getMoviesVideo = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+trailerId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json()
        console.log(json.results);
        
        const filterData = json.results.filter((video)=> video.type == "Trailer");
  
        const trailer = filterData[0] ? filterData[0] : json.results[0];
  
        console.log(trailer);
        
        dispatch(addNowPlayingMovieTrailer(trailer));
  
    }
  
    useEffect(()=>{
      getMoviesVideo();
    }, [])
}

export default useMovieTrailer;