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

  // Allow individual pages to declare their own layout (or none at all).
  // If a page sets Component.getLayout, use that; otherwise wrap with the
  // default Layout (Navbar + Footer).
  const getLayout =
    Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    isBrowser && (
      <>
        <Head>
          <title>SKKN BY KIM — Clean Skincare</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <SessionProvider>
          <StateContext>
            <NextUIProvider>
              <Toaster
                position="bottom-center"
                toastOptions={{
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    background: "#0a0a0a",
                    color: "#fff",
                    borderRadius: 0,
                    padding: "12px 20px",
                  },
                  success: {
                    iconTheme: { primary: "#fff", secondary: "#0a0a0a" },
                  },
                }}
              />
              {getLayout(<Component {...pageProps} />)}
            </NextUIProvider>
          </StateContext>
        </SessionProvider>
      </>
    )
  );
}
