import Results from "@section/Results";
import HomeTemplate from "@template/HomeTemplate";
import requests from "@util/requests";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { resultsType } from "@type/resultsType";

interface HomeProps {
  results: resultsType;
}

const Home: React.FC<HomeProps> = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate results={<Results results={results} />} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre =
    typeof context.query.genre === "string" ? context.query.genre : "";

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results || {},
    },
  };
};
