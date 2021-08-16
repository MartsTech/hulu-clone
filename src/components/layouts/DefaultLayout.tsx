import Header from "components/header/Header";
import Nav from "components/nav/Nav";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
