// import React from 'react'
// import { TbBellRinging } from "react-icons/tb";
// import { BsArrowRightShort } from "react-icons/bs";
// import { FaChevronRight } from "react-icons/fa6";

// const Thasection = () => {

//     return (

//         <div class='mb-[50px]  '>
//             <div class=' flex  justify-around bg-[#006451] '>
//                 <div class='sm: py-[30px] md:py-[48px] sm:px-[40px] md:px-[80px] '>
//                     <h2 class='text-[#FFFFFF] font-[700]  sm:text-[28px] md:text-[48px]'>100%</h2>
//                     <p class='text-[#FFFFFF] font-[500] text-[16px]'>Board Pass Rate</p>
//                 </div>
//                 <div class='sm: py-[30px] md:py-[48px] sm:px-[40px] md:px-[80px] '>
//                     <h2 class='text-[#FFFFFF] font-[700]  sm:text-[28px] md:text-[48px]'>50+</h2>
//                     <p class='text-[#FFFFFF] font-[500] text-[16px]'>Board Pass Rate</p>
//                 </div>
//                 <div class='sm: py-[30px] md:py-[48px] sm:px-[40px] md:px-[80px] '>
//                     <h2 class='text-[#FFFFFF] font-[700] sm:text-[28px] md:text-[48px]'>1500+</h2>
//                     <p class='text-[#FFFFFF] font-[500] text-[16px]'>Board Pass Rate</p>
//                 </div>
//                 <div class='sm: py-[30px] md:py-[48px] sm:px-[40px] md:px-[80px] '>
//                     <h2 class='text-[#FFFFFF] font-[700] sm:text-[28px] md:text-[48px]'>A+</h2>
//                     <p class='text-[#FFFFFF] font-[500] text-[16px]'>Board Pass Rate</p>
//                 </div>

//             </div>

//             <div class='flex justify-center sm:flex-col md:flex-row py-[50px] px-[40px] gap-4 '>
//                 <div class='py-[40px] px-[40px] bg-[#E2E8F0] rounded-2xl'>
//                     <h1 class='font-[700] text-[30px] text-[#111827]'>Admission Open</h1>
//                     <p class='font-[400] text-[16px] text-[#4B5563]'>Give your child the best start in life with quality education and<br />
//                         proper guidance for the upcoming session.</p>
//                     <div class="flex items-center mt-[20px] gap-4 ">
//                         <div class="w-[30px] h-[30px] rounded-2xl bg-[#006451] ">
//                         </div>
//                         <div >
//                             <h2 class='font-[700] text-[16px] text-[#111827]'>Real-time Attendance Tracking</h2>
//                             <p class='font-[400] text-[14px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
//                         </div>
//                     </div>
//                     <div class="flex items-center mt-[20px] gap-4">
//                         <div class="w-[30px] h-[30px] rounded-2xl bg-[#006451] ">
//                         </div>
//                         <div >
//                             <h2 class='font-[700] text-[16px] text-[#111827]'>Real-time Attendance Tracking</h2>
//                             <p class='font-[400] text-[14px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
//                         </div>
//                     </div>
//                     <div class="flex items-center mt-[20px] gap-4">
//                         <div class="w-[30px] h-[30px] rounded-2xl bg-[#006451] ">
//                         </div>
//                         <div >
//                             <h2 class='font-[700] text-[16px] text-[#111827]'>Real-time Attendance Tracking</h2>
//                             <p class='font-[400] text-[14px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
//                         </div>
//                     </div>

//                     <div class='bg-[#006451] text-center w-[510px] mt-[32px] py-[14px] px-[168px] rounded-md'>
//                         <a href='' class=''>View All Curriculum</a>
//                     </div>
//                 </div>

//                 <div class=' '>
//                     <div class='flex  gap-2 items-center rounded-tr-2xl rounded-tl-2xl  py-[20px] pl-[18px] pr-[382px]  bg-[#006451] '>
//                         <TbBellRinging class='text-[#fff] text-[24px]' />
//                         <h2 class='font-[700] text-[24px] text-[#FFFFFF] py-[6px]'>Notice Board</h2>
//                     </div>

//                     <div class="flex items-center mt-[20px] gap-4">
//                         <div class="bg-[#E8EBEA] w-[70px] h-[80px] flex flex-col items-center justify-center rounded-xl ">
//                             <span class='font-[700]  text-[20px] text-[#006451] '>24</span>
//                             <span class='font-[500] text-[16px] text-[#006451] '>OCT</span>
//                         </div>
//                         <div >
//                             <h2 class='font-[700] text-[16px] text-[#111827]'>HSC 2025 Test Examination Routine<br/>
//                                 Published</h2>
//                             <button class=' bg-[#F59E0B]  rounded-sm font-[400] text-[14px] text-[#ffffff] py-[3px] px-[8px] mt-[4px]'>NEW</button>
//                         </div>
//                     </div>
//                     <div class="flex items-center justify-between mt-[20px] gap-4">
//                         <div class="flex items-center   gap-4">
//                             <div class="bg-[#E8EBEA] w-[70px] h-[80px] flex flex-col items-center justify-center rounded-xl ">
//                                 <span class='font-[700]  text-[20px] text-[#006451] '>24</span>
//                                 <span class='font-[500] text-[16px] text-[#006451] '>OCT</span>
//                             </div>
//                             <div >
//                                 <p class='font-[700] text-[16px] text-[#111827] '>Admission Test Results for Class VI <br />
//                                     & IX<br />
//                                 </p>
//                                 <button class=' bg-[#F59E0B]  rounded-sm font-[400] text-[14px] text-[#ffffff] py-[3px] px-[8px] mt-[4px]'>NEW</button>
//                             </div>
//                         </div>
//                         <FaChevronRight class='' />
//                     </div>

//                     <div class="flex items-center justify-between mt-[20px] gap-4">
//                         <div class="flex items-center   gap-4">
//                             <div class="bg-[#E8EBEA] w-[70px] h-[80px] flex flex-col items-center justify-center rounded-xl ">
//                                 <span class='font-[700]  text-[20px] text-[#006451] '>24</span>
//                                 <span class='font-[500] text-[16px] text-[#006451] '>OCT</span>
//                             </div>
//                             <div >
//                                 <p class='font-[700] text-[16px] text-[#111827] '>Updated Class Routine for Middle<br />
//                                     School Section</p>

//                             </div>
//                         </div>
//                         <FaChevronRight class='' />
//                     </div>

//                     <div class="flex items-center justify-between mt-[20px] gap-4">
//                         <div class="flex items-center   gap-4">
//                             <div class="bg-[#E8EBEA] w-[70px] h-[80px] flex flex-col items-center justify-center rounded-xl ">
//                                 <span class='font-[700]  text-[20px] text-[#006451] '>24</span>
//                                 <span class='font-[500] text-[16px] text-[#006451] '>OCT</span>
//                             </div>
//                             <div >
//                                 <p class='font-[700] text-[16px] text-[#111827] '>Updated Class Routine for Middle<br />
//                                     School Section</p>
//                             </div>
//                         </div>
//                         <FaChevronRight class='' />
//                     </div>

//                     <div class=' flex justify-center items-center rounded-bl-2xl rounded-br-2xl py-[16px] mt-[20px]  bg-[#F3F4F6] text-center'>

//                         <a href='' class=' flex  items-center justify-center  gap-2 font-[700]  text-[24px] rounded-bl-2xl rounded-br-2xl  bg-[#F3F4F6] text-[#006451] py-[6px] w-[100%]'>
//                             View All Notices
//                             <BsArrowRightShort class=' ' />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Thasection

import React from 'react'
import { TbBellRinging } from "react-icons/tb"
import { BsArrowRightShort } from "react-icons/bs"
import { FaChevronRight } from "react-icons/fa6"

const stats = [
  { value: '100%', label: 'Board Pass Rate' },
  { value: '50+', label: 'Expert Teachers' },
  { value: '1500+', label: 'Total Students' },
  { value: 'A+', label: 'Institution Grade' },
]

const admissionFeatures = [
  { title: 'Online Application', desc: 'Submit your application quickly through our digital portal anytime.' },
  { title: 'Merit-based Selection', desc: 'Fair and transparent admission process based on academic performance.' },
  { title: 'Scholarship Available', desc: 'Eligible students can apply for financial aid and merit scholarships.' },
]

const notices = [
  { date: '24', month: 'OCT', title: 'HSC 2025 Test Examination Routine Published', isNew: true },
  { date: '24', month: 'OCT', title: 'Admission Test Results for Class VI & IX', isNew: true },
  { date: '18', month: 'OCT', title: 'Updated Class Routine for Middle School Section', isNew: false },
  { date: '10', month: 'OCT', title: 'Annual Sports Day Schedule Announced', isNew: false },
]

const Thasection = () => {
  return (
    <div className='mb-[50px]'>

      {/* Stats Bar */}
      <div className='grid grid-cols-2 md:grid-cols-4 bg-[#006451]'>
        {stats.map((stat, i) => (
          <div key={i} className='flex flex-col items-center py-8 md:py-12 px-4 border-r border-[#ffffff22] last:border-r-0'>
            <h2 className='text-white font-[700] text-[28px] md:text-[48px]'>{stat.value}</h2>
            <p className='text-white font-[500] text-[14px] md:text-[16px] text-center'>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row justify-center py-[50px] px-[20px] md:px-[40px] gap-6'>

        {/* Left — Admission Card */}
        <div className='w-full md:w-1/2 py-[40px] px-[30px] md:px-[40px] bg-[#E2E8F0] rounded-2xl'>
          <h1 className='font-[700] text-[26px] md:text-[30px] text-[#111827]'>Admission Open</h1>
          <p className='font-[400] text-[15px] md:text-[16px] text-[#4B5563] mt-2 leading-relaxed'>
            Give your child the best start in life with quality education and
            proper guidance for the upcoming session.
          </p>

          {admissionFeatures.map((item, i) => (
            <div key={i} className='flex items-start mt-5 gap-4'>
              <div className='w-[30px] h-[30px] rounded-xl bg-[#006451] flex-shrink-0 mt-0.5' />
              <div>
                <h2 className='font-[700] text-[15px] text-[#111827]'>{item.title}</h2>
                <p className='font-[400] text-[13px] text-[#4B5563] mt-0.5 leading-relaxed'>{item.desc}</p>
              </div>
            </div>
          ))}

          
          <a  href='#'
            className='block bg-[#006451] text-white text-center w-full mt-8 py-[14px] rounded-md font-[500] text-[15px] hover:bg-[#004d3d] transition-colors'
          >
            Apply for Admission
          </a>
        </div>

        {/* Right — Notice Board */}
        <div className='w-full md:w-1/2 rounded-2xl overflow-hidden border border-[#E2E8F0]'>

          {/* Header */}
          <div className='flex items-center gap-3 py-5 px-6 bg-[#006451]'>
            <TbBellRinging className='text-white text-[24px]' />
            <h2 className='font-[700] text-[22px] md:text-[24px] text-white'>Notice Board</h2>
          </div>

          {/* Notice Items */}
          <div className='bg-white divide-y divide-[#E2E8F0]'>
            {notices.map((notice, i) => (
              <div key={i} className='flex items-center justify-between px-5 py-4 gap-4 hover:bg-[#F9FAFB] transition-colors'>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#E8EBEA] w-[64px] h-[72px] flex flex-col items-center justify-center rounded-xl flex-shrink-0'>
                    <span className='font-[700] text-[20px] text-[#006451]'>{notice.date}</span>
                    <span className='font-[500] text-[14px] text-[#006451]'>{notice.month}</span>
                  </div>
                  <div>
                    <p className='font-[600] text-[14px] md:text-[15px] text-[#111827] leading-snug'>
                      {notice.title}
                    </p>
                    {notice.isNew && (
                      <span className='inline-block bg-[#F59E0B] rounded-sm font-[500] text-[12px] text-white py-[2px] px-[8px] mt-2'>
                        NEW
                      </span>
                    )}
                  </div>
                </div>
                <FaChevronRight className='text-[#6B7280] flex-shrink-0' />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className='bg-[#F3F4F6] rounded-b-2xl'>
            
             <a href='#'
              className='flex items-center justify-center gap-2 font-[700] text-[18px] md:text-[20px] text-[#006451] py-4 hover:bg-[#E8EBEA] transition-colors rounded-b-2xl'
            >
              View All Notices
              <BsArrowRightShort className='text-[24px]' />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Thasection