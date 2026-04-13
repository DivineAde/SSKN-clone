import React from "react";

const Radiance = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        padding: "96px 40px",
        maxWidth: 1440,
        margin: "0 auto",
      }}
      className="md:flex-row-reverse"
    >
      {/* Video side */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          background: "#f9f6f2",
          position: "relative",
        }}
      >
        <video
          muted
          autoPlay
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          <source src="/Skin-care.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text side */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 0 0 0",
        }}
        className="md:pr-16"
      >
        <span className="section-label">Our Philosophy</span>

        <h2
          className="section-heading"
          style={{ marginBottom: 24 }}
        >
          Radiance,<br />
          <em>bottled.</em>
        </h2>

        <p
          style={{
            fontSize: "0.88rem",
            color: "#555",
            lineHeight: 1.85,
            marginBottom: 32,
            maxWidth: 440,
          }}
        >
          With a focus on quality and efficacy, SKKN BY KIM&apos;s science-backed,
          clean formulas deliver targeted rejuvenation. Crafted for conscious
          consumers — cruelty-free, vegan, and formulated without gluten,
          sulfates, BHT, and PEGs.
        </p>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 36,
          }}
        >
          {["Clean\nFormula", "Vegan &\nCruelty-Free", "Science\nBacked"].map((text) => (
            <div
              key={text}
              style={{
                padding: "14px 12px",
                border: "1px solid #e8e4df",
                textAlign: "center",
                background: "#f9f6f2",
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        <div>
          <button
            type="button"
            className="btn-primary"
            onClick={() => window.location.href = "/collections/skincare"}
          >
            Shop Skincare
          </button>
        </div>
      </div>
    </section>
  );
};

export default Radiance;
