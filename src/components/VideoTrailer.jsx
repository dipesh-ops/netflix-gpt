import { useSelector } from "react-redux"
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoTrailer = ({trailerId}) => {

  const trailer = useSelector((store)=> store.movies.nowPlayingMovieTrailer?.key)
  useMovieTrailer(trailerId)
  return (
    <div className="h-screen trailer">
      <iframe className="w-screen" src={"https://www.youtube.com/embed/" + trailer +"?playlist="+trailer+"&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoTrailer
