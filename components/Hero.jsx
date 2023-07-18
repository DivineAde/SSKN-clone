import React, { useState, useEffect } from "react";
import { urlFor } from "@/lib/client";

export const Hero = ({ heroData }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [smallActiveIndex, setSmallActiveIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmallActiveIndex((prevIndex) => (prevIndex === 4 ? 2 : 4));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 1 ? 3 : 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <img
          src={urlFor(heroData.image && heroData.image[activeIndex]).url()}
          className="hidden md:block mt-12 w-full"
        />
        <img
          src={urlFor(heroData.image && heroData.image[smallActiveIndex]).url()}
          className="block md:hidden mt-12 w-full"
        />
        <div className="absolute bottom-[15%] left-[4%]">
          <h1 className="text-slate-50 text-3xl ">{heroData.name}</h1>
          <p className="text-white text-xl">{heroData.details}</p>
          <button className="px-3.5 py-2 mt-4 bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out uppercase">
            {heroData.choice}
          </button>
        </div>
      </div>
    </>
  );
};
