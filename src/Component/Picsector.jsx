import React from 'react'
import play from './image/play.png';
import reacharge from './image/reacharge.png';
import read from './image/read.png';
import prize from './image/prize.png';
import dance from './image/dance.png';

const Picsector = () => {
    return (

        
            <div class='bg-[#E8EBEA] md:p-[50px] sm:p-[25px] ' >
                <div class='text-center'>
                    <p class='text-[#006451] font-[700] text-[16px] '> CAMPUS LIFE</p>
                    <h1 class='text-[#006451] font-[700] text-[32px] text-[#111827]'>Activities & Gallery</h1>
                </div>

                <div class=' flex sm:flex-col md:flex-row gap-4 md:pt-[120px] sm:pt-[60px] sm:px-[60px] md:px-[120px]  pb-[40px]'>
                    <div class='grid grid-cols-2  gap-2 '>
                        <img src={play} alt='' />
                        <img src={reacharge} alt='' />
                        <img src={read} alt='' />
                        <img src={prize} alt='' />
                    </div>
                    <img src={dance} class='sm:w-[100%] md:w-[50%]' alt='' />
                </div>
                <div class='text-center '>
                    <a href='' class=' py-[12px] px-[20px]  rounded-md font-[500] text-[16px]  bg-[#006451] text-[#FFFFFF]'>View Full Gallery</a>
                </div>






            </div>

            

        
    )
}

export default Picsector