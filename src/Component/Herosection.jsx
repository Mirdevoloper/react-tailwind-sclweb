import React from 'react'
import ganlink from './../Component/image/know.png'
import officeimg from './../Component/image/office.png'


const Herosection = () => {

    return (
        <container>
            <div class='flex sm:flex-col md:flex-row  justify-around bg-[#006451] h-[96px] items-center sm:relative md:relative '>
                <h2 class='bg-[#7CBB4D] py-[12px] px-[20px] rounded-md text-[#FFFFFF] '>Portal LogIn</h2>
                <ul class='flex  gap-4 sm:flex-none '>
                    <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Teachers</a>
                    <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Gallery</a>
                    <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Notice</a>
                    <a href='' class='text-[#FFFFFF] font-[500] text-xl'>Admission</a>
                </ul>
                <img src={ganlink} alt='' />
            </div>
            <img src={officeimg} alt='' />

            <div class=' md:w-[70%] sm:w-[90%] bg-[#fff] shadow-md rounded-xl md:gap-4  md:p-[15px] sm:p-[25px] flex absolute md:-bottom-36 sm:-bottom-26 md:right-50 sm:right-30 md:left-60 sm:left-12'>
                <a href="#" class="flex items-center gap-4 ">
                    <div class="w-20 h-16  rounded-xl bg-[#00A878] flex items-center justify-center">
                    </div>
                    <div >
                        <h class="font-[500] text-xl ">Online Admission</h>
                        <p class=" font-[400] text-[12px] text-[#43474E]">Fast tracking entry</p>
                    </div>
                </a>
                <div class="w-px bg-[#E2E8F0]"></div>
                <a href="#" class="flex items-center gap-4 ">
                    <div class="w-20 h-16  rounded-xl bg-[#F43F5E] flex items-center justify-center  shadow-md">
                    </div>
                    <div>
                        <p class="font-[500] text-xl">Download Prospectus</p>
                        <p class="font-[400] text-[12px] text-[#43474E]">View school brochure</p>
                    </div>
                </a>
                <div class=" w-px bg-[#E2E8F0]"></div>

                <a href="#" class="flex items-center gap-4  flex-1 group ">
                    <div class="w-20 h-16 sm:w-2px sm:h-2px  rounded-xl bg-[#F59E0B] flex items-center justify-center shadow-md">

                    </div>
                    <div>
                        <p class="font-[500] text-xl">Check Results</p>
                        <p class="font-[400] text-[12px] text-[#43474E]">Academic performance</p>
                    </div>
                </a>
            </div >
        </container >


    )
}

export default Herosection