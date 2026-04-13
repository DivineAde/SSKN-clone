import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

const Cart = () => {
  const {
    setShowCart,
    totalQuantities,
    cartItems,
    toggleCartItemQuantity,
    totalPrice,
    deleteCartItem,
  } = useStateContext();

  return (
    <div className="effect" onClick={(e) => { if (e.target === e.currentTarget) setShowCart(false); }}>
      <div className="cart-drawer">

        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 28px",
            borderBottom: "1px solid #e8e4df",
            flexShrink: 0,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: 4,
              }}
            >
              Your Bag
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
              }}
            >
              {totalQuantities} {totalQuantities === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setShowCart(false)}
            style={{
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f0ede8",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0ddd8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f0ede8")}
            aria-label="Close cart"
          >
            <AiOutlineClose style={{ width: 16, height: 16 }} />
          </button>
        </div>

        {/* ── Empty state ── */}
        {cartItems.length < 1 && (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 28px",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#f0ede8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HiOutlineShoppingBag style={{ width: 30, height: 30, color: "#888" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 8 }}>Your bag is empty</p>
              <p style={{ fontSize: "0.8rem", color: "#888", lineHeight: 1.6 }}>
                Continue browsing, or start with our best sellers below.
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() => setShowCart(false)}
              style={{ marginTop: 8 }}
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* ── Cart Items ── */}
        {cartItems.length > 0 && (
          <div style={{ flex: 1, overflowY: "auto", padding: "0 28px" }}>
            {cartItems.map((item, i) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "20px 0",
                  borderBottom: "1px solid #e8e4df",
                  animation: `slideUp 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both`,
                }}
              >
                {/* Product Image */}
                <div
                  style={{
                    width: 88,
                    height: 88,
                    flexShrink: 0,
                    background: "#f9f6f2",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={urlFor(item?.image[0])}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Product Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#0a0a0a",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.name}
                    </p>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0a0a0a", flexShrink: 0, marginLeft: 8 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      color: "#888",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Single · ${item.price}
                  </span>

                  {/* Subscription options */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                      <input type="radio" name={`radio-${item._id}`} defaultChecked style={{ accentColor: "#0a0a0a" }} />
                      <span style={{ fontSize: "0.7rem", color: "#555" }}>One-time purchase</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                      <input type="radio" name={`radio-${item._id}`} style={{ accentColor: "#0a0a0a" }} />
                      <span style={{ fontSize: "0.7rem", color: "#555" }}>Subscribe &amp; save 10%</span>
                    </label>
                  </div>

                  {/* Quantity controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #e8e4df",
                        height: 34,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                        style={{
                          width: 34,
                          height: 34,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                          transition: "background 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f0ede8")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                      >
                        <AiOutlineMinus style={{ width: 12, height: 12 }} />
                      </button>
                      <span
                        style={{
                          width: 32,
                          textAlign: "center",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                        style={{
                          width: 34,
                          height: 34,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                          transition: "background 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f0ede8")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                      >
                        <AiOutlinePlus style={{ width: 12, height: 12 }} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteCartItem(item)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#888",
                        textDecoration: "underline",
                        padding: "4px 8px",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Footer / Checkout ── */}
        {cartItems.length > 0 && (
          <div
            style={{
              flexShrink: 0,
              borderTop: "1px solid #e8e4df",
              padding: "20px 28px 28px",
              background: "#fff",
            }}
          >
            {/* Subtotal */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                Subtotal
              </span>
              <span style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <p
              style={{
                fontSize: "0.65rem",
                color: "#aaa",
                letterSpacing: "0.04em",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              Shipping, taxes & discounts calculated at checkout
            </p>

            <Link href="/checkout" onClick={() => setShowCart(false)}>
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center", height: 52, fontSize: "0.7rem" }}>
                Proceed to Checkout
              </button>
            </Link>

            <p
              style={{
                fontSize: "0.62rem",
                color: "#aaa",
                textAlign: "center",
                marginTop: 10,
                letterSpacing: "0.04em",
              }}
            >
              or 4 interest-free payments of ${(totalPrice / 4).toFixed(2)} with{" "}
              <strong style={{ color: "#555" }}>Klarna</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
