// import React from 'react'
// import campas from './../Component/image/campas.png'
// const Main = () => {

//     return (

        
//             <div class='flex justify-center sm:flex-col md:flex-row  xl:flex-row sm:gap-2 md:gap-4 sm:mt-25  md:mt-50 px-20'>
//                 <img src={campas} alt='' />

//                 <div class='px-6'>
//                     <p class='text-[#006451] font-[700] text-sm'>ABOUT OUR INSTITUTION</p>

//                     <h2 class='text-[#111827] font-[700] text-xl py-4' >A Legacy of Excellence in Education</h2>

//                     <p class='text-[#111827] font-[400] text-[18px] py-4'>Founded with a vision to provide quality education, National <br />Schola rs School & College has been a beacon of hope and <br />excellence. We blend traditional values with modern educational </p>


//                     <div class='grid grid-flow-col grid-rows-2 gap-6 py-6'>
                       
//                         <div class='border-l-4 border-[#006451] px-2'>
                            
//                             <h2 class='text-[#111827] font-[700] text-[32px]'>98%</h2>
//                             <p class='text-[#4B5563] font-[500] text-[16px]'>Board Exam Pass Rate</p>
//                         </div>
                       
//                         <div class='border-l-4 border-[#006451] px-2'>
//                              <div class="w-px bg-[#E2E8F0]"></div>
//                             <h2 class='text-[#111827] font-[700] text-[32px]'>120+</h2>
//                             <p class='text-[#4B5563] font-[500] text-[16px]' >Board Exam Pass Rate</p>
//                         </div>
                      
//                         <div  class='border-l-4 border-[#F59E0B] px-2'>                           
//                             <h2 class='text-[#111827] font-[700] text-[32px]'>A+</h2>
//                             <p class='text-[#4B5563] font-[500] text-[16px]'>Board Exam Pass Rate</p>
//                         </div>
                        
//                         <div class='border-l-4 border-[#006451] px-2'>                           
//                             <h2 class='text-[#111827] font-[700] text-[32px]'>25+</h2>
//                             <p class='text-[#4B5563] font-[500] text-[16px]'>Board Exam Pass Rate</p>
//                         </div>
//                     </div>
//                     <button class='py-4 px-6 bg-[#006451] mt-[40px]'>Discover Our History</button>

//                 </div>
//             </div>

//     )
// }
// export default Main

import React from 'react'
import campas from './../Component/image/campas.png'

const Main = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-16 md:mt-24 px-6 md:px-16 py-12'>

      {/* Image */}
      <div className='w-full md:w-1/2'>
        <img
          src={campas}
          alt='Campus'
          className='w-full h-auto rounded-xl object-cover'
        />
      </div>

      {/* Content */}
      <div className='w-full md:w-1/2 px-0 md:px-6'>

        <p className='text-[#006451] font-[700] text-sm tracking-wide'>
          ABOUT OUR INSTITUTION
        </p>

        <h2 className='text-[#111827] font-[700] text-2xl md:text-3xl py-3'>
          A Legacy of Excellence in Education
        </h2>

        <p className='text-[#4B5563] font-[400] text-[16px] md:text-[18px] leading-relaxed'>
          Founded with a vision to provide quality education, National
          Scholars School & College has been a beacon of hope and
          excellence. We blend traditional values with modern educational
          approaches.
        </p>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 gap-6 py-6'>

          <div className='border-l-4 border-[#006451] px-3'>
            <h2 className='text-[#111827] font-[700] text-[28px] md:text-[32px]'>98%</h2>
            <p className='text-[#4B5563] font-[500] text-[14px] md:text-[16px]'>Board Exam Pass Rate</p>
          </div>

          <div className='border-l-4 border-[#006451] px-3'>
            <h2 className='text-[#111827] font-[700] text-[28px] md:text-[32px]'>120+</h2>
            <p className='text-[#4B5563] font-[500] text-[14px] md:text-[16px]'>Qualified Teachers</p>
          </div>

          <div className='border-l-4 border-[#F59E0B] px-3'>
            <h2 className='text-[#111827] font-[700] text-[28px] md:text-[32px]'>A+</h2>
            <p className='text-[#4B5563] font-[500] text-[14px] md:text-[16px]'>Institution Grade</p>
          </div>

          <div className='border-l-4 border-[#006451] px-3'>
            <h2 className='text-[#111827] font-[700] text-[28px] md:text-[32px]'>25+</h2>
            <p className='text-[#4B5563] font-[500] text-[14px] md:text-[16px]'>Years of Excellence</p>
          </div>

        </div>

        <button className='py-3 px-6 bg-[#006451] text-white font-[500] text-[16px] rounded-md hover:bg-[#004d3d] transition-colors mt-4'>
          Discover Our History
        </button>

      </div>
    </section>
  )
}

export default Main