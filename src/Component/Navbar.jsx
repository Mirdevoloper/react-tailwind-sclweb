import React from 'react'
import { CiSearch } from "react-icons/ci";
import logofb from './../Component/image/fbkos.png'
import logotwe from './../Component/image/twersd.png'
import logolink from './../Component/image/Vector.png'
import { NavLink } from 'react-router';


const Navbar = () => {

  return (



    <nav class="flex items-center  gap-3 px-5 py-2.5 bg-white justify-around h-[64px] bg-[red]">
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-2 ">
          <CiSearch class='text-[30px]' />
          <h4>I’m looking for..</h4>
        </div>

        <div class=" w-px h-6 bg-[#000]"></div>
        <div class="flex items-center gap-2">
          <a href="#"
            class="flex items-center justify-center w-[24px] h-[24px] rounded-2xl  bg-[#006451] text-white ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#"
            class="flex items-center justify-center w-[24px] h-[24px] rounded-2xl  bg-[#006451] text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#"
            class="flex items-center justify-center w-[24px] h-[24px] rounded-2xl  bg-[#006451] text-white ">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

      </div>

      <div  class='flex  gap-4 items-center'>
       
          <ul class='flex  gap-3'>
            <li class='text-[#475569] font-[500] text-xl'>About Us</li>
            <li class='text-[#475569] font-[500] text-xl'>Testimonials</li>
            <li class='text-[#475569] font-[500] text-xl'>Blog</li>
            <li class='text-[#475569] font-[500] text-xl'>Contact Us</li>
          </ul>
        

        <div class='flex  gap-2 items-center'>
          <button class='flex bg-[#E8EBEA] py-4 px-4 items-center'>
           
            <p>Log In</p>
          </button>
        </div>
      </div >



    </nav >
  )
}

export default Navbar