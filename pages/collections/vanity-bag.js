import React from 'react'
import Link from 'next/link'

const VanityBag = () => {
  return (
    <div className=' w-full h-screen bg-black text-slate-50 relative'>
      <div className='flex flex-col items-center justify-center bundle text-center '>
        <h1 className='text-5xl uppercase'>Under Construction</h1>
        <Link href={"/"}>
         <button className='w-52 py-4 bg-sky-600 mt-6 rounded-lg uppercase'>Go back home</button>
        </Link>
      </div>
    </div>
  )
}

export default VanityBag