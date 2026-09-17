import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const Subscription = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Head>
        <title>Subscriptions – SKKN BY KIM</title>
      </Head>
      
      <div style={{ paddingTop: "var(--nav-h, 80px)", background: "#fff", minHeight: "100vh" }}>
        
        {/* ── BREADCRUMBS ── */}
        <div style={{ padding: "40px 40px 0", maxWidth: 1280, margin: "0 auto" }}>
          <h1 style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a0a0a", marginBottom: 32 }}>
            <Link href="/" style={{ opacity: 0.5, marginRight: 8, textDecoration: "none", color: "inherit" }}>Home</Link>
            <span style={{ opacity: 0.5, marginRight: 8 }}>/</span>
            Subscriptions
          </h1>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", textAlign: "center", marginBottom: 48 }}>
            Subscriptions
          </h2>
        </div>

        {/* ── HERO IMAGE ── */}
        <div style={{ width: "100%", maxHeight: 600, overflow: "hidden", background: "#f9f6f2" }}>
          <Image
            src="/sub.webp"
            width={1500}
            height={1000}
            alt="Subscription"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            priority
          />
        </div>

        {/* ── INTRO ── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px", display: "flex", gap: 48 }} className="flex-col md:flex-row">
          <h2 style={{ flex: 1, fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Never Run Out<br />
            <em>Of Your Routine.</em>
          </h2>
          <p style={{ flex: 1.5, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: 600, paddingTop: 8 }}>
            When you enroll in our subscription service, we'll ensure your
            products arrive on your schedule. Simply choose your desired
            products and replenishment frequency, and adjust at any time.
          </p>
        </div>

        {/* ── BENEFITS & HOW IT WORKS ── */}
        <div style={{ background: "#f9f6f2", padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            
            {/* Benefits */}
            <div style={{ marginBottom: 80 }}>
              <span className="section-label">Why Subscribe</span>
              <h2 className="section-heading" style={{ marginBottom: 40 }}>Subscription Benefits</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {[
                  { num: "01", text: "Free shipping on all subscription orders." },
                  { num: "02", text: "Early access to new products and drops." },
                  { num: "03", text: "10% off all subscription orders." }
                ].map((item) => (
                  <div key={item.num} style={{ background: "#fff", padding: "40px 32px", border: "1px solid #e8e4df" }}>
                    <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#aaa", marginBottom: 16 }}>
                      {item.num}
                    </span>
                    <p style={{ fontSize: "1rem", fontWeight: 500, color: "#0a0a0a", lineHeight: 1.5 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
                <div>
                  <span className="section-label">The Process</span>
                  <h2 className="section-heading" style={{ marginBottom: 0 }}>How It Works</h2>
                </div>
                <Link href="/collections/shop-all" style={{ textDecoration: "none" }}>
                  <button
                    className="btn-ghost"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span>Shop All</span>
                    <HiOutlineArrowNarrowRight
                      style={{ width: 18, height: 18, transform: hovered ? "translateX(5px)" : "translateX(0)", transition: "transform 0.3s ease" }}
                    />
                  </button>
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {[
                  { num: "01", text: "Choose your favorite SKKN BY KIM products and select the option to subscribe." },
                  { num: "02", text: "Decide how often you would like your products to be automatically replenished." },
                  { num: "03", text: "Leave the rest to us. Edit or cancel your plan at anytime." }
                ].map((item) => (
                  <div key={item.num} style={{ background: "#fff", padding: "40px 32px", border: "1px solid #e8e4df" }}>
                    <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#aaa", marginBottom: 16 }}>
                      {item.num}
                    </span>
                    <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.6 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── FAQ & BOTTOM IMAGE ── */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 40px 120px", display: "grid", gap: 64, gridTemplateColumns: "1fr 1fr" }} className="md:grid-cols-2 grid-cols-1">
          <div>
            <span className="section-label">Support</span>
            <h2 className="section-heading" style={{ marginBottom: 32 }}>FAQ</h2>
            <Accordion transition={{ duration: "300ms", timingFunction: "ease" }}>
              {[
                {
                  q: "How does the subscription work?",
                  a: "SKKN BY KIM's Subscription service offers the most convenient way to get your products delivered to your door, on your schedule. Simply choose your desired products and delivery frequency. Plus, subscribers get 10% off and free shipping."
                },
                {
                  q: "Can I cancel at anytime?",
                  a: "Yes, you can cancel at your leisure by going to the 'Subscriptions' section of your Account and clicking 'Edit', then selecting 'Cancel'."
                },
                {
                  q: "Can I skip a delivery?",
                  a: "Yes, you can update your subscription preferences by visiting your Account and clicking 'Manage' to skip a delivery."
                },
                {
                  q: "Are all subscription products refills?",
                  a: "Whether you subscribe to a Single or Refill product with your first order, all subsequent orders will automatically be a Refill product."
                }
              ].map((faq, i) => (
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
                            padding: "24px 0",
                            cursor: "pointer",
                            background: "none",
                            border: "none",
                            textAlign: "left",
                          }}
                        >
                          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", paddingRight: 20 }}>
                            {faq.q}
                          </span>
                          {open ? <AiOutlineMinus style={{ color: "#888", flexShrink: 0 }} /> : <AiOutlinePlus style={{ color: "#888", flexShrink: 0 }} />}
                        </AccordionHeader>
                        <AccordionBody>
                          <div style={{ paddingBottom: 24, fontSize: "0.85rem", color: "#555", lineHeight: 1.7 }}>
                            {faq.a}
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>

          <div style={{ background: "#f9f6f2", overflow: "hidden" }}>
            <Image
              src={`/sub 02.webp`}
              width={1000}
              height={1200}
              alt="Model"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Subscription;
