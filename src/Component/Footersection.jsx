import React from 'react'
import ganlink from './image/know.png';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
const Footersection = () => {

  return (

    <div class='bg-[#006451] flex items-center justify-evenly sm:flex-col md:flex-row sm:gap-12  py-[40px] sm:px-[8px] md:px-[20px]'>

      <div class=''>
        <img src={ganlink} class='' alt='' />
        <p class='font-[400] text-[16px] text-[#FFFFFF99] py-4 pr-[12px]'>A premier educational institution<br />
          dedicated to academic excellence and<br />
          moral integrity in Bangladesh.</p>
        <div class="flex items-center gap-2">
          <a href="#">
             
            <svg class='bg-[#FFFFFF1A] p-[6px] rounded-2xl   text-[#fff] ' width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#">
            <svg class='bg-[#FFFFFF1A] p-[6px] rounded-2xl   text-[#fff]' width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />          
            </svg>
          </a>
          <a href="#"
            >
            <svg  class='bg-[#FFFFFF1A] p-[6px] rounded-2xl   text-[#fff]' width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>


      <div>
        <h1 class='font-[700] text-[32px] text-[#fff]'>Contact Us</h1>
        <div class='flex gap-2 items-center'>
          <IoLocationOutline class='text-[#7CBB4D] gap-2 items-center ' />
          <p class='font-[400] text-[16px] text-[#FFFFFF99]  m-2'> 123 Education Avenue, Mirpur-10,<br /> Dhaka 1216, Bangladesh</p>
        </div>
        <div class='flex gap-2 items-center'>
          <MdOutlineCall class=' text-[#7CBB4D]' />
          <span class='font-[400] text-[16px] text-[#FFFFFF99]  m-2'>+880 1234 567890</span>
        </div>
        <div class='flex gap-2 items-center'>
          <MdOutlineEmail class=' text-[#7CBB4D]' />
          <span class='font-[400] text-[16px] text-[#FFFFFF99]  m-2'>admissions@nationalscholars.edu.bd</span>
        </div>

      </div>

      <div>
        <h1 class='font-[700] text-[32px] text-[#fff] mb-6'>Newsletter</h1>
        <p class='font-[400] text-[16px] text-[#FFFFFF99] mb-12'>Subscribe to our newsletter for latest<br />
          updates, events and notices.</p>
        <span class='bg-[#FFFFFF33] py-[12px] pl-[16px] pr-[91px] rounded-md text-[#FFFFFF99]'>Your email address</span>
      </div>

    </div>

  )
}

export default Footersection