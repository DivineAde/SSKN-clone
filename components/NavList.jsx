import React from "react";

const NavList = ({ product: { name } }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
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

export default NavList;
