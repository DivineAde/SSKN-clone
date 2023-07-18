import React from "react";

const Pack = ({ packData }) => {
  return (
    <div className="flex gap-6 overflow-x-scroll scrollbar-hidden scroll-smooth mt-[24px] px-[24px] w-full">
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0;
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: transparent;
        }
      `}</style>
      <div>
        <img
          className="min-w-[300px] max-h-[502px]"
          src="/exfoliator pack.webp"
          alt="A descriptive text for the image"
        />
        <h1 className="text-2xl uppercase mt-4">{packData.name}</h1>
      </div>

      <div>
        <img
          className="min-w-[300px] max-h-[502px]"
          src="/oil_drops pack.webp"
          alt="A descriptive text for the image"
        />
        <h1 className="text-2xl uppercase mt-4">{packData.name_two}</h1>
      </div>

      <div>
        <img
          className="min-w-[300px] max-h-[502px]"
          src="/cleanser pack.webp"
          alt="A descriptive text for the image"
        />
        <h1 className="text-2xl uppercase mt-4">{packData.name_three}</h1>
      </div>

      <div>
        <img
          className="min-w-[300px] max-h-[502px]"
          src="/eye_cream pack.webp"
          alt="A descriptive text for the image"
        />
        <h1 className="text-2xl uppercase mt-4">{packData.name_four}</h1>
      </div>
    </div>
  );
};

export default Pack;
