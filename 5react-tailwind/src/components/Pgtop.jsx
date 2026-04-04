import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Pgtop = () => {
  return (
    <div className='flex justify-between py-6 px-10'>
      <div className='text-3xl font-semibold'>Area</div>
      <button className='flex items-center justify-center bg-[#636B2F] p-3 rounded-full text-white w-32 font-semibold hover:bg-[#869040] transition-colors duration-400 cursor-pointer'>Learn More <ArrowUpRight size={12} strokeWidth={2} /></button>
    </div>
  )
}

export default Pgtop
