import React from "react";
import Head from "next/head";
import Link from "next/link";
import { client } from "@/lib/client";
import Everything from "@/components/Everything";

const VanityBag = ({ products }) => {
  return (
    <>
      <Head>
        <title>Vanity Bag – SKKN BY KIM</title>
      </Head>
      <div style={{ paddingTop: "var(--nav-h, 80px)", background: "#fff", minHeight: "100vh" }}>
        <div style={{ padding: "40px 40px 80px", maxWidth: 1440, margin: "0 auto" }}>
          
          <h1 style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a0a0a", marginBottom: 32 }}>
            <Link href="/" style={{ opacity: 0.5, marginRight: 8, textDecoration: "none", color: "inherit" }}>Home</Link>
            <span style={{ opacity: 0.5, marginRight: 8 }}>/</span>
            Vanity Bag
          </h1>
          
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 48 }}>
            Vanity Bag
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "60px 32px" }}>
            {products?.map((product) => (
              <Everything key={product._id} product={product} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  return { props: { products } };
}

export default VanityBag;