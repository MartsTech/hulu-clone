import DefaultLayout from "components/layouts/DefaultLayout";
import { defaultSEO } from "config/seo";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
};

export default App;
