import React from 'react';
import { IoIosSearch } from 'react-icons/io';
export default function NavSeaarch() {
  return (
    <div className='nav-search-bar relative w-full flex justify-center items-center px-3'>
      <input placeholder='@Search' className='bg-gray-100 outline-none h-1/2 rounded-full w-full px-5 py-2 overflow-hidden' type="text" />
      <button className='absolute right-3 hover:bg-primary w-20 h-1/2 flex hover:text-white justify-center items-center  rounded-full'>
        <IoIosSearch className='text-xl font-bold' />
        </button>
    </div>
  )
}
