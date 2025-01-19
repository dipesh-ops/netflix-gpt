import Header from "./Header"
import getNowPlayingMovies from "./hooks/useNowPlayingMovies"

const Browse = () => {

  getNowPlayingMovies();
  return (
    <div>
      <Header/>
      Browse
    </div>
  )
}

export default Browse
