import Header from "./Header"
import MainMovie from "./MainMovie";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainMovie/>
    </div>
  )
}

export default Browse
