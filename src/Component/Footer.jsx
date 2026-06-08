// import React from 'react'
// import Parent from './image/Parent.png';
// import apple from './image/apple.png';
// import google from './image/google.png';
// // import mobil from './image/mobil.png';
// import iphn from './image/iphn.png';
// import logovic from './image/logovic.png';

// import { IoMdArrowForward } from "react-icons/io";
// import { IoMdArrowBack } from "react-icons/io";

// const Footer = () => {

//     return (

//         <div>
//             <div class='bg-[#FFFFFF] px-[40px] flex sm:flex-col md:flex-row sm:gap-12 md:gap:30 items-center justify-center py-16'>
//                 <div>
//                     <h1 class='font-[700] text-[32px] '>Words from our Community</h1>
//                     <p class='font-[400] text-[18px] py-4'>Listen to what our parents and alumni have to say about their<br />
//                         experience at Academy Excellence.</p>

//                     <div class='flex gap-2'>
//                         <IoMdArrowForward class='bg-[#006451] rounded-l p-[4px]' /><IoMdArrowBack />
//                     </div>
//                 </div>
//                 <div class='bg-[#FFFFFF] shadow-2xl p-[40px]'>
//                     <p class='font-[400] text-[18px] py-4'>"Choosing Elite Academy for our son was the best<br />decision.The blend of rigorous academics and personal <br /> care is unparalleled. We've seen tremendous growth in his<br />
//                         confidence and curiosity."</p>
//                     <div class='flex gap-4'>
//                         <img src={Parent} class='rounded-4xl' alt='' />
//                         <div>
//                             <h1>M. Rahman</h1>
//                             <p>Parent of Grade 9 Student</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class='bg-[#E8EBEA] flex gap-6 items-center  justify-evenly py-16 flex sm:flex-col md:flex-row sm:gap-12 '>
//                 <div>
//                     <h1 class='font-[700] text-[32px] '>Words from our Community</h1>
//                     <p class='font-[400] text-[18px] py-4'>Students and parents can easily access attendance updates via SMS, submit <br />and track applications online, view performance insights, and stay connected <br /> through seamless parent–teacher communication — all in one mobile app.</p>
//                     <div class='flex gap-2'>
//                         <img src={apple} class='rounded-xl' alt='' />
//                         <img src={google} class='rounded-xl' alt='' />
//                     </div>
//                 </div>

//                 <div class='relative'>
//                     <img src={iphn} class=' border-4   border-t-[#000] rounded-xl' alt='' />
//                     <div class='bg-[#FFFFFF] absolute top-49 -left-10 flex gap-2 p-[8px] rounded-md border-1 border-[#D9DFDD]'>
//                         <img src={logovic} class='bg-[#38BDF833] p-[6px] rounded-l ' alt='' />
//                         <h4 class='font-[500] text-[18px]'>Apply & Track</h4>
//                     </div>
//                     <div class='bg-[#FFFFFF] absolute top-95 -left-20 flex gap-2 p-[8px] rounded-md border-1 border-[#D9DFDD]'>
//                         <img src={logovic} class='bg-[#F43F5E33] text-[#F43F5E] p-[6px] rounded-l ' alt='' />
//                         <h4 class='font-[500] text-[18px]'>Parent Connect</h4>
//                     </div>
//                     <div class='bg-[#FFFFFF] absolute top-73 -right-8 flex gap-2 p-[8px] rounded-md border-1 border-[#D9DFDD]'>
//                         <img src={logovic} class='bg-[#F59E0B] text-[18px] font-[500] p-[6px] rounded-l ' alt='' />
//                         <h4 class='font-[500] text-[18px]'>Insights</h4>
//                     </div>
//                     <div class='bg-[#FFFFFF] absolute top-22 -right-12 flex gap-2 p-[8px] rounded-md border-1 border-[#D9DFDD]'>
//                         <img src={logovic} class='bg-[#38BDF833] text-[18px] font-[500] p-[6px] rounded-l ' alt='' />
//                         <h4 class='font-[500] text-[18px]'>SMS Alerts</h4>
//                     </div>
//                 </div>
//             </div>      
//         </div>
//     )
// }

// export default Footer


import React from 'react'
import Parent from './image/Parent.png';
import apple from './image/apple.png';
import google from './image/google.png';
import iphn from './image/iphn.png';
import logovic from './image/logovic.png';
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const Footer = () => {
  return (
    <div>

      {/* Section 1 — Testimonial */}
      <div className='bg-[#FFFFFF] px-6 md:px-[40px] flex flex-col md:flex-row gap-12 md:gap-8 items-center justify-center py-16'>
        <div className='w-full md:w-1/2'>
          <h1 className='font-[700] text-[28px] md:text-[32px]'>Words from our Community</h1>
          <p className='font-[400] text-[16px] md:text-[18px] py-4'>
            Listen to what our parents and alumni have to say about their
            experience at Academy Excellence.
          </p>
          <div className='flex gap-2'>
            <div className='bg-[#006451] rounded p-[4px] text-white cursor-pointer'>
              <IoMdArrowForward />
            </div>
            <div className='border rounded p-[4px] cursor-pointer'>
              <IoMdArrowBack />
            </div>
          </div>
        </div>

        <div className='bg-[#FFFFFF] shadow-2xl p-6 md:p-[40px] w-full md:w-1/2 rounded-xl'>
          <p className='font-[400] text-[16px] md:text-[18px] py-4'>
            "Choosing Elite Academy for our son was the best decision. The blend
            of rigorous academics and personal care is unparalleled. We've seen
            tremendous growth in his confidence and curiosity."
          </p>
          <div className='flex gap-4 items-center'>
            <img src={Parent} className='rounded-full w-12 h-12 object-cover' alt='Parent' />
            <div>
              <h1 className='font-[600] text-[16px]'>M. Rahman</h1>
              <p className='text-[14px] text-[#4B5563]'>Parent of Grade 9 Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Mobile App */}
      <div className='bg-[#E8EBEA] flex flex-col md:flex-row gap-12 items-center justify-evenly py-16 px-6 md:px-[40px]'>
        <div className='w-full md:w-1/2'>
          <h1 className='font-[700] text-[28px] md:text-[32px]'>Stay Connected, Anytime</h1>
          <p className='font-[400] text-[16px] md:text-[18px] py-4'>
            Students and parents can easily access attendance updates via SMS, submit
            and track applications online, view performance insights, and stay connected
            through seamless parent–teacher communication — all in one mobile app.
          </p>
          <div className='flex gap-3 flex-wrap'>
            <img src={apple} className='rounded-xl h-12 object-contain' alt='App Store' />
            <img src={google} className='rounded-xl h-12 object-contain' alt='Google Play' />
          </div>
        </div>

        <div className='relative w-[200px] md:w-[240px] flex-shrink-0'>
          <img src={iphn} className='border-4 border-[#000] rounded-xl w-full' alt='Mobile App' />

          <div className='bg-[#FFFFFF] absolute top-[196px] -left-10 flex gap-2 p-[8px] rounded-md border border-[#D9DFDD] shadow-sm'>
            <img src={logovic} className='bg-[#38BDF833] p-[6px] rounded-md' alt='' />
            <h4 className='font-[500] text-[14px] whitespace-nowrap'>Apply & Track</h4>
          </div>

          <div className='bg-[#FFFFFF] absolute top-[380px] -left-20 flex gap-2 p-[8px] rounded-md border border-[#D9DFDD] shadow-sm'>
            <img src={logovic} className='bg-[#F43F5E33] p-[6px] rounded-md' alt='' />
            <h4 className='font-[500] text-[14px] whitespace-nowrap'>Parent Connect</h4>
          </div>

          <div className='bg-[#FFFFFF] absolute top-[292px] -right-8 flex gap-2 p-[8px] rounded-md border border-[#D9DFDD] shadow-sm'>
            <img src={logovic} className='bg-[#F59E0B33] p-[6px] rounded-md' alt='' />
            <h4 className='font-[500] text-[14px] whitespace-nowrap'>Insights</h4>
          </div>

          <div className='bg-[#FFFFFF] absolute top-[88px] -right-12 flex gap-2 p-[8px] rounded-md border border-[#D9DFDD] shadow-sm'>
            <img src={logovic} className='bg-[#38BDF833] p-[6px] rounded-md' alt='' />
            <h4 className='font-[500] text-[14px] whitespace-nowrap'>SMS Alerts</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer