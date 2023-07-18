import React, { useState } from "react";
import { Inter } from "next/font/google";
import { client } from "@/lib/client";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import Cart from "./Cart";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const Navbar = ({ products }) => {
  const { data: session } = useSession();

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!session) {
    return (
      <nav className={`fixed top-0 left-0 p-[1em] bg-white w-full z-[9999]`}>
        <div className="flex flex-row justify-between items-center">
          <button
            className="block lg:opacity-0 z-50 transition-opacity duration-500"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu
              className={`${
                isOpen
                  ? "hidden"
                  : "block w-9 h-9 transition-opacity duration-300 z-20"
              }`}
            />
            <AiOutlineClose
              className={`${isOpen ? "block w-9 h-9 z-20" : "hidden"}`}
            />
          </button>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="36"
              viewBox="0 0 75 36"
              fill="none"
              aria-labelledby="title"
              role="img"
            >
              <title id="title">SKKN BY KIM</title>
              <path
                d="M51.0516 34.2981L49.6088 28.0389H47.1993V36H48.7422V30.6152C48.7422 30.46 48.7402 30.2424 48.7363 29.9643C48.7324 29.6852 48.7315 29.4695 48.7315 29.3182L50.2228 36H51.8328L53.3348 29.3182C53.3348 29.4695 53.3329 29.6852 53.33 29.9643C53.3261 30.2424 53.3241 30.46 53.3241 30.6152V36H54.867V28.0389H52.4837L51.0516 34.2981ZM45.6778 28.0389H44.0319V36H45.6778V28.0389ZM36.2408 36H37.8701V33.3369L38.6678 32.5249L41.1104 36H43.2401L39.8211 31.3129L43.0739 28.0389H40.9345L37.8721 31.3188V28.0389H36.2408V36ZM28.9491 31.5061L27.3042 28.0389H25.3522L28.0941 33.0148V36H29.7506V33.0148L32.4011 28.0389H30.525L28.9491 31.5061ZM21.907 28.0389H18.077V36H21.6476C22.0508 36 22.4239 35.9639 22.7678 35.8917C23.1118 35.8195 23.4101 35.6867 23.6636 35.4916C23.8881 35.3227 24.0756 35.1139 24.2252 34.8651C24.4603 34.4913 24.5779 34.0678 24.5779 33.5964C24.5779 33.1397 24.4749 32.7504 24.2689 32.4303C24.063 32.1092 23.7579 31.876 23.3527 31.7286C23.6189 31.592 23.821 31.4407 23.9571 31.2748C24.2019 30.9792 24.3243 30.5888 24.3243 30.1028C24.3243 29.6315 24.2029 29.2265 23.9609 28.8879C23.5577 28.3365 22.8737 28.0535 21.907 28.0389ZM21.6078 32.4947C21.9478 32.4986 22.2121 32.5435 22.4006 32.6303C22.7367 32.7855 22.9058 33.0695 22.9058 33.4842C22.9058 33.9741 22.7319 34.3049 22.385 34.4786C22.1936 34.5723 21.9255 34.6191 21.5825 34.6191H19.6578V32.4966H21.6078V32.4947ZM21.3814 29.4217C21.7603 29.4217 22.0732 29.4636 22.318 29.5466C22.6017 29.6647 22.7435 29.9096 22.7435 30.2804C22.7435 30.6152 22.6367 30.8484 22.422 30.9792C22.2072 31.1109 21.9284 31.1763 21.5835 31.1763H19.6568V29.4217H21.3814Z"
                fill="black"
              />
              <path
                d="M14.7331 22.7904H0.544086L0.0903572 17.6242L9.5594 18.0809C9.56037 12.3682 0 14.7073 0 3.49458V0H13.5837L14.0374 4.71052H5.17271C5.17271 10.4232 14.7331 8.08311 14.7331 19.2958V22.7904Z"
                fill="black"
              />
              <path
                d="M28.5301 0L25.0809 9.42006H23.3564V0H16.5494V0.212739L18.3644 11.0615L16.5494 22.5474V22.7895H23.3564V12.7322H25.0809L28.5301 22.7895H35.6391V22.5777L28.8021 11.0615L34.7317 0.212739V0H28.5301Z"
                fill="black"
              />
              <path
                d="M49.133 0L45.6839 9.42006H43.9593V0H37.1524V0.212739L38.9673 11.0615L37.1524 22.5474V22.7895H43.9593V12.7322H45.6839L49.133 22.7895H56.243V22.5777L49.405 11.0615L55.3346 0.212739V0H49.133Z"
                fill="black"
              />
              <path
                d="M57.7553 0.303495V0H63.6548C66.1362 3.64682 67.921 7.20191 69.1005 10.878V0H75V0.303495L73.1851 11.0605L75 22.486V22.7895H69.1005C69.1005 18.4439 67.5275 13.5216 63.6548 7.53468V22.7895H57.7553V22.486L59.5703 11.0605L57.7553 0.303495Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className="flex gap-x-3">
            <button className="search-icon" onClick={toggleSearch}>
              <CiSearch className="w-7 h-7 text-black cursor-pointer" />
            </button>
            {showSearch && (
              <div className="absolute top-[100%] left-0 w-full h-[100vh] bg-white">
                <div className="flex items-center px-6 bg-slate-200">
                  <CiSearch className="w-6 h-6" />
                  <input
                    type="text"
                    className={`search-input w-full h-[80px] border border-slate-200 rounded-lg py-2 px-4 outline-none focus:border-slate-200 bg-slate-200  ${
                      showSearch
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
                    } transition-all duration-500 ease-in-out`}
                    placeholder="Search..."
                  />
                  <AiOutlineClose
                    className="flex float-right cursor-pointer"
                    onClick={closeSearch}
                  />
                </div>
                <button></button>
              </div>
            )}
            <button type="button" onClick={() => signIn("google")}>
              <AiOutlineUser className="w-7 h-7 text-black cursor-pointer" />
            </button>
            <button type="button" className="relative">
              <HiOutlineShoppingBag
                className="w-7 h-7 text-black cursor-pointer transition ease-in-out duration-300"
                onClick={() => setShowCart(true)}
              />
              <span className="absolute top-4 bg-black w-[18px] h-[18px] rounded-full text-white text-center text-[12px]">
                {totalQuantities}
              </span>
            </button>
          </div>
        </div>

        <div className="pt-4 hidden lg:block">
          <ul className="flex justify-around items-center gap-x-3 text-[.8em] text-black">
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href={`/collections/shop-all`}>SHOP ALL</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/skincare">SKINCARE</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/complete">THE COMPLETE COLLECTION</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/bundles">BUNDLES</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/refills">REFILLS</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/vanity-bag">VANITY BAG</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/home-accessories">HOME ACCESSORIES</Link>
            </li>
            <li className="text-black hover:text-slate-400 transition-colors duration-300">
              <Link href="/collections/subscription">SUBSCRIPTION</Link>
            </li>
          </ul>
        </div>

        {showCart && <Cart />}
        {isOpen && (
          <div
            className={`absolute top-0 left-0 bg-white w-full h-screen z-10 lg:hidden overflow-y-auto transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="mt-24 px-6 transition-opacity duration-500">
              <Link href={"/collections/shop-all"} onClick={closeMenu}>
                <li className="text-lg">SHOP ALL</li>
              </Link>
              <span className="flex items-center justify-between">
                <Link
                  href={"/collections/skincare"}
                  onClick={closeMenu}
                  className=""
                >
                  <li className="text-lg">SKINCARE</li>
                </Link>
                <MdOutlineKeyboardArrowDown
                  onClick={toggleRotate}
                  className={`w-8 h-8 ${
                    rotate
                      ? " rotate-180 transition duration-300 ease-in-out"
                      : "transition duration-300 ease-in-out"
                  }`}
                />
              </span>
              <ul
                className={`${
                  rotate
                    ? "block transition duration-300 ease-in-out uppercase text-xs"
                    : "hidden transition duration-300 ease-in-out"
                }`}
              >
                <li>CLEANSER</li>
                <li>toner</li>
                <li>Exfoliator</li>
                <li>Hyaluronic acid</li>
                <li>vitamin c8 serum</li>
                <li>face cream</li>
                <li>eye cream</li>
                <li>oil drops</li>
                <li>night oil</li>
                <li>View all skincare</li>
              </ul>
              <Link href={`/collections/complete`} onClick={closeMenu}>
                <li className="text-lg">THE COMPLETE COLLECTION</li>
              </Link>
              <Link href={"/collections/refills"} onClick={closeMenu}>
                <li className="text-lg">REFILLS</li>
              </Link>
              <Link href={"/collections/vanity-bag"} onClick={closeMenu}>
                <li className="text-lg">VANITY BAG</li>
              </Link>
              <Link href={"/collections/home-accessories"} onClick={closeMenu}>
                <li className="text-lg">HOME ACCESSORIES</li>
              </Link>
              <Link href={"/collections/subscription"} onClick={closeMenu}>
                <li className="text-lg">SUBSCRIPTIONS</li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 p-[1em] bg-white w-full z-[9999]`}>
      <div className="flex flex-row justify-between items-center">
        <button
          className="block lg:opacity-0 z-50 transition-opacity duration-500"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu
            className={`${
              isOpen
                ? "hidden"
                : "block w-9 h-9 transition-opacity duration-300 z-20"
            }`}
          />
          <AiOutlineClose
            className={`${isOpen ? "block w-9 h-9 z-20" : "hidden"}`}
          />
        </button>
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="36"
            viewBox="0 0 75 36"
            fill="none"
            aria-labelledby="title"
            role="img"
          >
            <title id="title">SKKN BY KIM</title>
            <path
              d="M51.0516 34.2981L49.6088 28.0389H47.1993V36H48.7422V30.6152C48.7422 30.46 48.7402 30.2424 48.7363 29.9643C48.7324 29.6852 48.7315 29.4695 48.7315 29.3182L50.2228 36H51.8328L53.3348 29.3182C53.3348 29.4695 53.3329 29.6852 53.33 29.9643C53.3261 30.2424 53.3241 30.46 53.3241 30.6152V36H54.867V28.0389H52.4837L51.0516 34.2981ZM45.6778 28.0389H44.0319V36H45.6778V28.0389ZM36.2408 36H37.8701V33.3369L38.6678 32.5249L41.1104 36H43.2401L39.8211 31.3129L43.0739 28.0389H40.9345L37.8721 31.3188V28.0389H36.2408V36ZM28.9491 31.5061L27.3042 28.0389H25.3522L28.0941 33.0148V36H29.7506V33.0148L32.4011 28.0389H30.525L28.9491 31.5061ZM21.907 28.0389H18.077V36H21.6476C22.0508 36 22.4239 35.9639 22.7678 35.8917C23.1118 35.8195 23.4101 35.6867 23.6636 35.4916C23.8881 35.3227 24.0756 35.1139 24.2252 34.8651C24.4603 34.4913 24.5779 34.0678 24.5779 33.5964C24.5779 33.1397 24.4749 32.7504 24.2689 32.4303C24.063 32.1092 23.7579 31.876 23.3527 31.7286C23.6189 31.592 23.821 31.4407 23.9571 31.2748C24.2019 30.9792 24.3243 30.5888 24.3243 30.1028C24.3243 29.6315 24.2029 29.2265 23.9609 28.8879C23.5577 28.3365 22.8737 28.0535 21.907 28.0389ZM21.6078 32.4947C21.9478 32.4986 22.2121 32.5435 22.4006 32.6303C22.7367 32.7855 22.9058 33.0695 22.9058 33.4842C22.9058 33.9741 22.7319 34.3049 22.385 34.4786C22.1936 34.5723 21.9255 34.6191 21.5825 34.6191H19.6578V32.4966H21.6078V32.4947ZM21.3814 29.4217C21.7603 29.4217 22.0732 29.4636 22.318 29.5466C22.6017 29.6647 22.7435 29.9096 22.7435 30.2804C22.7435 30.6152 22.6367 30.8484 22.422 30.9792C22.2072 31.1109 21.9284 31.1763 21.5835 31.1763H19.6568V29.4217H21.3814Z"
              fill="black"
            />
            <path
              d="M14.7331 22.7904H0.544086L0.0903572 17.6242L9.5594 18.0809C9.56037 12.3682 0 14.7073 0 3.49458V0H13.5837L14.0374 4.71052H5.17271C5.17271 10.4232 14.7331 8.08311 14.7331 19.2958V22.7904Z"
              fill="black"
            />
            <path
              d="M28.5301 0L25.0809 9.42006H23.3564V0H16.5494V0.212739L18.3644 11.0615L16.5494 22.5474V22.7895H23.3564V12.7322H25.0809L28.5301 22.7895H35.6391V22.5777L28.8021 11.0615L34.7317 0.212739V0H28.5301Z"
              fill="black"
            />
            <path
              d="M49.133 0L45.6839 9.42006H43.9593V0H37.1524V0.212739L38.9673 11.0615L37.1524 22.5474V22.7895H43.9593V12.7322H45.6839L49.133 22.7895H56.243V22.5777L49.405 11.0615L55.3346 0.212739V0H49.133Z"
              fill="black"
            />
            <path
              d="M57.7553 0.303495V0H63.6548C66.1362 3.64682 67.921 7.20191 69.1005 10.878V0H75V0.303495L73.1851 11.0605L75 22.486V22.7895H69.1005C69.1005 18.4439 67.5275 13.5216 63.6548 7.53468V22.7895H57.7553V22.486L59.5703 11.0605L57.7553 0.303495Z"
              fill="black"
            />
          </svg>
        </Link>
        <div className="flex gap-x-3">
          <button className="search-icon" onClick={toggleSearch}>
            <CiSearch className="w-7 h-7 text-black cursor-pointer" />
          </button>
          {showSearch && (
            <div className="absolute top-[100%] left-0 w-full h-[100vh] bg-white">
              <div className="flex items-center px-6 bg-slate-200">
                <CiSearch className="w-6 h-6" />
                <input
                  type="text"
                  className={`search-input w-full h-[80px] border border-slate-200 rounded-lg py-2 px-4 outline-none focus:border-slate-200 bg-slate-200  ${
                    showSearch
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  } transition-all duration-500 ease-in-out`}
                  placeholder="Search..."
                />
                <AiOutlineClose
                  className="flex float-right cursor-pointer"
                  onClick={closeSearch}
                />
              </div>
              <button></button>
            </div>
          )}
          <span onClick={() => signIn("google")}>
            <img
              src={session?.user?.image}
              className="w-8 h-8 rounded-full cursor-pointer"
              alt=""
            />
          </span>
          <button type="button" className="relative">
            <HiOutlineShoppingBag
              className="w-7 h-7 text-black cursor-pointer transition ease-in-out duration-300"
              onClick={() => setShowCart(true)}
            />
            <span className="absolute top-4 bg-black w-[18px] h-[18px] rounded-full text-white text-center text-[12px]">
              {totalQuantities}
            </span>
          </button>
        </div>
      </div>

      <div className="pt-4 hidden lg:block">
        <ul className="flex justify-around items-center gap-x-3 text-[.8em] text-black">
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href={`/collections/shop-all`}>SHOP ALL</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/skincare">SKINCARE</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/complete">THE COMPLETE COLLECTION</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/bundles">BUNDLES</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/refills">REFILLS</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/vanity-bag">VANITY BAG</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/home-accessories">HOME ACCESSORIES</Link>
          </li>
          <li className="text-black hover:text-slate-400 transition-colors duration-300">
            <Link href="/collections/subscription">SUBSCRIPTION</Link>
          </li>
        </ul>
      </div>

      {showCart && <Cart />}
      {isOpen && (
        <div
          className={`absolute top-0 left-0 bg-white w-full h-screen z-10 lg:hidden overflow-y-auto transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="mt-24 px-6 transition-opacity duration-500">
            <Link href={"/collections/shop-all"} onClick={closeMenu}>
              <li className="text-lg">SHOP ALL</li>
            </Link>
            <span className="flex items-center justify-between">
              <Link
                href={"/collections/skincare"}
                onClick={closeMenu}
                className=""
              >
                <li className="text-lg">SKINCARE</li>
              </Link>
              <MdOutlineKeyboardArrowDown
                onClick={toggleRotate}
                className={`w-8 h-8 ${
                  rotate
                    ? " rotate-180 transition duration-300 ease-in-out"
                    : "transition duration-300 ease-in-out"
                }`}
              />
            </span>
            <ul
              className={`${
                rotate
                  ? "block transition duration-300 ease-in-out uppercase text-xs"
                  : "hidden transition duration-300 ease-in-out"
              }`}
            >
              <li>CLEANSER</li>
              <li>toner</li>
              <li>Exfoliator</li>
              <li>Hyaluronic acid</li>
              <li>vitamin c8 serum</li>
              <li>face cream</li>
              <li>eye cream</li>
              <li>oil drops</li>
              <li>night oil</li>
              <li>View all skincare</li>
            </ul>
            <Link href={`/collections/complete`} onClick={closeMenu}>
              <li className="text-lg">THE COMPLETE COLLECTION</li>
            </Link>
            <Link href={"/collections/refills"} onClick={closeMenu}>
              <li className="text-lg">REFILLS</li>
            </Link>
            <Link href={"/collections/vanity-bag"} onClick={closeMenu}>
              <li className="text-lg">VANITY BAG</li>
            </Link>
            <Link href={"/collections/home-accessories"} onClick={closeMenu}>
              <li className="text-lg">HOME ACCESSORIES</li>
            </Link>
            <Link href={"/collections/subscription"} onClick={closeMenu}>
              <li className="text-lg">SUBSCRIPTIONS</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  const heroData = await client.fetch(`*[_type == "hero"]`);

  return {
    props: {
      products,
      heroData,
    },
  };
}

export default Navbar;
