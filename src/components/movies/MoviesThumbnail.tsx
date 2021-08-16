import { ThumbUpIcon } from "@heroicons/react/outline";
import { MOVIES_BASE_URL } from "constants/movies";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import { Movie } from "types/movie";

interface MoviesThumbnailProps {
  movie: Movie;
}

// eslint-disable-next-line react/display-name
const MoviesThumbnail: React.FC<MoviesThumbnailProps> = forwardRef(
  ({ movie }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="group cursor-pointer p-2 transition
        duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        <Image
          layout="responsive"
          src={`${MOVIES_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          height={1080}
          width={1920}
          alt="thumbnail"
        />
        <div className="p-2">
          <p className="truncate max-w-md">{movie.overview}</p>
          <h2
            className="mt-1 text-2xl text-white transition-all
            duration-100 ease-in-out group-hover:font-bold"
          >
            {movie.title || movie.original_name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {movie.media_type && `${movie.media_type} •`}{" "}
            {movie.release_date || movie.first_air_date} •{" "}
            <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
          </p>
        </div>
      </div>
    );
  }
);

export default MoviesThumbnail;
