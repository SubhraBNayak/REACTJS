import React from 'react'

const Page4top = () => {
  return (
    <div>
        <div className='flex justify-between pt-15 pb-15'>
          <div className='text-5xl font-serif pl-10'>Map Your Success</div>
          <div className='pr-10'>
            <button className='bg-[#E1E8D1] w-36 h-12 rounded-full font-semibold text-[#12170c] hover:bg-[#71895c] transition-colors duration-600 cursor-pointer hover:text-white'>Discover More</button>
          </div>
        </div>
        <hr class="mx-10 border-t border-gray-400" />
        <div className='flex pl-10 justify-around'>
            <div className='flex flex-col'>
                <div className='text-7xl tracking-widest text-gray-500 pt-15 pb-15'>01</div>
                <div className='font-serif pb-6'>Get Started</div>
                <div className='text-sm text-gray-500'>With our intuitive setup you're up and running in minutes.</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-7xl text-gray-500 tracking-widest pt-15 pb-15'>02</div>
                <div className='font-serif pb-6'>Customize and Configure</div>
                <div className='text-sm text-gray-500'>Adapt Area to your specific requirements and preferences.</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-7xl text-gray-500 tracking-widest pt-15 pb-15'>03</div>
                <div className='font-serif pb-6'>Grow Your Business</div>
                <div className='text-sm text-gray-500'>Make informed decisions to exceed your goals</div>
            </div>
        </div>
    </div>

  )
}

export default Page4top
