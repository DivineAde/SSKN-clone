import { useState } from "react";
import Head from "next/head";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Hero } from "@/components/Hero";
import TopRated from "@/components/TopRated";
import { client } from "@/lib/client";
import Rituals from "@/components/Rituals";
import Era from "@/components/Era";
import Radiance from "@/components/Radiance";
import Pack from "@/components/Pack";
import FooterBanner from "@/components/FooterBanner";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home({ products, heroData, discoverData, packData }) {
  const [shopAllHovered, setShopAllHovered] = useState(false);

  return (
    <>
      <Head>
        <title>SKKN BY KIM — Clean Skincare Ritual</title>
        <meta
          name="description"
          content="Discover SKKN BY KIM — science-backed, clean, vegan skincare developed by Kim Kardashian."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={{ background: "#fff", overflowX: "hidden" }}>
        {/* ══ HERO ══ */}
        <Hero heroData={heroData.length && heroData[0]} />

        {/* ══ TRUST BAR ══ */}
        <div
          style={{
            background: "#f9f6f2",
            borderTop: "1px solid #e8e4df",
            borderBottom: "1px solid #e8e4df",
            padding: "16px 40px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 48,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "Clean Formula",
              "Cruelty-Free",
              "Vegan",
              "Gluten-Free",
              "Sulfate-Free",
              "Science-Backed",
            ].map((label) => (
              <span
                key={label}
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#555",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ {label}
              </span>
            ))}
          </div>
        </div>

        {/* ══ TOP RATED ══ */}
        <section
          style={{
            padding: "80px 40px 40px",
            maxWidth: 1440,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 36,
            }}
          >
            <div>
              <span className="section-label">Best Sellers</span>
              <h2
                className="section-heading"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", marginBottom: 0 }}
              >
                Top Rated
              </h2>
            </div>

            <Link href="/collections/shop-all" style={{ textDecoration: "none" }}>
              <button
                className="btn-ghost"
                onMouseEnter={() => setShopAllHovered(true)}
                onMouseLeave={() => setShopAllHovered(false)}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span>Shop All</span>
                <HiOutlineArrowNarrowRight
                  style={{
                    width: 18,
                    height: 18,
                    transform: shopAllHovered ? "translateX(5px)" : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
            </Link>
          </div>

          <Carousel
            itemClass="trial"
            draggable
            responsive={responsive}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="carousel-dots"
          >
            {products?.map((product) => (
              <TopRated key={product._id} product={product} />
            ))}
          </Carousel>
        </section>

        {/* ══ DISCOVER YOUR RITUALS ══ */}
        <section
          style={{
            padding: "80px 40px",
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
          className="md:flex-row"
        >
          {/* Left: Image */}
          <div
            style={{
              flex: "0 0 58%",
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1)";
            }}
          >
            <img
              src="/watch now.webp"
              alt="Discover your rituals"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>

          {/* Right: Ritual list */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span className="section-label">Skincare Ritual</span>
            <h2
              className="section-heading"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", marginBottom: 8 }}
            >
              Discover Your<br />
              <em>Ritual</em>
            </h2>

            <p
              style={{
                fontSize: "0.82rem",
                color: "#888",
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              Nine steps. Infinite transformation.
            </p>

            {/* Scrollable ritual list */}
            <div
              style={{
                overflowY: "auto",
                maxHeight: "42vh",
                paddingRight: 8,
                scrollbarWidth: "thin",
              }}
            >
              {discoverData.map((item) => (
                <Rituals key={item._id} item={item} />
              ))}
            </div>

            <Link href="/collections/shop-all">
              <button
                className="btn-primary"
                style={{ marginTop: 28, width: "100%", height: 52, justifyContent: "center", fontSize: "0.7rem" }}
              >
                Shop All Products
              </button>
            </Link>
          </div>
        </section>

        {/* ══ ERA ══ */}
        <div style={{ borderTop: "1px solid #e8e4df" }}>
          <Era />
        </div>

        {/* ══ RADIANCE ══ */}
        <div style={{ background: "#f9f6f2", borderTop: "1px solid #e8e4df" }}>
          <Radiance />
        </div>

        {/* ══ PACKS ══ */}
        <div style={{ borderTop: "1px solid #e8e4df", paddingTop: 80 }}>
          <Pack packData={packData.length && packData[0]} />
        </div>

        {/* ══ FOOTER BANNER ══ */}
        <div style={{ background: "#f9f6f2", borderTop: "1px solid #e8e4df" }}>
          <FooterBanner />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  const heroData = await client.fetch(`*[_type == "hero"]`);
  const discoverData = await client.fetch(`*[_type == "rituals"]`);
  const packData = await client.fetch(`*[_type == "pack"]`);

  return {
    props: {
      products,
      heroData,
      discoverData,
      packData,
    },
  };
}
