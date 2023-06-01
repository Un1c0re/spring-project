import Home from ".//Home";
import Head from "next/head";
import styles from "@/styles/Index.module.css"

const IndexPage = () => {
  return (
      <>
          <Head>
              <title>КультПросвет</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>

          <Home />
      </>
  );
};

export default IndexPage;