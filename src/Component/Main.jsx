import React from 'react'
import campas from './../Component/image/campas.png'


const Main = () => {

    return (

        
            <div class='flex justify-center sm:flex-col md:flex-row  xl:flex-row sm:gap-2 md:gap-4 sm:mt-25  md:mt-50 px-20'>
                <img src={campas} alt='' />

                <div class='px-6'>
                    <p class='text-[#006451] font-[700] text-sm'>ABOUT OUR INSTITUTION</p>

                    <h2 class='text-[#111827] font-[700] text-xl py-4' >A Legacy of Excellence in Education</h2>

                    <p class='text-[#111827] font-[400] text-[18px] py-4'>Founded with a vision to provide quality education, National <br />Schola rs School & College has been a beacon of hope and <br />excellence. We blend traditional values with modern educational </p>


                    <div class='grid grid-flow-col grid-rows-2 gap-6 py-6'>
                       
                        <div class='border-l-4 border-[#006451] px-2'>
                            
                            <h2 class='text-[#111827] font-[700] text-[32px]'>98%</h2>
                            <p class='text-[#4B5563] font-[500] text-[16px]'>Board Exam Pass Rate</p>
                        </div>
                       
                        <div class='border-l-4 border-[#006451] px-2'>
                             <div class="w-px bg-[#E2E8F0]"></div>
                            <h2 class='text-[#111827] font-[700] text-[32px]'>120+</h2>
                            <p class='text-[#4B5563] font-[500] text-[16px]' >Board Exam Pass Rate</p>
                        </div>
                      
                        <div  class='border-l-4 border-[#F59E0B] px-2'>                           
                            <h2 class='text-[#111827] font-[700] text-[32px]'>A+</h2>
                            <p class='text-[#4B5563] font-[500] text-[16px]'>Board Exam Pass Rate</p>
                        </div>
                        
                        <div class='border-l-4 border-[#006451] px-2'>                           
                            <h2 class='text-[#111827] font-[700] text-[32px]'>25+</h2>
                            <p class='text-[#4B5563] font-[500] text-[16px]'>Board Exam Pass Rate</p>
                        </div>
                    </div>
                    <button class='py-4 px-6 bg-[#006451] mt-[40px]'>Discover Our History</button>

                </div>
            </div>

    )
}

export default Main