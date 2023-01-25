import { type AppType } from "next/app";

import "@fontsource/inter";

import "../styles/globals.css";

const MyApp: AppType<{}> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
