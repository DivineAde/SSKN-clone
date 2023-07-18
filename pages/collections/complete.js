import React from "react";
import { client } from "@/lib/client";
import AllSet from "@/components/Complete";

const Set = ({ discoverData, setData }) => {
  return (
    <div>
      <AllSet
        setData={setData.length && setData[0]}
        discoverData={discoverData.length}
      />
    </div>
  );
};

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  const heroData = await client.fetch(`*[_type == "hero"]`);

  const discoverData = await client.fetch(`*[_type == "rituals"]`);

  const packData = await client.fetch(`*[_type == "pack"]`);

  const setData = await client.fetch(`*[_type == "set"]`);

  return {
    props: {
      products,
      heroData,
      discoverData,
      packData,
      setData,
    },
  };
}

export default Set;
