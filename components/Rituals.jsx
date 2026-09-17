import React from "react";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "@/lib/client";
import { AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";

const Rituals = ({ item: { name, image, discount, details, price } }) => {
  const { onAdd, setShowCart } = useStateContext();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
        borderBottom: "1px solid #e8e4df",
        gap: 16,
        transition: "background 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f6f2")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {/* Image + Info */}
      <div style={{ display: "flex", gap: 16, alignItems: "center", flex: 1, minWidth: 0 }}>
        <div
          style={{
            width: 72,
            height: 72,
            background: "#f9f6f2",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <img
            src={urlFor(image && image[0])}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              marginBottom: 4,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </h3>

          {/* Stars */}
          <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} style={{ width: 10, height: 10, color: "#0a0a0a" }} />
            ))}
          </div>

          {/* Pricing */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {discount && (
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0a0a0a" }}>
                ₦{discount}
              </span>
            )}
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#aaa",
                textDecoration: discount ? "line-through" : "none",
              }}
            >
              ₦{price.toFixed(2)}
            </span>
            {discount && (
              <span
                style={{
                  display: "inline-block",
                  background: "#0a0a0a",
                  color: "#fff",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "2px 6px",
                  textTransform: "uppercase",
                }}
              >
                Save
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Add to bag */}
      <button
        type="button"
        onClick={() => onAdd({ name, image, price: discount || price }, 1)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "1px solid #0a0a0a",
          padding: "6px 12px",
          cursor: "pointer",
          flexShrink: 0,
          transition: "background 0.2s ease, color 0.2s ease",
          fontFamily: "'Inter', sans-serif",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#0a0a0a";
          e.currentTarget.style.color = "#fff";
          const icon = e.currentTarget.querySelector("svg");
          if (icon) icon.style.color = "#fff";
          const span = e.currentTarget.querySelector("span");
          if (span) span.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "none";
          e.currentTarget.style.color = "#0a0a0a";
          const icon = e.currentTarget.querySelector("svg");
          if (icon) icon.style.color = "#0a0a0a";
          const span = e.currentTarget.querySelector("span");
          if (span) span.style.color = "#0a0a0a";
        }}
      >
        <AiOutlinePlus style={{ width: 12, height: 12 }} />
        <span
          style={{
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Add
        </span>
      </button>
    </div>
  );
};

export default Rituals;
