import React from "react";
import Image from "next/image";

const Era = () => {
  return (
    <>
      <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row w-full px-[25px] mt-24">
        <div className="w-full md:w-1/2">
          <Image src="/era.webp" width={1000} height={1000} alt="era/img" />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl">A NEW ERA OF SKINCARE</h1>
          <p className="pt-4">
            Introducing an innovative line of uncompromising skincare developed
            by Kim Kardashian. Through a visionary nine-product ritual, SKKN BY
            KIM delivers nourishment, renewal, and an indulgent at-home
            experience.
          </p>
          <button
            type="button"
            className="px-3.5 py-2 mt-6 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out text-sm font-medium"
          >
            READ MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Era;
