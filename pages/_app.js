import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";
import { useSSR } from "@nextui-org/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <>
        <Head>
          <title>SSKN CLONE</title>
        </Head>
        <SessionProvider>
          <StateContext>
            <NextUIProvider>
              <Layout>
                <Toaster />
                <Component {...pageProps} />
              </Layout>
            </NextUIProvider>
          </StateContext>
        </SessionProvider>
      </>
    )
  );
}
