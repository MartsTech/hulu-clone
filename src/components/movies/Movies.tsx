import FlipMove from "react-flip-move";
import { Movie } from "types/movie";
import MoviesThumbnail from "./MoviesThumbnail";

interface MoviesProps {
  movies: Movie[];
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 
      3xl:flex flex-wrap justify-center"
    >
      {movies.map((movie) => (
        <MoviesThumbnail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
};

export default Movies;
