// import React from 'react'
// import ganlink from './../Component/image/know.png'
// import officeimg from './../Component/image/office.png'


// const Herosection = () => {

//     return (
//         <container>
//             <div class='flex sm:flex-col md:flex-row  justify-around bg-[#006451] h-[96px] items-center sm:relative md:relative '>
//                 <h2 class='bg-[#7CBB4D] py-[12px] px-[20px] rounded-md text-[#FFFFFF] '>Portal LogIn</h2>
//                 <ul class='flex  gap-4 sm:flex-none '>
//                     <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Teachers</a>
//                     <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Gallery</a>
//                     <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Notice</a>
//                     <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Admission</a>
//                 </ul>
//                 <img src={ganlink} alt='' />
//             </div>
//             <img src={officeimg} alt='' />

//             <div class=' md:w-[70%] sm:w-[90%] bg-[#fff] shadow-md rounded-xl md:gap-4  md:p-[15px] sm:p-[25px] flex absolute md:-bottom-36 sm:-bottom-26 md:right-50 sm:right-30 md:left-60 sm:left-12'>
//                 <a href="#" class="flex items-center gap-4 ">
//                     <div class="w-20 h-16  rounded-xl bg-[#00A878] flex items-center justify-center">
//                     </div>
//                     <div >
//                         <h class="font-[500] text-xl ">Online Admission</h>
//                         <p class=" font-[400] text-[12px] text-[#43474E]">Fast tracking entry</p>
//                     </div>
//                 </a>
//                 <div class="w-px bg-[#E2E8F0]"></div>
//                 <a href="#" class="flex items-center gap-4 ">
//                     <div class="w-20 h-16  rounded-xl bg-[#F43F5E] flex items-center justify-center  shadow-md">
//                     </div>
//                     <div>
//                         <p class="font-[500] text-xl">Download Prospectus</p>
//                         <p class="font-[400] text-[12px] text-[#43474E]">View school brochure</p>
//                     </div>
//                 </a>
//                 <div class=" w-px bg-[#E2E8F0]"></div>

//                 <a href="#" class="flex items-center gap-4  flex-1 group ">
//                     <div class="w-20 h-16 sm:w-2px sm:h-2px  rounded-xl bg-[#F59E0B] flex items-center justify-center shadow-md">

//                     </div>
//                     <div>
//                         <p class="font-[500] text-xl">Check Results</p>
//                         <p class="font-[400] text-[12px] text-[#43474E]">Academic performance</p>
//                     </div>
//                 </a>
//             </div >
//         </container >


//     )
// }
// export default Herosection

import React from 'react'
import ganlink from './../Component/image/know.png'
import officeimg from './../Component/image/office.png'

const Herosection = () => {
  return (
    <section className='relative'>

      {/* Top Bar */}
      <div className='flex flex-col md:flex-row justify-around bg-[#006451] py-4 md:h-[96px] items-center gap-4 px-5'>
        <h2 className='bg-[#7CBB4D] py-[12px] px-[20px] rounded-md text-[#FFFFFF] font-[500]'>
          Portal LogIn
        </h2>

        <ul className='flex flex-wrap justify-center gap-4'>
          <li><a href='#' className='text-[#FFFFFF] font-[500] text-lg hover:underline'>Teachers</a></li>
          <li><a href='#' className='text-[#FFFFFF] font-[500] text-lg hover:underline'>Gallery</a></li>
          <li><a href='#' className='text-[#FFFFFF] font-[500] text-lg hover:underline'>Notice</a></li>
          <li><a href='#' className='text-[#FFFFFF] font-[500] text-lg hover:underline'>Admission</a></li>
        </ul>

        <img src={ganlink} alt='know' className='h-10 object-contain' />
      </div>

      {/* Hero Image */}
      <img
        src={officeimg}
        alt='Office'
        className='w-full h-[300px] md:h-[500px] object-cover'
      />

      {/* Floating Card */}
      <div className='
        w-[90%] md:w-[75%] bg-white shadow-lg rounded-xl
        flex flex-col md:flex-row
        gap-4 p-5 md:p-6
        absolute -bottom-24 md:-bottom-16
        left-1/2 -translate-x-1/2
      '>

        {/* Online Admission */}
        <a href="#" className="flex items-center gap-4 flex-1">
          <div className="w-16 h-14 md:w-20 md:h-16 rounded-xl bg-[#00A878] flex items-center justify-center flex-shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
          </div>
          <div>
            <p className="font-[500] text-[16px] md:text-xl text-[#111827]">Online Admission</p>
            <p className="font-[400] text-[12px] text-[#43474E]">Fast tracking entry</p>
          </div>
        </a>

        {/* Divider */}
        <div className="hidden md:block w-px bg-[#E2E8F0]"></div>
       

        {/* Download Prospectus */}
        <a href="#" className="flex items-center gap-4 flex-1">
          <div className="w-16 h-14 md:w-20 md:h-16 rounded-xl bg-[#F43F5E] flex items-center justify-center flex-shrink-0 shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <div>
            <p className="font-[500] text-[16px] md:text-xl text-[#111827]">Download Prospectus</p>
            <p className="font-[400] text-[12px] text-[#43474E]">View school brochure</p>
          </div>
        </a>

        {/* Divider */}
        <div className="hidden md:block w-px bg-[#E2E8F0]"></div>
        

        {/* Check Results */}
        <a href="#" className="flex items-center gap-4 flex-1">
          <div className="w-16 h-14 md:w-20 md:h-16 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0 shadow-md">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <div>
            <p className="font-[500] text-[16px] md:text-xl text-[#111827]">Check Results</p>
            <p className="font-[400] text-[12px] text-[#43474E]">Academic performance</p>
          </div>
        </a>
      </div>

    </section>
  )
}

export default Herosection