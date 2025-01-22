import { IMG_PATH } from "../utils/Constants"

const MovieCard = ({posterPath}) => {

  return (
    <div className="px-2 movieList">
      <div className="w-48 relative -mt-12">
      <img src={IMG_PATH + posterPath} alt="poster image" />

      </div>
    </div>
  )
}

export default MovieCard
