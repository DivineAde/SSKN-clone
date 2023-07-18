import React from "react";
import Image from "next/image";

const FooterBanner = () => {
  return (
    <>
      <div className="w-full mt-[5%] px-[25px] flex flex-col md:flex-row gap-x-6 gap-y-4">
        <div className="w-full md:w-1/2">
          <Image src="/Natural accent.webp" width={1000} height={800} />
          <h1 className="text-2xl uppercase py-2">NEUTRAL ACCENTS</h1>
          <p className="py-2">
            Transform your home into a sanctuary with sculptural decor
          </p>
          <button className="px-3.5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out text-sm font-medium uppercase">
            HOME ACCESSORIES
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <Image src="/RRR.webp" width={1000} height={800} />
          <h1 className="text-2xl uppercase py-2">Reduce, reuse, refill</h1>
          <p className="py-2">
            Eco-friendly Refills extend the life cycle of our products
          </p>
          <button className="px-3.5 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out text-sm font-medium uppercase">
            REFILL
          </button>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
