import Movies from "components/movies/Movies";
import { GetServerSideProps } from "next";
import { Movie } from "types/movie";
import requests from "utils/requests";

interface HomePageProps {
  movies: Movie[] | null;
}

const HomePage: React.FC<HomePageProps> = ({ movies }) => {
  if (!movies) {
    return null;
  }

  return <Movies movies={movies} />;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre =
    typeof context.query.genre === "string" ? context.query.genre : "";

  const request = await fetch(
    `https://api.themoviedb.org/3${
      // @ts-ignore
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      movies: request.results || null,
    },
  };
};
