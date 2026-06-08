// import React from 'react'
// import officeimg from  './../Component/image/office.png';
// import Student from './../Component/image/Student life.png';

// const Section = () => {


//   return (
//     <div class='flex  sm:flex-col md:flex-row xl:flex-row sm:gap-2 md:gap-4 xl:gap-6 mt-20 justify-center'>

//       <div class=''>
//         <div>
//           <p class='text-[#006451] font-[400] text-[16px]'>OUR HERITAGE</p>
//           <h2 class='text-[#111827] font-[700] text-[32px]  py-2' >Nurturing Intellectual Growth and</h2>
//           <p class='text-[#4B5563] font-[400] text-[18px] text-[#4B5563] '>Founded in 1999, Academy Excellence has consistently stood as <br />a beacon of quality education in Bangladesh.</p>
//         </div>

//         <div class="flex items-center mt-[20px] gap-2">
//           <div class="w-[40px] h-[40px] rounded-xl bg-[#34D399] ">
//           </div>
//           <div >
//             <h2 class='font-[500] text-[16px] text-[#111827]'>Real-time Attendance Tracking</h2>
//             <p class='font-[400] text-[12px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
//           </div>
//         </div>
//         <div class="flex items-center mt-[20px] gap-2">
//           <div class="w-[40px] h-[40px] rounded-xl bg-[#38BDF8] ">
//           </div>
//           <div >
//             <h2 class='font-[500] text-[16px] text-[#111827]'>GPA 5.0 / CGPA 4.0 Grading</h2>
//             <p class='font-[400] text-[12px] text-[#4B5563]'>Automated calculations following national and international standards..</p>
//           </div>
//         </div>
//         <div class="flex items-center mt-[20px] gap-2">
//           <div class="w-[40px] h-[40px] rounded-xl bg-[#FBBF24] ">
//           </div>
//           <div >
//             <h2 class='font-[500] text-[16px] text-[#111827]'>Digital Timetable & Calendar</h2>
//             <p class='font-[400] text-[12px] text-[#4B5563]'>Dynamic class schedules with instant conflict resolution and alerts..</p>
//           </div>
//         </div>
//         <div class="flex items-center mt-[20px] gap-2">
//           <div class="w-[40px] h-[40px] rounded-xl bg-[#FB7185] ">
//           </div>
//           <div >
//             <h2 class='font-[500] text-[16px] text-[#111827]'>Student Academic History</h2>
//             <p class='font-[400] text-[12px] text-[#4B5563]'>One-click access to all previous transcripts and behavioral reports..</p>
//           </div>
//         </div>
//         <div class="flex items-center mt-[20px] gap-2">
//           <div class="w-[40px] h-[40px] rounded-xl bg-[#818CF8] ">
//           </div>
//           <div >
//             <h2 class='font-[500] text-[16px] text-[#111827]'>Student & Parrent Information Syestem</h2>
//             <p class='font-[400] text-[12px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
//           </div>
//         </div>
//         <div class="flex items-center mt-[20px] gap-2">
//           <div class="w-[40px] h-[40px] rounded-xl bg-[#F049DA] ">
//           </div>
//           <div >
//             <h2 class='font-[500] text-[16px] text-[#111827]'>Student Academic History.</h2>
//             <p class='font-[400] text-[12px] text-[#4B5563]'>One-click access to all previous transcripts and behavioral reports..</p>
//           </div>
//         </div>
//       </div>

//       <div class='relative  '>
//         <img class='rounded-xl ' src={Student} alt='' />
//         <div class=' flex justify-self-end absolute -bottom-8 left -right-8 '>
//           <div class='bg-[#006451]  rounded-xl p-[32px]'>
//             <h2 class='text-[#FFFFFF] py-4 font-[600] text-[24px]'>25+ Years</h2>
//             <p class=' text-[#FFFFFF] font-[400] text-[14px]'>Building educational legacies across<br />
//               the nation with unwavering<br />
//               commitment.</p>
//           </div>        
//         </div>
//       </div>


//     </div>

//   )
// }
// export default Section

import React from 'react'
import Student from './../Component/image/Student life.png';

const features = [
  { color: '#34D399', title: 'Real-time Attendance Tracking', desc: 'Instant biometrics and classroom check-ins synchronized with mobile apps.' },
  { color: '#38BDF8', title: 'GPA 5.0 / CGPA 4.0 Grading', desc: 'Automated calculations following national and international standards.' },
  { color: '#FBBF24', title: 'Digital Timetable & Calendar', desc: 'Dynamic class schedules with instant conflict resolution and alerts.' },
  { color: '#FB7185', title: 'Student Academic History', desc: 'One-click access to all previous transcripts and behavioral reports.' },
  { color: '#818CF8', title: 'Student & Parent Information System', desc: 'Complete student and parent profiles with real-time communication tools.' },
  { color: '#F049DA', title: 'Performance Analytics', desc: 'Detailed insights into academic progress and behavioral trends.' },
]

const Section = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-12 mt-16 md:mt-20 justify-center px-6 md:px-16 py-10'>

      {/* Left — Text Content */}
      <div className='w-full md:w-1/2'>

        <p className='text-[#006451] font-[600] text-[14px] tracking-wide uppercase'>
          OUR HERITAGE
        </p>
        <h2 className='text-[#111827] font-[700] text-[26px] md:text-[32px] py-2 leading-snug'>
          Nurturing Intellectual Growth and Excellence
        </h2>
        <p className='text-[#4B5563] font-[400] text-[16px] md:text-[18px] leading-relaxed'>
          Founded in 1999, Academy Excellence has consistently stood as
          a beacon of quality education in Bangladesh.
        </p>

        {/* Feature List */}
        <div className='mt-4'>
          {features.map((item, index) => (
            <div key={index} className='flex items-start gap-3 mt-5'>
              <div
                className='w-[40px] h-[40px] rounded-xl flex-shrink-0'
                style={{ backgroundColor: item.color }}
              />
              <div>
                <h3 className='font-[500] text-[15px] text-[#111827]'>{item.title}</h3>
                <p className='font-[400] text-[12px] text-[#4B5563] mt-0.5 leading-relaxed'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Image + Card */}
      <div className='relative w-full md:w-1/2 pb-16 md:pb-0'>
        <img
          className='rounded-xl w-full h-auto object-cover'
          src={Student}
          alt='Student life'
        />

        {/* Floating Green Card */}
        <div className='absolute -bottom-10 right-0 md:-bottom-8 md:-right-4'>
          <div className='bg-[#006451] rounded-xl p-6 md:p-8 shadow-lg max-w-[220px]'>
            <h2 className='text-white font-[600] text-[22px] md:text-[24px] pb-2'>25+ Years</h2>
            <p className='text-white font-[400] text-[13px] md:text-[14px] leading-relaxed'>
              Building educational legacies across
              the nation with unwavering commitment.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section