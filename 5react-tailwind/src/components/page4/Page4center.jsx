import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const Page4center = () => {
  return (
    <div>
      <div className='pt-30 pb-10'>
        <img className='mx-10 w-360 h-200 rounded-4xl' src="https://plugin-value-scrum.figma.site/_assets/v11/de5a74711b655d5394631256a2e65f4f4b7e3f42.png?w=1024" alt="image" />
      </div>
      <hr class="mx-10 border-t border-gray-200" />
      <div className='flex flex-col items-center justify-center'>
        <div className='text-5xl pt-20 pb-10 font-serif'>Connect with us</div>
        <div className='text-gray-500 pb-10'>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</div>
        <div className='pb-20'>
            <button className='flex justify-center items-center bg-[#324c1b] w-210 h-12 rounded-full font-semibold text-white hover:bg-[#E1E8D1] transition-colors duration-600 cursor-pointer hover:text-black'>Learn More <ArrowUpRight size={12} strokeWidth={2} /></button>
        </div>
      </div>
      <hr class="mx-10 border-t border-gray-200" />
      <div>
        <div className='flex font-bold text-sm gap-6.5 pt-10 pl-10'>
            <div className='hover:text-gray-500 cursor-pointer'>Benefits</div>
            <div className='hover:text-gray-500 cursor-pointer'>Specifications</div>
            <div className='hover:text-gray-500 cursor-pointer'>How to</div>
        </div>
        <div className='flex justify-between'>
            <div className='flex p-10'>
                <img className='w-7 h-17 mt-12'  src="https://plugin-value-scrum.figma.site/_assets/v11/090b80a21b62ba18e35a0eff8aff6562be1d8d0e.svg" alt="img" />
                <div className='text-sm text-gray-600 pl-10 pt-25'>© Area.2025</div>
            </div>
            <div className='text-sm text-gray-600 pl-10 pt-36 pr-20'>All rights reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Page4center
