import Thumbnail from "@module/Tumbnail";
import { resultsType } from "@type/resultsType";

interface ResultsProps {
  results: resultsType;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
