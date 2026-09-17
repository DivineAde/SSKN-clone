import React from "react";
import Image from "next/image";
import Link from "next/link";

const Era = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 48,
        padding: "96px 40px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
      className="md:flex-row"
    >
      {/* Image side */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
          minHeight: 500, // Added a minimum height so the container has space for the absolute image
        }}
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector("img");
          if (img) img.style.transform = "scale(1.04)";
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector("img");
          if (img) img.style.transform = "scale(1)";
        }}
      >
        <Image
          src="/the-good-hygiene-co-piePSrPkXoQ-unsplash.jpg"
          fill // Tells Next.js to expand to the boundaries of the parent element
          alt="A New Era of Skincare"
          sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js optimize image loading sizes
          style={{
            objectFit: "cover", // Crops the image perfectly instead of stretching it
            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>

      {/* Text side */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="md:pl-16"
      >
        <span className="section-label">Our Story</span>
        <h2 className="section-heading" style={{ marginBottom: 24 }}>
          A New Era<br />
          <em>of Skincare.</em>
        </h2>
        <p
          style={{
            fontSize: "0.88rem",
            color: "#555",
            lineHeight: 1.85,
            marginBottom: 40,
            maxWidth: 440,
          }}
        >
          Introducing an innovative line of uncompromising skincare developed by Kim Kardashian. Through a visionary nine-product ritual, SKKN BY KIM delivers nourishment, renewal, and an indulgent at-home experience.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderTop: "1px solid #e8e4df",
            borderLeft: "1px solid #e8e4df",
            marginBottom: 40,
          }}
        >
          {[
            { number: "9", label: "Ritual Products" },
            { number: "100%", label: "Vegan Formula" },
            { number: "0", label: "Harsh Chemicals" },
          ].map(({ number, label }) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: "20px 16px",
                borderRight: "1px solid #e8e4df",
                borderBottom: "1px solid #e8e4df",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#0a0a0a",
                  marginBottom: 4,
                }}
              >
                {number}
              </p>
              <p
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <div>
          <Link href="/collections/complete">
            <button type="button" className="btn-primary">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Era;
