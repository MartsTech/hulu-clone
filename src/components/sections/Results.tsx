import Thumbnail from "@module/Tumbnail";
import { resultsType } from "@type/resultsType";
import FlipMove from "react-flip-move";

interface ResultsProps {
  results: resultsType;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex 
    flex-wrap justify-center"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
