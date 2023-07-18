import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { urlFor } from "@/lib/client";
import "@splidejs/splide/dist/css/splide.min.css";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import Link from "next/link";

const TopRated = ({ product: { image, name, slug, price } }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const options = {
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    rewind: true,
    type: "loop",
    pagination: false,
    breakpoints: {
      768: {
        perPage: 2,
        gap: "0.5rem",
      },
      500: {
        perPage: 1,
        gap: "0.5rem",
      },
    },
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentIndex(0);
  };

  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-50 ring-1 ring-slate-50">
          <div className="flex flex-col">
            <img
              src={urlFor(image && image[currentIndex])}
              alt="acid"
              className="w-full h-full"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            />
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase">{name}</h1>
                <p className="text-2xl font-medium">&#36;{price}</p>
              </div>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
              </div>
            </div>
            <button
              type="button"
              className="py-2 border border-black mt-[8em] bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </Link>
    </>
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

export default TopRated;
