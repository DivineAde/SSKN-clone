import React from "react";
import { AiFillStar } from "react-icons/ai";
import { urlFor } from "@/lib/client";
import { AiOutlinePlus } from "react-icons/ai";

const Rituals = ({ item: { name, image, discount, details, price } }) => {
  return (
    <>
      <div className="flex justify-between my-2">
        <div className="flex gap-x-2 md:gap-x-8">
          <div>
            <img src={urlFor(image && image[0])} className="max-h-32" />
          </div>
          <div className="w-32">
            <h2 className="uppercase">{name}</h2>
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="pt-4 flex gap-x-2">
              <span className="font-bold"> &#36;{discount}</span>
              <span className="line-through font-bold opacity-50">
                &#36;{price}
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <span className="flex items-center text-xs">
            ADD TO BAG
            <button
              type="button"
              className="border border-black p-[.5px] ml-1 mr-3 rounded-full"
            >
              <AiOutlinePlus className="w-6 h-6" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Rituals;
