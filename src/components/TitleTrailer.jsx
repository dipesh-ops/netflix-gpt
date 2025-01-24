
const TitleTrailer = ({title, description}) => {
  return (
    <div className="w-screen h-screen pl-2 md:pl-12 absolute text-white bg-gradient-to-r from-black pt-16 md:pt-24 md:pt-48">
      <div className="w-2/6">
      <h1 className="font-bold text-2xl md:text-5xl mb-3">{title}</h1>
      <p className="mb-3 hidden md:block">{description}</p>
      <button className="w-24 md:w-28 p-2 rounded-md bg-white text-black hover:bg-gray-300 hover:text-white me-1">▷ Play</button>
      <button className="hidden md:inline-block w-28 p-2 rounded-md bg-gray-500 text-white"> More Info</button>
      </div>
    </div>
  )
}

export default TitleTrailer
