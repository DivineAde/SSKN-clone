import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { HiOutlineShoppingBag, HiOutlineLockClosed } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";

const STEPS = ["Cart", "Shipping", "Payment", "Review"];

export default function CheckoutPage() {
  const {
    cartItems,
    totalPrice,
    totalQuantities,
    toggleCartItemQuantity,
    deleteCartItem,
  } = useStateContext();

  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    saveInfo: false,
  });

  const update = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  const shipping = totalPrice >= 75 ? 0 : 8.99;
  const tax = parseFloat((totalPrice * 0.08).toFixed(2));
  const orderTotal = (totalPrice + shipping + tax).toFixed(2);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  /* ─────── Order Placed Confirmation ─────── */
  if (orderPlaced) {
    return (
      <>
        <Head>
          <title>Order Confirmed – SKKN BY KIM</title>
        </Head>
        <div
          style={{
            minHeight: "100vh",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 24px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <BsCheckCircleFill style={{ width: 56, height: 56, color: "#0a0a0a", marginBottom: 24 }} />
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 12,
            }}
          >
            Order Placed
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Thank you for your order
          </h1>
          <p
            style={{
              fontSize: "0.88rem",
              color: "#666",
              textAlign: "center",
              maxWidth: 440,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            A confirmation email has been sent to{" "}
            <strong style={{ color: "#0a0a0a" }}>{form.email || "your inbox"}</strong>.
            Your order is being carefully prepared.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/">
              <button className="btn-primary">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Checkout – SKKN BY KIM</title>
        <meta name="description" content="Complete your SKKN BY KIM purchase securely." />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* ── Checkout Header ── */}
        <div
          style={{
            borderBottom: "1px solid #e8e4df",
            padding: "0 40px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: "var(--nav-h, 80px)",
            background: "#fff",
            zIndex: 100,
          }}
        >
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="29" viewBox="0 0 75 36" fill="none">
              <path d="M51.0516 34.2981L49.6088 28.0389H47.1993V36H48.7422V30.6152C48.7422 30.46 48.7402 30.2424 48.7363 29.9643C48.7324 29.6852 48.7315 29.4695 48.7315 29.3182L50.2228 36H51.8328L53.3348 29.3182C53.3348 29.4695 53.3329 29.6852 53.33 29.9643C53.3261 30.2424 53.3241 30.46 53.3241 30.6152V36H54.867V28.0389H52.4837L51.0516 34.2981ZM45.6778 28.0389H44.0319V36H45.6778V28.0389ZM36.2408 36H37.8701V33.3369L38.6678 32.5249L41.1104 36H43.2401L39.8211 31.3129L43.0739 28.0389H40.9345L37.8721 31.3188V28.0389H36.2408V36ZM28.9491 31.5061L27.3042 28.0389H25.3522L28.0941 33.0148V36H29.7506V33.0148L32.4011 28.0389H30.525L28.9491 31.5061ZM21.907 28.0389H18.077V36H21.6476C22.0508 36 22.4239 35.9639 22.7678 35.8917C23.1118 35.8195 23.4101 35.6867 23.6636 35.4916C23.8881 35.3227 24.0756 35.1139 24.2252 34.8651C24.4603 34.4913 24.5779 34.0678 24.5779 33.5964C24.5779 33.1397 24.4749 32.7504 24.2689 32.4303C24.063 32.1092 23.7579 31.876 23.3527 31.7286C23.6189 31.592 23.821 31.4407 23.9571 31.2748C24.2019 30.9792 24.3243 30.5888 24.3243 30.1028C24.3243 29.6315 24.2029 29.2265 23.9609 28.8879C23.5577 28.3365 22.8737 28.0535 21.907 28.0389ZM21.6078 32.4947C21.9478 32.4986 22.2121 32.5435 22.4006 32.6303C22.7367 32.7855 22.9058 33.0695 22.9058 33.4842C22.9058 33.9741 22.7319 34.3049 22.385 34.4786C22.1936 34.5723 21.9255 34.6191 21.5825 34.6191H19.6578V32.4966H21.6078V32.4947ZM21.3814 29.4217C21.7603 29.4217 22.0732 29.4636 22.318 29.5466C22.6017 29.6647 22.7435 29.9096 22.7435 30.2804C22.7435 30.6152 22.6367 30.8484 22.422 30.9792C22.2072 31.1109 21.9284 31.1763 21.5835 31.1763H19.6568V29.4217H21.3814Z" fill="black" />
              <path d="M14.7331 22.7904H0.544086L0.0903572 17.6242L9.5594 18.0809C9.56037 12.3682 0 14.7073 0 3.49458V0H13.5837L14.0374 4.71052H5.17271C5.17271 10.4232 14.7331 8.08311 14.7331 19.2958V22.7904Z" fill="black" />
              <path d="M28.5301 0L25.0809 9.42006H23.3564V0H16.5494V0.212739L18.3644 11.0615L16.5494 22.5474V22.7895H23.3564V12.7322H25.0809L28.5301 22.7895H35.6391V22.5777L28.8021 11.0615L34.7317 0.212739V0H28.5301Z" fill="black" />
              <path d="M49.133 0L45.6839 9.42006H43.9593V0H37.1524V0.212739L38.9673 11.0615L37.1524 22.5474V22.7895H43.9593V12.7322H45.6839L49.133 22.7895H56.243V22.5777L49.405 11.0615L55.3346 0.212739V0H49.133Z" fill="black" />
              <path d="M57.7553 0.303495V0H63.6548C66.1362 3.64682 67.921 7.20191 69.1005 10.878V0H75V0.303495L73.1851 11.0605L75 22.486V22.7895H69.1005C69.1005 18.4439 67.5275 13.5216 63.6548 7.53468V22.7895H57.7553V22.486L59.5703 11.0605L57.7553 0.303495Z" fill="black" />
            </svg>
          </Link>

          {/* Step indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }} className="hidden md:flex">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <button
                  onClick={() => i < step && setStep(i)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: i < step ? "pointer" : "default",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 8px",
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: i <= step ? "#0a0a0a" : "#e8e4df",
                      color: i <= step ? "#fff" : "#aaa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      transition: "background 0.3s ease",
                    }}
                  >
                    {i < step ? "✓" : i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: i <= step ? "#0a0a0a" : "#aaa",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {s}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      width: 32,
                      height: 1,
                      background: i < step ? "#0a0a0a" : "#e8e4df",
                      margin: "0 4px",
                      transition: "background 0.3s ease",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#888" }}>
            <HiOutlineLockClosed style={{ width: 14, height: 14 }} />
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Secure Checkout
            </span>
          </div>
        </div>

        {/* ── Main two-column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            minHeight: "calc(100vh - 64px - var(--nav-h, 80px))",
            maxWidth: 1200,
            margin: "0 auto",
          }}
          className="checkout-grid"
        >
          {/* ── LEFT: Form ── */}
          <div style={{ padding: "48px 48px 80px", borderRight: "1px solid #e8e4df" }}>

            {/* ════════ STEP 0: Cart Review ════════ */}
            {step === 0 && (
              <div style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
                <span className="section-label">Step 1 of 4</span>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    marginBottom: 32,
                  }}
                >
                  Review Your Bag
                </h1>

                {cartItems.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "60px 0" }}>
                    <HiOutlineShoppingBag style={{ width: 48, height: 48, color: "#ccc", margin: "0 auto 16px" }} />
                    <p style={{ color: "#888", marginBottom: 24 }}>Your bag is empty.</p>
                    <Link href="/">
                      <button className="btn-primary">Continue Shopping</button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                      {cartItems.map((item) => (
                        <div
                          key={item._id}
                          style={{
                            display: "flex",
                            gap: 20,
                            padding: "20px 0",
                            borderBottom: "1px solid #e8e4df",
                            alignItems: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              width: 80,
                              height: 80,
                              background: "#f9f6f2",
                              flexShrink: 0,
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={urlFor(item?.image[0])}
                              alt={item.name}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                              <p
                                style={{
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {item.name}
                              </p>
                              <button
                                onClick={() => deleteCartItem(item)}
                                style={{
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "#bbb",
                                  padding: 0,
                                }}
                              >
                                <AiOutlineClose style={{ width: 14, height: 14 }} />
                              </button>
                            </div>
                            <span style={{ fontSize: "0.7rem", color: "#888", display: "block", marginBottom: 12 }}>
                              ${item.price} · Single
                            </span>

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  border: "1px solid #e8e4df",
                                  height: 32,
                                }}
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleCartItemQuantity(item._id, "dec")}
                                  style={{ width: 32, height: 32, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                  <AiOutlineMinus style={{ width: 10, height: 10 }} />
                                </button>
                                <span style={{ width: 28, textAlign: "center", fontSize: "0.8rem", fontWeight: 600 }}>
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleCartItemQuantity(item._id, "inc")}
                                  style={{ width: 32, height: 32, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                  <AiOutlinePlus style={{ width: 10, height: 10 }} />
                                </button>
                              </div>
                              <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 32 }}>
                      <button
                        className="btn-primary"
                        onClick={() => setStep(1)}
                        style={{ width: "100%", height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                      >
                        Continue to Shipping →
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ════════ STEP 1: Shipping ════════ */}
            {step === 1 && (
              <div style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
                <span className="section-label">Step 2 of 4</span>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    marginBottom: 32,
                  }}
                >
                  Shipping Information
                </h1>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "First Name", key: "firstName", placeholder: "Kim", col: 1 },
                    { label: "Last Name", key: "lastName", placeholder: "Kardashian", col: 1 },
                  ].map(({ label, key, placeholder }) => (
                    <div key={key}>
                      <label className="checkout-label">{label}</label>
                      <input
                        className="checkout-input"
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => update(key, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                  <div>
                    <label className="checkout-label">Email Address</label>
                    <input
                      className="checkout-input"
                      type="email"
                      placeholder="kim@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="checkout-label">Phone Number</label>
                    <input
                      className="checkout-input"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ marginTop: 32, borderTop: "1px solid #e8e4df", paddingTop: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <MdOutlineLocalShipping style={{ width: 20, height: 20, color: "#888" }} />
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      Delivery Address
                    </span>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label className="checkout-label">Street Address</label>
                    <input
                      className="checkout-input"
                      placeholder="123 Skincare Lane"
                      value={form.address}
                      onChange={(e) => update("address", e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label className="checkout-label">Apt / Suite (optional)</label>
                    <input
                      className="checkout-input"
                      placeholder="Suite 4B"
                      value={form.apt}
                      onChange={(e) => update("apt", e.target.value)}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
                    <div>
                      <label className="checkout-label">City</label>
                      <input
                        className="checkout-input"
                        placeholder="Los Angeles"
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="checkout-label">State</label>
                      <input
                        className="checkout-input"
                        placeholder="CA"
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="checkout-label">ZIP Code</label>
                      <input
                        className="checkout-input"
                        placeholder="90210"
                        value={form.zip}
                        onChange={(e) => update("zip", e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <label className="checkout-label">Country</label>
                    <select
                      className="checkout-input checkout-select"
                      value={form.country}
                      onChange={(e) => update("country", e.target.value)}
                    >
                      {["United States", "Canada", "United Kingdom", "Australia", "France", "Germany"].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 24,
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    color: "#555",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.saveInfo}
                    onChange={(e) => update("saveInfo", e.target.checked)}
                    style={{ accentColor: "#0a0a0a", width: 16, height: 16 }}
                  />
                  Save this information for next time
                </label>

                <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
                  <button
                    className="btn-secondary"
                    onClick={() => setStep(0)}
                    style={{ flex: 1, height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                  >
                    ← Back
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => setStep(2)}
                    style={{ flex: 2, height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                  >
                    Continue to Payment →
                  </button>
                </div>
              </div>
            )}

            {/* ════════ STEP 2: Payment ════════ */}
            {step === 2 && (
              <div style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
                <span className="section-label">Step 3 of 4</span>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    marginBottom: 32,
                  }}
                >
                  Payment
                </h1>

                {/* Payment method selector */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <MdOutlinePayment style={{ width: 20, height: 20, color: "#888" }} />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Payment Method
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
                  {[
                    { id: "card", label: "Credit Card", icon: "💳" },
                    { id: "paypal", label: "PayPal", icon: "🅿️" },
                    { id: "apple", label: "Apple Pay", icon: "🍎" },
                  ].map(({ id, label, icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPaymentMethod(id)}
                      className={`payment-card ${paymentMethod === id ? "selected" : ""}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        background: "none",
                        fontFamily: "'Inter', sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "1.4rem" }}>{icon}</span>
                      <span
                        style={{
                          fontSize: "0.62rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#0a0a0a",
                        }}
                      >
                        {label}
                      </span>
                    </button>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label className="checkout-label">Name on Card</label>
                      <input
                        className="checkout-input"
                        placeholder="Kim Kardashian"
                        value={form.cardName}
                        onChange={(e) => update("cardName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="checkout-label">Card Number</label>
                      <input
                        className="checkout-input"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={form.cardNumber}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                          update("cardNumber", v.replace(/(.{4})/g, "$1 ").trim());
                        }}
                      />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label className="checkout-label">Expiry Date</label>
                        <input
                          className="checkout-input"
                          placeholder="MM / YY"
                          maxLength={7}
                          value={form.expiry}
                          onChange={(e) => update("expiry", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="checkout-label">CVV</label>
                        <input
                          className="checkout-input"
                          placeholder="•••"
                          maxLength={4}
                          type="password"
                          value={form.cvv}
                          onChange={(e) => update("cvv", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod !== "card" && (
                  <div
                    style={{
                      padding: 32,
                      border: "1px solid #e8e4df",
                      textAlign: "center",
                      background: "#f9f6f2",
                    }}
                  >
                    <p style={{ fontSize: "0.82rem", color: "#555" }}>
                      You will be redirected to{" "}
                      <strong style={{ color: "#0a0a0a" }}>
                        {paymentMethod === "paypal" ? "PayPal" : "Apple Pay"}
                      </strong>{" "}
                      to complete your payment securely.
                    </p>
                  </div>
                )}

                {/* Security trust line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 20,
                    padding: 14,
                    background: "#f9f6f2",
                    border: "1px solid #e8e4df",
                  }}
                >
                  <HiOutlineLockClosed style={{ width: 14, height: 14, color: "#888", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.65rem", color: "#777", lineHeight: 1.5 }}>
                    Your payment information is encrypted and processed securely. We never store your card details.
                  </span>
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
                  <button
                    className="btn-secondary"
                    onClick={() => setStep(1)}
                    style={{ flex: 1, height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                  >
                    ← Back
                  </button>
                  <button
                    className="btn-primary"
                    onClick={() => setStep(3)}
                    style={{ flex: 2, height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                  >
                    Review Order →
                  </button>
                </div>
              </div>
            )}

            {/* ════════ STEP 3: Review & Place Order ════════ */}
            {step === 3 && (
              <div style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) both" }}>
                <span className="section-label">Step 4 of 4</span>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    marginBottom: 32,
                  }}
                >
                  Review &amp; Place Order
                </h1>

                {/* Shipping summary */}
                <div
                  style={{
                    border: "1px solid #e8e4df",
                    marginBottom: 16,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "#f9f6f2",
                      padding: "12px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      Shipping To
                    </span>
                    <button
                      onClick={() => setStep(1)}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.65rem", textDecoration: "underline", letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif" }}
                    >
                      Edit
                    </button>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, marginBottom: 2 }}>
                      {form.firstName} {form.lastName}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>
                      {form.address}{form.apt ? `, ${form.apt}` : ""}<br />
                      {form.city}{form.state ? `, ${form.state}` : ""} {form.zip}<br />
                      {form.country}
                    </p>
                    {form.email && (
                      <p style={{ fontSize: "0.75rem", color: "#888", marginTop: 8 }}>{form.email}</p>
                    )}
                  </div>
                </div>

                {/* Payment summary */}
                <div
                  style={{
                    border: "1px solid #e8e4df",
                    marginBottom: 32,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "#f9f6f2",
                      padding: "12px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      Payment
                    </span>
                    <button
                      onClick={() => setStep(2)}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.65rem", textDecoration: "underline", letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif" }}
                    >
                      Edit
                    </button>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                      {paymentMethod === "card"
                        ? form.cardNumber
                          ? `•••• •••• •••• ${form.cardNumber.replace(/\s/g, "").slice(-4)}`
                          : "Credit Card"
                        : paymentMethod === "paypal"
                        ? "PayPal"
                        : "Apple Pay"}
                    </p>
                  </div>
                </div>

                {/* Terms */}
                <p style={{ fontSize: "0.72rem", color: "#888", lineHeight: 1.7, marginBottom: 28 }}>
                  By placing your order, you agree to SKKN BY KIM&apos;s{" "}
                  <span style={{ textDecoration: "underline", cursor: "pointer" }}>Terms of Sale</span>{" "}
                  and{" "}
                  <span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>.
                </p>

                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    className="btn-secondary"
                    onClick={() => setStep(2)}
                    style={{ flex: 1, height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                  >
                    ← Back
                  </button>
                  <button
                    className="btn-primary"
                    onClick={handlePlaceOrder}
                    style={{ flex: 2, height: 54, justifyContent: "center", fontSize: "0.7rem" }}
                  >
                    Place Order · ${orderTotal}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div
            style={{
              padding: "48px 36px",
              background: "#f9f6f2",
              position: "sticky",
              top: "64px",
              height: "fit-content",
              alignSelf: "start",
            }}
          >
            <h2
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 24,
                color: "#0a0a0a",
              }}
            >
              Order Summary
            </h2>

            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 20 }}>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid #e8e4df",
                    alignItems: "center",
                  }}
                >
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        background: "#fff",
                        overflow: "hidden",
                        border: "1px solid #e8e4df",
                      }}
                    >
                      <img
                        src={urlFor(item?.image[0])}
                        alt={item.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        background: "#0a0a0a",
                        color: "#fff",
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                      }}
                    >
                      {item.quantity}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </p>
                    <span style={{ fontSize: "0.65rem", color: "#888" }}>Single</span>
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, flexShrink: 0 }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Promo code */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              <input
                className="checkout-input"
                placeholder="Promo code"
                style={{ flex: 1, height: 44, fontSize: "0.78rem" }}
              />
              <button
                className="btn-secondary"
                style={{ height: 44, padding: "0 18px", fontSize: "0.65rem", whiteSpace: "nowrap" }}
              >
                Apply
              </button>
            </div>

            {/* Totals */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="order-summary-line">
                <span style={{ color: "#666" }}>Subtotal ({totalQuantities} items)</span>
                <span style={{ fontWeight: 600 }}>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="order-summary-line">
                <span style={{ color: "#666" }}>Shipping</span>
                <span style={{ fontWeight: 600, color: shipping === 0 ? "#22a06b" : "#0a0a0a" }}>
                  {shipping === 0 ? "FREE" : `$${shipping}`}
                </span>
              </div>
              <div className="order-summary-line">
                <span style={{ color: "#666" }}>Estimated Tax</span>
                <span style={{ fontWeight: 600 }}>${tax}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 16,
                  marginTop: 4,
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Total
                </span>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
                  ${orderTotal}
                </span>
              </div>
            </div>

            {shipping > 0 && (
              <div
                style={{
                  marginTop: 16,
                  padding: "10px 14px",
                  background: "#fff7ed",
                  border: "1px solid #f5e0c0",
                  fontSize: "0.65rem",
                  color: "#7c5c1e",
                  letterSpacing: "0.04em",
                  lineHeight: 1.5,
                }}
              >
                Add ${(75 - totalPrice).toFixed(2)} more to qualify for <strong>free shipping</strong>
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <HiOutlineLockClosed style={{ width: 12, height: 12, color: "#bbb" }} />
              <span style={{ fontSize: "0.6rem", color: "#bbb", letterSpacing: "0.08em" }}>
                256-bit SSL encrypted checkout
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

// Opt out of the global Layout — checkout renders its own header
CheckoutPage.getLayout = (page) => page;
