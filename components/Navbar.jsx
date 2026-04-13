import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import Cart from "./Cart";
import { RxHamburgerMenu } from "react-icons/rx";

import { FaUserCircle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";



const navLinks = [
  { label: "Shop All", href: "/collections/shop-all" },
  { label: "Skincare", href: "/collections/skincare" },
  { label: "Complete Collection", href: "/collections/complete" },
  { label: "Bundles", href: "/collections/bundles" },
  { label: "Refills", href: "/collections/refills" },
  { label: "Vanity Bag", href: "/collections/vanity-bag" },
  { label: "Home Accessories", href: "/collections/home-accessories" },
  { label: "Subscription", href: "/collections/subscription" },
];

const Navbar = ({ products }) => {
  const { data: session } = useSession();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [skincareOpen, setSkincareOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSearch) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [showSearch]);

  useEffect(() => {
    document.body.style.overflow = (isOpen || showCart) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, showCart]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* ── Announcement Bar ── */}
        <div
          style={{
            background: "#0a0a0a",
            color: "#fff",
            textAlign: "center",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            padding: "8px 16px",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Complimentary shipping on orders over $75 · Clean. Vegan. Science-backed.
        </div>

        {/* ── Main Nav Row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "64px",
          }}
        >
          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ padding: "8px", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose style={{ width: 22, height: 22 }} />
            ) : (
              <RxHamburgerMenu style={{ width: 22, height: 22 }} />
            )}
          </button>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="33"
              viewBox="0 0 75 36"
              fill="none"
              aria-labelledby="navbar-logo-title"
              role="img"
            >
              <title id="navbar-logo-title">SKKN BY KIM</title>
              <path d="M51.0516 34.2981L49.6088 28.0389H47.1993V36H48.7422V30.6152C48.7422 30.46 48.7402 30.2424 48.7363 29.9643C48.7324 29.6852 48.7315 29.4695 48.7315 29.3182L50.2228 36H51.8328L53.3348 29.3182C53.3348 29.4695 53.3329 29.6852 53.33 29.9643C53.3261 30.2424 53.3241 30.46 53.3241 30.6152V36H54.867V28.0389H52.4837L51.0516 34.2981ZM45.6778 28.0389H44.0319V36H45.6778V28.0389ZM36.2408 36H37.8701V33.3369L38.6678 32.5249L41.1104 36H43.2401L39.8211 31.3129L43.0739 28.0389H40.9345L37.8721 31.3188V28.0389H36.2408V36ZM28.9491 31.5061L27.3042 28.0389H25.3522L28.0941 33.0148V36H29.7506V33.0148L32.4011 28.0389H30.525L28.9491 31.5061ZM21.907 28.0389H18.077V36H21.6476C22.0508 36 22.4239 35.9639 22.7678 35.8917C23.1118 35.8195 23.4101 35.6867 23.6636 35.4916C23.8881 35.3227 24.0756 35.1139 24.2252 34.8651C24.4603 34.4913 24.5779 34.0678 24.5779 33.5964C24.5779 33.1397 24.4749 32.7504 24.2689 32.4303C24.063 32.1092 23.7579 31.876 23.3527 31.7286C23.6189 31.592 23.821 31.4407 23.9571 31.2748C24.2019 30.9792 24.3243 30.5888 24.3243 30.1028C24.3243 29.6315 24.2029 29.2265 23.9609 28.8879C23.5577 28.3365 22.8737 28.0535 21.907 28.0389ZM21.6078 32.4947C21.9478 32.4986 22.2121 32.5435 22.4006 32.6303C22.7367 32.7855 22.9058 33.0695 22.9058 33.4842C22.9058 33.9741 22.7319 34.3049 22.385 34.4786C22.1936 34.5723 21.9255 34.6191 21.5825 34.6191H19.6578V32.4966H21.6078V32.4947ZM21.3814 29.4217C21.7603 29.4217 22.0732 29.4636 22.318 29.5466C22.6017 29.6647 22.7435 29.9096 22.7435 30.2804C22.7435 30.6152 22.6367 30.8484 22.422 30.9792C22.2072 31.1109 21.9284 31.1763 21.5835 31.1763H19.6568V29.4217H21.3814Z" fill="black" />
              <path d="M14.7331 22.7904H0.544086L0.0903572 17.6242L9.5594 18.0809C9.56037 12.3682 0 14.7073 0 3.49458V0H13.5837L14.0374 4.71052H5.17271C5.17271 10.4232 14.7331 8.08311 14.7331 19.2958V22.7904Z" fill="black" />
              <path d="M28.5301 0L25.0809 9.42006H23.3564V0H16.5494V0.212739L18.3644 11.0615L16.5494 22.5474V22.7895H23.3564V12.7322H25.0809L28.5301 22.7895H35.6391V22.5777L28.8021 11.0615L34.7317 0.212739V0H28.5301Z" fill="black" />
              <path d="M49.133 0L45.6839 9.42006H43.9593V0H37.1524V0.212739L38.9673 11.0615L37.1524 22.5474V22.7895H43.9593V12.7322H45.6839L49.133 22.7895H56.243V22.5777L49.405 11.0615L55.3346 0.212739V0H49.133Z" fill="black" />
              <path d="M57.7553 0.303495V0H63.6548C66.1362 3.64682 67.921 7.20191 69.1005 10.878V0H75V0.303495L73.1851 11.0605L75 22.486V22.7895H69.1005C69.1005 18.4439 67.5275 13.5216 63.6548 7.53468V22.7895H57.7553V22.486L59.5703 11.0605L57.7553 0.303495Z" fill="black" />
            </svg>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button
              onClick={() => setShowSearch(!showSearch)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
              aria-label="Search"
            >
              {showSearch ? (
                <AiOutlineClose style={{ width: 22, height: 22 }} />
              ) : (
                <CiSearch style={{ width: 24, height: 24 }} />
              )}
            </button>

            {session ? (
              <span onClick={() => signIn("google")} style={{ cursor: "pointer" }}>
                <img
                  src={session?.user?.image}
                  style={{ width: 30, height: 30, borderRadius: "50%", objectFit: "cover" }}
                  alt="user avatar"
                />
              </span>
            ) : (
              <button
                type="button"
                onClick={() => signIn("google")}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}
                aria-label="Sign in"
              >
                <FaUserCircle style={{ width: 22, height: 22 }} />
              </button>
            )}

            <button
              type="button"
              style={{ position: "relative", background: "none", border: "none", cursor: "pointer", display: "flex" }}
              aria-label="Shopping bag"
            >
              <HiOutlineShoppingBag
                style={{ width: 24, height: 24 }}
                onClick={() => setShowCart(true)}
              />
              {totalQuantities > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -8,
                    background: "#0a0a0a",
                    color: "#fff",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    fontSize: "0.65rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {totalQuantities}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── Search Overlay ── */}
        {showSearch && (
          <div className="search-overlay">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                height: 64,
                gap: 12,
              }}
            >
              <CiSearch style={{ width: 20, height: 20, color: "#888", flexShrink: 0 }} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products…"
                style={{
                  flex: 1,
                  height: "100%",
                  border: "none",
                  outline: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  letterSpacing: "0.02em",
                  background: "transparent",
                  color: "#0a0a0a",
                }}
              />
              <button
                onClick={() => setShowSearch(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Cart Drawer ── */}
      {showCart && <Cart />}

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "#fff",
            zIndex: 8888,
            overflowY: "auto",
            animation: "slideInRight 0.35s cubic-bezier(0.16,1,0.3,1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "24px",
              borderBottom: "1px solid #e8e4df",
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
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <AiOutlineClose style={{ width: 22, height: 22 }} />
            </button>
          </div>

          <ul style={{ padding: "16px 0" }}>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 24px",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    borderBottom: "1px solid #f0ede8",
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "auto", padding: "24px", borderTop: "1px solid #e8e4df" }}>
            {session ? (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={session?.user?.image}
                  style={{ width: 36, height: 36, borderRadius: "50%" }}
                  alt="avatar"
                />
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{session?.user?.name}</p>
                  <p style={{ fontSize: "0.7rem", color: "#888" }}>{session?.user?.email}</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => { signIn("google"); setIsOpen(false); }}
                className="btn-primary w-full"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
