import React from 'react'

const Pgnav = () => {
  return (
    /*
        w-fit css=>	width: fit-content;	Shrinks the element's width to match its internal content rather than taking up the full width of the screen.
        mx-auto	css => margin-left: auto; margin-right: auto;	Distributes available horizontal space equally on both sides, which centers the element.
    */
    <div className='sticky top-5 z-20 -mt-20 mx-auto w-fit'>
    <div className='flex items-center justify-center gap-6 font-bold text-sm p-5 w-105 rounded-full bg-white/30 backdrop-blur-md'>
      <div className='hover:text-gray-600 cursor-pointer transition-colors duration-400'>Benefits</div>
      <div className='hover:text-gray-600 cursor-pointer transition-colors duration-400'>Specifications</div>
      <div className='hover:text-gray-600 cursor-pointer transition-colors duration-400'>How-to</div>
      <div className='hover:text-gray-600 cursor-pointer transition-colors duration-400'>Contact Us</div>
    </div>
    </div>
  )
}

export default Pgnav
