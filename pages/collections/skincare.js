import React from 'react';
import { client } from '@/lib/client';
import Everything from '@/components/Everything';


const Skincare = ({ products, }) => {
  return (
    <div className='mt-40 px-4'>
      <h3>Home / Skincare</h3>
      <h1 className='uppercase font-semibold text-3xl my-6'>Skincare</h1>
      <p className='max-w-[375px] text-[0.9em]'>Meticulously crafted to support the skin's natural renewal abilities, SKKN BY KIM's visionary nine-product ritual delivers moisture, nourishment, and an indulgent at-home experience.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
      {products.map((product) => (
        <Everything key={product._id} product={product} />
      ))}
     </div>
    </div>
    
  )
}

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

export default Skincare