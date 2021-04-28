import Header from "@section/Header";
import Nav from "@section/Nav";

interface HomeTemplateProps {
  results: JSX.Element;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ results }) => {
  return (
    <div className="">
      <Header />
      <Nav />
      {results}
    </div>
  );
};

export default HomeTemplate;
