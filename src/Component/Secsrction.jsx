// import React from 'react'
// const Secsrction = () => {
//     return (
//         <div class=' bg-[#E8EBEA] p-[40px]' >
//             <div class='flex sm:flex-col md:flex-row items-center  justify-around   my-20'>
//                 <div>
//                     <h2 class='font-[700] text-[32px] text-[#111827]'>Comprehensive Education Path</h2>
//                     <p class='font-[400] text-[16px] text-[#111827] py-[16px]'>Our curriculum is designed to meet international standards while adhering <br />to the National Curriculum and Textbook Board (NCTB) guidelines.</p>
//                 </div>
//                 <a href='' class='bg-[#006451] px-[20px] sm:mt-[16px] xl:mt-[20px] py-[12px] rounded-md'>View All Curriculum</a>
//             </div>

//             <div class='flex  sm:flex-col md:flex-row items-center  justify-center gap-24 my-20 '>


//                 <div class='flex flex-col items-center bg-[#ffffff] shadow-xl py-[33px] px-[44px] rounded-xl'>
//                     <div class="w-[40px] h-[40px] rounded-2xl bg-[#006451] m-[20px]">
//                     </div>
//                     <h2 class='font-[700] text-[24px] text-[#111827]'>Primary Section</h2>
//                     <span class='font-[500] text-[16px] text-[#006451] pt-[8px] pb-[27px]'>Class I - V</span>
//                     <p class='font-[400] text-[16px] text-[#4B5563] pb-[100px]'>Building a strong foundation with <br />interactive learning, continuous <br /> assessment, and creative activities.</p>
//                     <h2 class='font-[700] text-[16px] text-[#006451]'>View Curriculum</h2>
//                 </div>
//                 <div class='flex flex-col items-center bg-[#ffffff] shadow-xl py-[33px] px-[44px] rounded-xl border-2 border-[#006451]'>
//                     <div class="w-[40px] h-[40px] rounded-2xl bg-[#006451] m-[20px]">
//                     </div>
//                     <h2 class='font-[700] text-[24px] text-[#111827]'>High School</h2>
//                     <span class='font-[500] text-[16px] text-[#006451] pt-[8px] pb-[27px]'>Class VI - X (SSC)</span>
//                     <p class='font-[400] text-[16px] text-[#4B5563] pb-[100px]'>Building a strong foundation with <br />interactive learning, continuous <br /> assessment, and creative activities.</p>
//                     <h2 class='font-[700] text-[16px] text-[#006451]'>View Curriculum</h2>
//                 </div>
//                 <div class='flex flex-col items-center bg-[#ffffff] shadow-xl py-[33px] px-[44px] rounded-xl'>
//                     <div class="w-[40px] h-[40px] rounded-2xl bg-[#006451] m-[20px]">
//                     </div>
//                     <h2 class='font-[700] text-[24px] text-[#111827]'>Class VI - X (SSC)</h2>
//                     <span class='font-[500] text-[16px] text-[#006451] pt-[8px] pb-[27px]'>Class XI - XII (HSC)</span>
//                     <p class='font-[400] text-[16px] text-[#4B5563] pb-[100px]'>Building a strong foundation with <br />interactive learning, continuous <br /> assessment, and creative activities.</p>
//                     <h2 class='font-[700] text-[16px] text-[#006451]'>View Curriculum</h2>
//                 </div>

//             </div>

//         </div>





//     )
// }
// export default Secsrction

import React from 'react'

const cards = [
  {
    title: 'Primary Section',
    range: 'Class I - V',
    desc: 'Building a strong foundation with interactive learning, continuous assessment, and creative activities.',
    highlighted: false,
  },
  {
    title: 'High School',
    range: 'Class VI - X (SSC)',
    desc: 'Preparing students for board exams with subject-focused teaching, lab sessions, and career guidance.',
    highlighted: true,
  },
  {
    title: 'Higher Secondary',
    range: 'Class XI - XII (HSC)',
    desc: 'Advanced academic programs with science, commerce, and humanities tracks for university readiness.',
    highlighted: false,
  },
]

const Secsrction = () => {
  return (
    <div className='bg-[#E8EBEA] px-6 md:px-[40px] py-10'>

      {/* Header Row */}
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 my-10 md:my-16'>
        <div className='max-w-xl'>
          <h2 className='font-[700] text-[26px] md:text-[32px] text-[#111827]'>
            Comprehensive Education Path
          </h2>
          <p className='font-[400] text-[15px] md:text-[16px] text-[#4B5563] py-[12px] leading-relaxed'>
            Our curriculum is designed to meet international standards while adhering
            to the National Curriculum and Textbook Board (NCTB) guidelines.
          </p>
        </div>
        
         <a href='#'
          className='bg-[#006451] text-white px-[20px] py-[12px] rounded-md font-[500] text-[15px] hover:bg-[#004d3d] transition-colors whitespace-nowrap'
        >
          View All Curriculum
        </a>
      </div>

      {/* Cards Row */}
      <div className='flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-10'>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white shadow-xl py-8 px-8 rounded-xl w-full md:w-[300px] 
              ${card.highlighted ? 'border-2 border-[#006451]' : 'border border-transparent'}`}
          >
            {/* Icon */}
            <div className='w-[48px] h-[48px] rounded-2xl bg-[#006451] flex items-center justify-center mb-4'>
              <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2'>
                <path d='M12 2L2 7l10 5 10-5-10-5z' />
                <path d='M2 17l10 5 10-5' />
                <path d='M2 12l10 5 10-5' />
              </svg>
            </div>

            <h2 className='font-[700] text-[20px] md:text-[24px] text-[#111827] text-center'>
              {card.title}
            </h2>
            <span className='font-[500] text-[15px] text-[#006451] pt-2 pb-5 text-center'>
              {card.range}
            </span>
            <p className='font-[400] text-[15px] text-[#4B5563] text-center leading-relaxed flex-1'>
              {card.desc}
            </p>
            
             <a href='#'
              className='font-[700] text-[15px] text-[#006451] mt-8 hover:underline'
            >
              View Curriculum →
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Secsrction