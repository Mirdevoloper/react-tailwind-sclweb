import React from 'react'
import officeimg from  './../Component/image/office.png';
import Student from './../Component/image/Student life.png';




const Section = () => {


  return (
    <div class='flex  sm:flex-col md:flex-row xl:flex-row sm:gap-2 md:gap-4 xl:gap-6 mt-20 justify-center'>

      <div class=''>
        <div>
          <p class='text-[#006451] font-[400] text-[16px]'>OUR HERITAGE</p>
          <h2 class='text-[#111827] font-[700] text-[32px]  py-2' >Nurturing Intellectual Growth and</h2>
          <p class='text-[#4B5563] font-[400] text-[18px] text-[#4B5563] '>Founded in 1999, Academy Excellence has consistently stood as <br />a beacon of quality education in Bangladesh.</p>
        </div>

        <div class="flex items-center mt-[20px] gap-2">
          <div class="w-[40px] h-[40px] rounded-xl bg-[#34D399] ">
          </div>
          <div >
            <h2 class='font-[500] text-[16px] text-[#111827]'>Real-time Attendance Tracking</h2>
            <p class='font-[400] text-[12px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
          </div>
        </div>
        <div class="flex items-center mt-[20px] gap-2">
          <div class="w-[40px] h-[40px] rounded-xl bg-[#38BDF8] ">
          </div>
          <div >
            <h2 class='font-[500] text-[16px] text-[#111827]'>GPA 5.0 / CGPA 4.0 Grading</h2>
            <p class='font-[400] text-[12px] text-[#4B5563]'>Automated calculations following national and international standards..</p>
          </div>
        </div>
        <div class="flex items-center mt-[20px] gap-2">
          <div class="w-[40px] h-[40px] rounded-xl bg-[#FBBF24] ">
          </div>
          <div >
            <h2 class='font-[500] text-[16px] text-[#111827]'>Digital Timetable & Calendar</h2>
            <p class='font-[400] text-[12px] text-[#4B5563]'>Dynamic class schedules with instant conflict resolution and alerts..</p>
          </div>
        </div>
        <div class="flex items-center mt-[20px] gap-2">
          <div class="w-[40px] h-[40px] rounded-xl bg-[#FB7185] ">
          </div>
          <div >
            <h2 class='font-[500] text-[16px] text-[#111827]'>Student Academic History</h2>
            <p class='font-[400] text-[12px] text-[#4B5563]'>One-click access to all previous transcripts and behavioral reports..</p>
          </div>
        </div>
        <div class="flex items-center mt-[20px] gap-2">
          <div class="w-[40px] h-[40px] rounded-xl bg-[#818CF8] ">
          </div>
          <div >
            <h2 class='font-[500] text-[16px] text-[#111827]'>Student & Parrent Information Syestem</h2>
            <p class='font-[400] text-[12px] text-[#4B5563]'>Instant biometrics and classroom check-ins synchronized with mobile apps.</p>
          </div>
        </div>
        <div class="flex items-center mt-[20px] gap-2">
          <div class="w-[40px] h-[40px] rounded-xl bg-[#F049DA] ">
          </div>
          <div >
            <h2 class='font-[500] text-[16px] text-[#111827]'>Student Academic History.</h2>
            <p class='font-[400] text-[12px] text-[#4B5563]'>One-click access to all previous transcripts and behavioral reports..</p>
          </div>
        </div>
      </div>

      <div class='relative  '>
        <img class='rounded-xl ' src={Student} alt='' />
        <div class=' flex justify-self-end absolute -bottom-8 left -right-8 '>
          <div class='bg-[#006451]  rounded-xl p-[32px]'>
            <h2 class='text-[#FFFFFF] py-4 font-[600] text-[24px]'>25+ Years</h2>
            <p class=' text-[#FFFFFF] font-[400] text-[14px]'>Building educational legacies across<br />
              the nation with unwavering<br />
              commitment.</p>
          </div>        
        </div>
      </div>


    </div>

  )
}

export default Section