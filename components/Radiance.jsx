import React from "react";

const Radiance = () => {
  return (
    <>
      <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row-reverse mt-24 mb-16 px-[25px] w-full">
        <div className="w-full md:w-1/2">
          <video muted autoPlay loop controls>
            <source src="/Skin-care.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className=" w-full md:w-1/2">
          <h1 className="text-2xl">Radiance, bottled</h1>
          <p className="">
            With a focus on quality and efficacy, SKKN BY KIM's science-backed,
            clean formulas deliver targeted rejuvenation. Crafted for conscious
            consumers, each product is cruelty-free, vegan, and formulated
            without gluten, sulfates, BHT, and PEGs.
          </p>
          <button
            type="button"
            className="px-3.5 py-2 mt-6 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out text-sm font-medium uppercase"
          >
            Shop skincare
          </button>
        </div>
      </div>
    </>
  );
};

export default Radiance;
