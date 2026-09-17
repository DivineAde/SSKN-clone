import React, { useState } from "react";

const footerSections = [
  {
    title: "Support",
    links: ["FAQs", "Track Order", "Shipping", "Accessibility", "Contact Us"],
  },
  {
    title: "SKKN BY KIM",
    links: ["About Us", "Subscriptions", "Digital Gift Card", "Tutorials"],
  },
  {
    title: "Connect",
    links: ["Instagram", "Facebook", "Twitter", "YouTube", "TikTok"],
  },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (i) => setOpenSection(openSection === i ? null : i);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ background: "#f9f6f2", fontFamily: "'Inter', sans-serif" }}>
      {/* ── Newsletter band ── */}
      <div
        style={{
          background: "#0a0a0a",
          padding: "64px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Stay in the ritual
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Join the SKKN Community
        </h2>
        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", maxWidth: 460, lineHeight: 1.7 }}>
          Be first to discover new products, exclusive offers, and skin rituals
          crafted just for you.
        </p>

        {submitted ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#fff",
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>✓</span>
            You&apos;re on the list. Welcome.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              width: "100%",
              maxWidth: 460,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                flex: 1,
                height: 52,
                padding: "0 20px",
                background: "rgba(255,255,255,0.06)",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "0.82rem",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.02em",
              }}
            />
            <button
              type="submit"
              style={{
                height: 52,
                padding: "0 24px",
                background: "#fff",
                color: "#0a0a0a",
                border: "none",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                flexShrink: 0,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e8e8e8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              Join
            </button>
          </form>
        )}

        <p
          style={{
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.3)",
            maxWidth: 380,
            lineHeight: 1.6,
            letterSpacing: "0.03em",
          }}
        >
          By submitting your email you agree that SKKN BY KIM may send promotional
          messages. You may unsubscribe at any time.
        </p>
      </div>

      {/* ── Main footer columns ── */}
      <div style={{ padding: "64px 40px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
          }}
          className="grid-cols-1 md:grid-cols-4"
        >
          {/* Brand column */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="33"
              viewBox="0 0 75 36"
              fill="none"
              style={{ marginBottom: 20 }}
            >
              <path d="M51.0516 34.2981L49.6088 28.0389H47.1993V36H48.7422V30.6152C48.7422 30.46 48.7402 30.2424 48.7363 29.9643C48.7324 29.6852 48.7315 29.4695 48.7315 29.3182L50.2228 36H51.8328L53.3348 29.3182C53.3348 29.4695 53.3329 29.6852 53.33 29.9643C53.3261 30.2424 53.3241 30.46 53.3241 30.6152V36H54.867V28.0389H52.4837L51.0516 34.2981ZM45.6778 28.0389H44.0319V36H45.6778V28.0389ZM36.2408 36H37.8701V33.3369L38.6678 32.5249L41.1104 36H43.2401L39.8211 31.3129L43.0739 28.0389H40.9345L37.8721 31.3188V28.0389H36.2408V36ZM28.9491 31.5061L27.3042 28.0389H25.3522L28.0941 33.0148V36H29.7506V33.0148L32.4011 28.0389H30.525L28.9491 31.5061ZM21.907 28.0389H18.077V36H21.6476C22.0508 36 22.4239 35.9639 22.7678 35.8917C23.1118 35.8195 23.4101 35.6867 23.6636 35.4916C23.8881 35.3227 24.0756 35.1139 24.2252 34.8651C24.4603 34.4913 24.5779 34.0678 24.5779 33.5964C24.5779 33.1397 24.4749 32.7504 24.2689 32.4303C24.063 32.1092 23.7579 31.876 23.3527 31.7286C23.6189 31.592 23.821 31.4407 23.9571 31.2748C24.2019 30.9792 24.3243 30.5888 24.3243 30.1028C24.3243 29.6315 24.2029 29.2265 23.9609 28.8879C23.5577 28.3365 22.8737 28.0535 21.907 28.0389ZM21.6078 32.4947C21.9478 32.4986 22.2121 32.5435 22.4006 32.6303C22.7367 32.7855 22.9058 33.0695 22.9058 33.4842C22.9058 33.9741 22.7319 34.3049 22.385 34.4786C22.1936 34.5723 21.9255 34.6191 21.5825 34.6191H19.6578V32.4966H21.6078V32.4947ZM21.3814 29.4217C21.7603 29.4217 22.0732 29.4636 22.318 29.5466C22.6017 29.6647 22.7435 29.9096 22.7435 30.2804C22.7435 30.6152 22.6367 30.8484 22.422 30.9792C22.2072 31.1109 21.9284 31.1763 21.5835 31.1763H19.6568V29.4217H21.3814Z" fill="#0a0a0a" />
              <path d="M14.7331 22.7904H0.544086L0.0903572 17.6242L9.5594 18.0809C9.56037 12.3682 0 14.7073 0 3.49458V0H13.5837L14.0374 4.71052H5.17271C5.17271 10.4232 14.7331 8.08311 14.7331 19.2958V22.7904Z" fill="#0a0a0a" />
              <path d="M28.5301 0L25.0809 9.42006H23.3564V0H16.5494V0.212739L18.3644 11.0615L16.5494 22.5474V22.7895H23.3564V12.7322H25.0809L28.5301 22.7895H35.6391V22.5777L28.8021 11.0615L34.7317 0.212739V0H28.5301Z" fill="#0a0a0a" />
              <path d="M49.133 0L45.6839 9.42006H43.9593V0H37.1524V0.212739L38.9673 11.0615L37.1524 22.5474V22.7895H43.9593V12.7322H45.6839L49.133 22.7895H56.243V22.5777L49.405 11.0615L55.3346 0.212739V0H49.133Z" fill="#0a0a0a" />
              <path d="M57.7553 0.303495V0H63.6548C66.1362 3.64682 67.921 7.20191 69.1005 10.878V0H75V0.303495L73.1851 11.0605L75 22.486V22.7895H69.1005C69.1005 18.4439 67.5275 13.5216 63.6548 7.53468V22.7895H57.7553V22.486L59.5703 11.0605L57.7553 0.303495Z" fill="#0a0a0a" />
            </svg>
            <p style={{ fontSize: "0.78rem", color: "#777", lineHeight: 1.8, maxWidth: 240 }}>
              Clean. Vegan. Science-backed skincare for conscious beauty rituals.
            </p>
          </div>

          {/* Link columns — desktop */}
          {footerSections.map((section, i) => (
            <div key={section.title}>
              {/* Desktop */}
              <div className="hidden md:block">
                <h4
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#0a0a0a",
                    marginBottom: 16,
                  }}
                >
                  {section.title}
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
                  {section.links.map((link) => (
                    <li key={link}>
                      <span className="footer-link">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile accordion */}
              <div className="block md:hidden" style={{ borderTop: "1px solid #e8e4df" }}>
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                    }}
                  >
                    {section.title}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#888",
                      transform: openSection === i ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.25s ease",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                {openSection === i && (
                  <ul style={{ listStyle: "none", paddingBottom: 16, display: "flex", flexDirection: "column", gap: 0 }}>
                    {section.links.map((link) => (
                      <li key={link}>
                        <span className="footer-link">{link}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid #e8e4df",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1280,
          margin: "0 auto",
        }}
        className="md:flex-row"
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
            justifyContent: "center",
          }}
        >
          {["Privacy Policy", "Terms of Use", "Terms of Sale", "Cookie Policy", "Cookie Settings"].map(
            (item) => (
              <li key={item}>
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#aaa",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </span>
              </li>
            )
          )}
        </ul>
        <p
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#aaa",
            textAlign: "center",
          }}
        >
          © SKKN BY KIM {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
