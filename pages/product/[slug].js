import React, { useState } from "react";
import Head from "next/head";
import { urlFor, client } from "@/lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Rituals from "@/components/Rituals";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

const TopRatedProduct = ({ product, discoverData }) => {
  const { decQty, incQty, qty, onAdd } = useStateContext();
  const [index, setIndex] = useState(0);

  // Default to a fallback if products aren't fetched properly during dev
  if (!product) return <div>Product Not Found</div>;

  const {
    image,
    name,
    details,
    price,
    size,
    slug,
    components,
    ingredients,
    application,
    results,
  } = product;

  return (
    <>
      <Head>
        <title>{name} – SKKN BY KIM</title>
      </Head>

      <div style={{ paddingTop: "var(--nav-h, 80px)", background: "#fff" }}>
        {/* ── BREADCRUMBS ── */}
        <div style={{ padding: "32px 40px", maxWidth: 1440, margin: "0 auto" }}>
          <h1 style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a0a0a" }}>
            <Link href="/" style={{ opacity: 0.5, cursor: "pointer", marginRight: 8, textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
            <span style={{ opacity: 0.5, marginRight: 8 }}>/</span>
            {name}
          </h1>
        </div>

        {/* ── MAIN PRODUCT GRID ── */}
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 480px",
            gap: 48,
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 40px 80px",
          }}
          className="product-page-main"
        >
          {/* LEFT: Imagery */}
          <div style={{ display: "flex", gap: 24, position: "relative" }}>
            {/* Thumbnails (Desktop) */}
            <div style={{ width: 80, display: "flex", flexDirection: "column", gap: 16 }} className="hidden lg:flex">
              {image?.map((item, i) => (
                <div
                  key={item._id}
                  onClick={() => setIndex(i)}
                  style={{
                    width: 80,
                    height: 100,
                    background: "#f9f6f2",
                    cursor: "pointer",
                    border: i === index ? "1px solid #0a0a0a" : "1px solid transparent",
                    opacity: i === index ? 1 : 0.6,
                    transition: "all 0.2s ease",
                  }}
                >
                  <img src={urlFor(item)} alt={`Thumbnail ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* Main Image (Desktop) */}
            <div style={{ flex: 1, background: "#f9f6f2", position: "relative", minHeight: 600 }} className="hidden lg:block">
              {image && (
                <img
                  src={urlFor(image[index])}
                  alt={name}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", animation: "fadeIn 0.3s ease" }}
                  key={index}
                />
              )}
            </div>

            {/* Mobile Carousel */}
            <div className="block lg:hidden" style={{ width: "100%", background: "#f9f6f2" }}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                style={{ width: "100%", height: "auto", aspectRatio: "3/4" }}
              >
                {image?.map((item) => (
                  <SwiperSlide key={item._id}>
                    <img src={urlFor(item)} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div style={{ position: "sticky", top: "calc(var(--nav-h, 80px) + 32px)", alignSelf: "start" }}>
            <span className="section-label">Skincare</span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 8 }}>
              {name}
            </h1>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 700 }}>${price}</p>
              <p style={{ fontSize: "0.8rem", color: "#888" }}>{size}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} style={{ width: 14, height: 14, color: i < 4.5 ? "#0a0a0a" : "#ccc" }} />
                ))}
              </div>
              <span style={{ fontSize: "0.75rem", color: "#666", fontWeight: 500 }}>(200 Reviews)</span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.7, marginBottom: 32 }}>
              {details || "A gentle yet efficient peptide eye cream that helps support skin's natural elasticity and acts to reduce puffiness and the appearance of fine lines."}
            </p>

            {/* Type Selector */}
            <div style={{ marginBottom: 24 }}>
              <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Format
              </span>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  style={{ flex: 1, height: 44, border: "1px solid #0a0a0a", background: "#0a0a0a", color: "#fff", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Single
                </button>
                <button
                  style={{ flex: 1, height: 44, border: "1px solid #e8e4df", background: "#fff", color: "#0a0a0a", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", transition: "border-color 0.2s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#0a0a0a"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e8e4df"}
                >
                  Refill
                </button>
              </div>
            </div>

            {/* Subscription */}
            <div style={{ padding: 16, border: "1px solid #e8e4df", marginBottom: 32, background: "#f9f6f2" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginBottom: 12 }}>
                <input type="radio" name="subs" defaultChecked style={{ width: 16, height: 16, accentColor: "#0a0a0a" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>One-time purchase (${price})</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <input type="radio" name="subs" style={{ width: 16, height: 16, accentColor: "#0a0a0a" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>Subscribe &amp; Save 10% (${(price * 0.9).toFixed(2)})</span>
              </label>
            </div>

            {/* Add to Bag Row */}
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #0a0a0a", height: 52 }}>
                <button
                  type="button"
                  onClick={decQty}
                  style={{ width: 44, height: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f0ede8"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "none"}
                >
                  <AiOutlineMinus style={{ width: 14, height: 14 }} />
                </button>
                <span style={{ width: 32, textAlign: "center", fontSize: "0.9rem", fontWeight: 600 }}>{qty}</span>
                <button
                  type="button"
                  onClick={incQty}
                  style={{ width: 44, height: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f0ede8"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "none"}
                >
                  <AiOutlinePlus style={{ width: 14, height: 14 }} />
                </button>
              </div>
              <button
                type="button"
                className="btn-primary"
                onClick={() => onAdd(product, qty)}
                style={{ flex: 1, height: 52, fontSize: "0.75rem" }}
              >
                Add To Bag — ${(price * qty).toFixed(2)}
              </button>
            </div>

            <p style={{ fontSize: "0.65rem", color: "#888", textAlign: "center", letterSpacing: "0.02em", marginBottom: 40 }}>
              Or 4 interest-free payments of ${(price / 4).toFixed(2)} with <strong>Klarna</strong>
            </p>

            {/* Accordions */}
            <div style={{ borderTop: "1px solid #e8e4df" }}>
              <Accordion transition={{ duration: "300ms", timingFunction: "ease" }}>
                {[
                  { title: "Product Details", content: details },
                  { title: "All Ingredients", content: ingredients },
                  { title: "Application", content: application },
                  { title: "Key Ingredients", content: components },
                  { title: "Results", content: results },
                ].map((acc, i) => (
                  <div key={i} style={{ borderBottom: "1px solid #e8e4df" }}>
                    <AccordionItem>
                      {({ open }) => (
                        <>
                          <AccordionHeader
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "20px 0",
                              cursor: "pointer",
                              background: "none",
                              border: "none",
                            }}
                          >
                            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                              {acc.title}
                            </span>
                            {open ? <AiOutlineMinus style={{ color: "#888" }} /> : <AiOutlinePlus style={{ color: "#888" }} />}
                          </AccordionHeader>
                          <AccordionBody>
                            <div style={{ paddingBottom: 20, fontSize: "0.8rem", color: "#555", lineHeight: 1.6 }}>
                              {acc.content || "Information temporarily unavailable."}
                            </div>
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </main>

        {/* ── RELATED RITUALS ── */}
        <section style={{ borderTop: "1px solid #e8e4df", padding: "80px 40px", maxWidth: 1440, margin: "0 auto", display: "flex", gap: 48 }} className="flex-col lg:flex-row">
          <div style={{ flex: "0 0 55%", background: "#f9f6f2", overflow: "hidden" }}>
            <img src="/watch now.webp" alt="Rituals" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="section-label">Complete The Ritual</span>
            <h2 className="section-heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 24 }}>
              Discover Your Ritual
            </h2>
            <div style={{ maxHeight: "40vh", overflowY: "auto", paddingRight: 8 }}>
              {discoverData?.map((item) => (
                <Rituals key={item._id} item={item} />
              ))}
            </div>
            <Link href="/collections/shop-all">
              <button className="btn-primary" style={{ marginTop: 32, width: "100%", height: 52, justifyContent: "center", fontSize: "0.7rem" }}>
                Shop All Products
              </button>
            </Link>
          </div>
        </section>

        {/* ── CONSUMER RESULTS BANNER ── */}
        <section style={{ position: "relative" }}>
          <img src="/CONSUMER RESULT.webp" alt="Results" style={{ width: "100%", objectFit: "cover", display: "block" }} className="hidden md:block" />
          <img src="/CONSUMER RESULT SMALL.webp" alt="Results" style={{ width: "100%", objectFit: "cover", display: "block" }} className="block md:hidden" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
          <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "6%", maxWidth: 500 }}>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.8)" }}>Proven Efficacy</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#fff", marginBottom: 24, letterSpacing: "-0.01em" }}>
              Consumer Results
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {["100% agree this product helps restore the elasticity of the skin", "100% agree this product visibly firmed and smoothed their area", "100% agree this product minimized puffiness over time"].map((res, i) => (
                <li key={i} style={{ display: "flex", gap: 12, color: "#fff", alignItems: "flex-start", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  <span style={{ fontSize: "1rem", lineHeight: 1 }}>✦</span>
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SUBSCRIPTION SECTION ── */}
        <section style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid #e8e4df" }} className="flex-col-reverse md:flex-row">
          <div style={{ flex: 1, padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 320 }}>
            <span className="section-label">Replenish</span>
            <h2 className="section-heading" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: 20 }}>
              Subscription
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.8, marginBottom: 32, maxWidth: 440 }}>
              Indulge in the convenience and exclusive benefits offered with our subscription service. Simply select how frequently you'd like to receive your products, and we'll ensure you never run on empty.
            </p>
            <div>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 320, background: "#f9f6f2", overflow: "hidden" }}>
            <img src="/subscribtion.webp" alt="Subscription" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </section>

      </div>

      {/* Internal component styles */}
      <style>{`
        @media (max-width: 1024px) {
          .product-page-main { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] { slug { current } }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const discoverData = await client.fetch(`*[_type == "rituals"]`);
  const product = await client.fetch(query);

  return {
    props: { product, discoverData },
  };
};

export default TopRatedProduct;
