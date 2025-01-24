import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

  
  return (
    <div>
      <div className="mt-0 md:-mt-24 text-white bg-black z-20 relative">
        <div className="p-6 text-3xl">
          <h1>{title}</h1>
        </div>
        <div className="flex p-2 pb-24 overflow-x-scroll">
          {movies?.map((movie)=>(
            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
