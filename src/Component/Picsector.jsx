// import React from 'react'
// import play from './image/play.png';
// import reacharge from './image/reacharge.png';
// import read from './image/read.png';
// import prize from './image/prize.png';
// import dance from './image/dance.png';

// const Picsector = () => {
//     return (

        
//             <div class='bg-[#E8EBEA] md:p-[50px] sm:p-[25px] ' >
//                 <div class='text-center'>
//                     <p class='text-[#006451] font-[700] text-[16px] '> CAMPUS LIFE</p>
//                     <h1 class='text-[#006451] font-[700] text-[32px] text-[#111827]'>Activities & Gallery</h1>
//                 </div>

//                 <div class=' flex sm:flex-col md:flex-row gap-4 md:pt-[120px] sm:pt-[60px] sm:px-[60px] md:px-[120px]  pb-[40px]'>
//                     <div class='grid grid-cols-2  gap-2 '>
//                         <img src={play} alt='' />
//                         <img src={reacharge} alt='' />
//                         <img src={read} alt='' />
//                         <img src={prize} alt='' />
//                     </div>
//                     <img src={dance} class='sm:w-[100%] md:w-[50%]' alt='' />
//                 </div>
//                 <div class='text-center '>
//                     <a href='' class=' py-[12px] px-[20px]  rounded-md font-[500] text-[16px]  bg-[#006451] text-[#FFFFFF]'>View Full Gallery</a>
//                 </div>






//             </div>

            

        
//     )
// }
// export default Picsector

import React from 'react'
import play from './image/play.png'
import reacharge from './image/reacharge.png'
import read from './image/read.png'
import prize from './image/prize.png'
import dance from './image/dance.png'

const Picsector = () => {
  return (
    <div className='bg-[#E8EBEA] px-6 md:px-[50px] py-[40px] md:py-[50px]'>

      {/* Header */}
      <div className='text-center mb-10 md:mb-14'>
        <p className='text-[#006451] font-[700] text-[14px] tracking-widest uppercase'>
          CAMPUS LIFE
        </p>
        <h1 className='text-[#111827] font-[700] text-[26px] md:text-[32px] mt-1'>
          Activities & Gallery
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className='flex flex-col md:flex-row gap-4 max-w-5xl mx-auto'>

        {/* Left — 2x2 Grid */}
        <div className='grid grid-cols-2 gap-3 w-full md:w-1/2'>
          <img
            src={play} alt='Play'
            className='w-full h-[160px] md:h-[200px] object-cover rounded-xl'
          />
          <img
            src={reacharge} alt='Recharge'
            className='w-full h-[160px] md:h-[200px] object-cover rounded-xl'
          />
          <img
            src={read} alt='Reading'
            className='w-full h-[160px] md:h-[200px] object-cover rounded-xl'
          />
          <img
            src={prize} alt='Prize'
            className='w-full h-[160px] md:h-[200px] object-cover rounded-xl'
          />
        </div>

        {/* Right — Full Height Image */}
        <div className='w-full md:w-1/2'>
          <img
            src={dance} alt='Dance'
            className='w-full h-[336px] md:h-[415px] object-cover rounded-xl'
          />
        </div>

      </div>

      {/* Button */}
      <div className='text-center mt-10'>
        
         <a href='#'
          className='inline-block py-[12px] px-[28px] rounded-md font-[500] text-[16px] bg-[#006451] text-white hover:bg-[#004d3d] transition-colors'
        >
          View Full Gallery
        </a>
      </div>

    </div>
  )
}

export default Picsector