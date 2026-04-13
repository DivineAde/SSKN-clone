import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "@/lib/client";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Everything = ({ product }) => {
  const { onAdd } = useStateContext();
  const [hovered, setHovered] = useState(false);
  const { image, name, slug, price } = product;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container with hover swap */}
      <div
        style={{
          aspectRatio: "3/4",
          background: "#f9f6f2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Link href={`/product/${slug.current}`} style={{ display: "block", width: "100%", height: "100%" }}>
          <img
            src={urlFor(image && image[0])}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              opacity: hovered && image[1] ? 0 : 1,
              transition: "opacity 0.4s ease, transform 0.8s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
          {image && image[1] && (
            <img
              src={urlFor(image[1])}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease, transform 0.8s ease",
                transform: hovered ? "scale(1.03)" : "scale(1)",
              }}
            />
          )}
        </Link>
      </div>

      {/* Info Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <Link href={`/product/${slug.current}`} style={{ textDecoration: "none", color: "inherit", minWidth: 0 }}>
            <h3
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.2,
                cursor: "pointer",
              }}
            >
              {name}
            </h3>
          </Link>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, flexShrink: 0 }}>
            ${price}
          </span>
        </div>

        <div style={{ display: "flex", gap: 2 }}>
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} style={{ width: 12, height: 12, color: i < 4.5 ? "#0a0a0a" : "#ccc" }} />
          ))}
        </div>

        <button
          onClick={() => onAdd(product, 1)}
          className="btn-secondary"
          style={{
            marginTop: 8,
            width: "100%",
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontSize: "0.65rem",
            transform: hovered ? "translateY(0)" : "translateY(0)",
          }}
        >
          <HiOutlineShoppingBag style={{ width: 14, height: 14 }} />
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default Everything;
