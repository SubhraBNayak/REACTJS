import React from 'react'

const Page3top = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 pl-10'>
        <hr class="border-t border-gray-200" />
        <div className='font-serif text-5xl pt-15 pb-6'>See the Big Picture</div>
        <p className='text-sm tracking-wider pt-8 text-gray-500 pb-10'>Area turns your data into clear, vibrant visuals that show you exactly what's happening in<br></br> each region</p>
        <hr class=" border-t border-gray-200" />
        <div className='flex'>
          <div className='text-lg font-bold tracking-wider pt-5 pb-5 text-gray-400'>01</div>
          <div className='pt-5 pb-5 pl-5'>Spot Trends in Seconds: No more digging through numbers.</div>
        </div>
        <hr class="border-t border-gray-200" />
        <div className='flex'>
          <div className='text-lg font-bold tracking-wider pt-5 pb-5 text-gray-400'>02</div>
          <div className='pt-5 pb-5 pl-5'>Get Everyone on the Same Page: Share easy-to-understand reports with your team</div>
        </div>
        <hr class=" border-t border-gray-200" />
        <div className='flex'>
          <div className='text-lg font-bold tracking-wider pt-5 pb-5 text-gray-400'>03</div>
          <div className='pt-5 pb-5 pl-5'>Make Presentations Pop: Interaction maps and dashboards keep your audience <br></br>engaged.</div>
        </div>
        <hr class="border-t border-gray-200" />
        <div className='flex'>
          <div className='text-lg font-bold tracking-wider pt-5 pb-5 text-gray-400'>04</div>
          <div className='pt-5 pb-5 pl-5'>Your Global Snapshot: Get a quick, clear overview of your entire operation.</div>
        </div>
        <div className='pt-8'>
          <button className='bg-[#E1E8D1] w-36 h-12 rounded-full font-semibold text-[#12170c] hover:bg-[#71895c] transition-colors duration-600 cursor-pointer hover:text-white'>Discover More</button>
        </div>
      </div>
      <div>
          <div>
            <img className='w-180 h-170 rounded-4xl' src="https://plugin-value-scrum.figma.site/_assets/v11/8c5a21adadebacbd69375684275fb89819b4d967.png?w=1024" alt="image" />
          </div>
      </div>
    </div>
  )
}

export default Page3top
