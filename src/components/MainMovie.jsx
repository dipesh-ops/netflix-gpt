import { useSelector } from "react-redux"
import TitleTrailer from "./TitleTrailer"
import VideoTrailer from "./VideoTrailer"

const MainMovie = () => {
    

    const movie = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movie) return;

    const mainMovie = movie[0];
    const {original_title, overview, id} = mainMovie;
    
  return (
    <div>
      <TitleTrailer title ={original_title} description={overview} movieId={id}/>
      <VideoTrailer trailerId={id} />
    </div>
  )
}

export default MainMovie
