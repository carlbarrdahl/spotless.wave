import Head from "next/head";
import { ComponentProps, useEffect } from "react";

export default function BaseLayout({ children }: ComponentProps<"div">) {
  useMobileHeightFix();

  return (
    <>
      <Head>
        <title>spotless.wave</title>
        <meta
          name="description"
          content="With spotless.wave, keeping our planet clean and healthy is as easy as a
        few taps on your smartphone. Join the spotless.wave movement today and
        make a difference in your community and the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-center">
        <main
          className="app container relative mx-auto flex h-screen flex-col overflow-hidden text-gray-800 md:max-w-sm md:border md:shadow-2xl"
          style={{ maxHeight: 851, height: `calc(var(--vh, 1vh) * 100)` }}
        >
          {children}
        </main>
      </div>
    </>
  );
}

function useMobileHeightFix() {
  useEffect(() => {
    function setHeight() {
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);
}
