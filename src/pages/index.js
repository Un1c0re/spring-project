import Head from "next/head";
import HomePage from "./HomePage";

const IndexPage = () => {
  return (
      <>
          <Head>
              <title>КультПросвет</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>

          <HomePage />
      </>
  );
};

export default IndexPage;