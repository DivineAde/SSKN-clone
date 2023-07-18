import React from "react";
import { client } from "@/lib/client";
import Everything from "@/components/Everything";

const ShopAll = ({ products, heroData, discoverData, packData }) => {
  return (
    <div className=" mt-52 px-4">
      <h3>Home   /   <span className="uppercase">shop all</span></h3>
      <h1 className="uppercase text-2xl mt-6 mb-14">Shop all</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {products.map((product) => (
          <Everything key={product._id} product={product} className="" />
        ))}
      </div>
    </div>
  );
};

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

export default ShopAll;
