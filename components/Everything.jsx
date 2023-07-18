import React, { useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { urlFor } from "@/lib/client";
import { useStateContext } from "@/context/StateContext";

const Everything = ({ product: { image, name, slug, price }, product }) => {
  const {
    qty,
    totalQuantities,
    incQty,
    decQty,
    toggleCartItemQuantity,
    onAdd,
    shopAllItems,
  } = useStateContext();
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="grid items-center gap-4 pb-2 rounded-lg ">
        <div className="flex flex-col">
          <img
            src={urlFor(image && image[0])}
            alt="acid"
            className="w-full h-full"
          />
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-[19px] uppercase ">{name}</h1>
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
          <div className="flex flex-row gap-x-2 mt-[3em] mb-7">
            <button
              type="button"
              className="uppercase border border-black rounded-full px-4 py-2 bg-black text-white"
            >
              Single
            </button>
            <button
              type="button"
              className="uppercase border border-slate-200 rounded-full px-4 py-2 bg-slate-200"
            >
              REFILL
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="border border-black py-2 px-2 hidden">
              <button
                className="mr-2 hover:bg-slate-300 rounded-full p-1"
                onClick={() => shopAllItems(product._id, "add")}
              >
                <AiOutlinePlus />
              </button>
              <span>{product.quantity}</span>
              {console.log()}
              <button
                className="ml-2 hover:bg-slate-400 rounded-full p-1"
                onClick={() => shopAllItems(product._id, "remove")}
              >
                <AiOutlineMinus />
              </button>
            </div>
            <button
              type="button"
              className="py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out w-full uppercase"
              onClick={() => onAdd(product, qty)}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
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

export default Everything;
