import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsCheckCircleFill } from "react-icons/bs";

export default function OrderSuccess() {
  const router = useRouter();
  const email = router.query.email || "your inbox";

  return (
    <>
      <Head>
        <title>Order Confirmed – SKKN BY KIM</title>
        <meta
          name="description"
          content="Your SKKN BY KIM order has been confirmed."
        />
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
        <BsCheckCircleFill
          style={{ width: 56, height: 56, color: "#0a0a0a", marginBottom: 24 }}
        />
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
          <strong style={{ color: "#0a0a0a" }}>{email}</strong>. Your order is
          being carefully prepared.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <button className="btn-primary">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
}

// Opt out of the global Layout (matches the checkout page)
OrderSuccess.getLayout = (page) => page;