// import React from 'react'
// import jurnyimg from './../Component/image/Expansion.png'
// import Vintage from './../Component/image/Vintage School.png'
// import Modern from './../Component/image/Modern Campus.png'
// const Journey = () => {

//   return (

//     <div class='bg-[#E8EBEA] sm:flex-col'>
//       <div class=' text-center flex justify-center '>
//         <h1 class='text-[#006451] text-[32px] font-[500]'>THE JOURNEY</h1>
//         <p class='text-[#001A10]  text-[16px] font-[400]'>A Century of Legacy</p>
//         <div class=' flex gap-8 mx-auto '>
//           <div class='  text-center md:text-right  mt-[50px] '>
//             <p class="">1985</p>
//             <h2 class="">Foundation</h2>
//             <p class="">
//               Scholastica Academy was founded with a cohort of just 20 students,<br />
//               dedicated to classical education and civic duty.
//             </p>
//             <img class='mt-[50px]' src={jurnyimg} alt='' />
//             <div class="mt-[50px]">
//               <p class="">2026</p>
//               <h2 class="">The Modern Era</h2>
//               <p class="">
//                 Today, Scholastica leads with state-of-the-art digital integration
//                 and a<br /> global exchange network spanning six continents.
//               </p>
//             </div>
//           </div>
//           <div class='border-1 border-[#006451] mt-[50px] relative'>
//             <div class="absolute -left-1 bottom-41  w-2 h-2 rounded-full border-[3px] border-[#006451]"></div>
//             <div class="absolute -left-1 top-32 w-2 h-2 rounded-full border-[3px] border-[#006451]"></div>
//           </div>
//           <div class=" text-center md:text-left  mt-[50px]">
//             <img class='mr-[30px] mb-[50px]' src={Vintage} alt='' />
//             <div class="">
//               <p class="font-playfair text-lg font-semibold text-gold mb-1">2004</p>
//               <h2 class="font-playfair text-2xl font-bold text-dark-brown mb-3">Golden Jubilee Expansion</h2>
//               <p class="text-sm text-mid-brown leading-relaxed font-light">
//                 Marking 50 years, the Academy inaugurated the Science Wing and the <br />
//                 Fine Arts Center, doubling its campus footprint.
//               </p>
//             </div>
//             <img class='mr-[30px] mt-[50px]' src={Modern} alt='' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Journey

import React from 'react'
import jurnyimg from './../Component/image/Expansion.png'
import Vintage from './../Component/image/Vintage School.png'
import Modern from './../Component/image/Modern Campus.png'

const Journey = () => {
  return (
    <div className='bg-[#E8EBEA] py-16 px-4'>

      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-[#006451] text-[32px] font-[500]'>THE JOURNEY</h1>
        <p className='text-[#001A10] text-[16px] font-[400]'>A Century of Legacy</p>
      </div>

      {/* Timeline Content */}
      <div className='flex gap-8 max-w-5xl mx-auto'>

        {/* Left Column */}
        <div className='flex-1 text-right mt-[50px]'>
          <p className='text-[#006451] font-semibold'>1985</p>
          <h2 className='text-[#001A10] text-2xl font-bold mb-2'>Foundation</h2>
          <p className='text-[#4B5563] text-sm leading-relaxed'>
            Scholastica Academy was founded with a cohort of just 20 students,
            dedicated to classical education and civic duty.
          </p>
          <img className='mt-[50px] ml-auto rounded-xl' src={jurnyimg} alt='Expansion' />

          <div className='mt-[50px]'>
            <p className='text-[#006451] font-semibold'>2026</p>
            <h2 className='text-[#001A10] text-2xl font-bold mb-2'>The Modern Era</h2>
            <p className='text-[#4B5563] text-sm leading-relaxed'>
              Today, Scholastica leads with state-of-the-art digital integration
              and a global exchange network spanning six continents.
            </p>
          </div>
        </div>

        {/* Center Timeline Line */}
        <div className='border-l-2 border-[#006451] mt-[50px] relative'>
          <div className='absolute -left-[5px] top-[120px] w-[10px] h-[10px] rounded-full border-[3px] border-[#006451] bg-white'></div>
          <div className='absolute -left-[5px] bottom-[160px] w-[10px] h-[10px] rounded-full border-[3px] border-[#006451] bg-white'></div>
        </div>

        {/* Right Column */}
        <div className='flex-1 text-left mt-[50px]'>
          <img className='mb-[50px] rounded-xl' src={Vintage} alt='Vintage School' />

          <div className='mb-[50px]'>
            <p className='text-[#006451] font-semibold text-lg mb-1'>2004</p>
            <h2 className='text-[#001A10] text-2xl font-bold mb-2'>Golden Jubilee Expansion</h2>
            <p className='text-[#4B5563] text-sm leading-relaxed'>
              Marking 50 years, the Academy inaugurated the Science Wing and the
              Fine Arts Center, doubling its campus footprint.
            </p>
          </div>

          <img className='rounded-xl' src={Modern} alt='Modern Campus' />
        </div>

      </div>
    </div>
  )
}

export default Journey