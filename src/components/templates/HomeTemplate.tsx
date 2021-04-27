import Header from "@section/Header";
import Nav from "@section/Nav";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <div className="">
      <Header />
      <Nav />
    </div>
  );
};

export default HomeTemplate;
