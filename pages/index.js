import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopRated from "@/components/TopRated";
import { client } from "@/lib/client";
import { Inter } from "next/font/google";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { urlFor } from "@/lib/client";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsStarHalf } from "react-icons/bs";
import Rituals from "@/components/Rituals";
import Era from "@/components/Era";
import Radiance from "@/components/Radiance";
import Pack from "@/components/Pack";
import FooterBanner from "@/components/FooterBanner";
import Link from "next/link";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });
//className={`${inter.className} mb-3 text-2xl font-semibold`}

export default function Home({ products, heroData, discoverData, packData }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
        <main className="">
          <Hero heroData={heroData.length && heroData[0]} />
          <div className="px-[25px] mt-10">
            <div className="flex justify-between">
              <h1 className=" text-xl md:text-3xl mb-2">TOP RATED</h1>
              <Link href={"/collections/shop-all"}>
                <button
                  className={`flex justify-between items-center gap-3 text-lg md:text-3xl`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <HiOutlineArrowNarrowRight
                    className={`relative transition-transform duration-300 ${
                      hovered ? "translate-x-3" : "translate-x-0"
                    }`}
                  />
                  Shop all
                </button>
              </Link>
            </div>
            <Carousel itemClass="trial" draggable responsive={responsive}>
              {products?.map((product) => (
                <TopRated key={product._id} product={product} className="" />
              ))}
            </Carousel>
          </div>

          {/* Discover your Rituals */}
          <div className="px-[25px] w-full flex flex-col gap-x-8 lg:flex-row mt-24">
            <div className="w-full lg:w-3/5">
              <img src="/watch now.webp" alt="watch_now/img" />
            </div>

            <div className="w-full lg:w-2/5">
              <h1 className="text-2xl uppercase font-bold mt-4 md:mt-0">
                Discover your rituals
              </h1>
              <div className="mt-8 overflow-auto lg:max-h-[40vh]">
                {discoverData.map((item) => (
                  <Rituals key={item._id} item={item} />
                ))}
              </div>
              <Link href={"/collections/shop-all"}>
                <button className="w-full py-4 border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out mt-[10%]">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <Era />
          <Radiance />
          <Pack packData={packData.length && packData[0]} />
          <FooterBanner />
        </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  const heroData = await client.fetch(`*[_type == "hero"]`);

  const discoverData = await client.fetch(`*[_type == "rituals"]`);

  const packData = await client.fetch(`*[_type == "pack"]`);

  return {
    props: {
      products,
      heroData,
      discoverData,
      packData,
    },
  };
}
