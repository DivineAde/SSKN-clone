import Link from 'next/link'
import React from 'react'

const Bundles = () => {
  return (
    <div className=' w-full h-screen bg-black text-slate-50 relative'>
      <div className='flex flex-col items-center justify-center bundle text-center'>
        <h1 className='text-5xl uppercase'>Under Construction</h1>
        <Link href={"/"}>
         <button className='w-52 py-4 contruction-btn mt-6 rounded-lg uppercase'>Go back home</button>
        </Link>
      </div>
    </div>
  )
}

export default Bundles
