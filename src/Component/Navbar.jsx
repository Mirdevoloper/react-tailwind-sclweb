// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import logofb from './../Component/image/fbkos.png'
// import logotwe from './../Component/image/twersd.png'
// import logolink from './../Component/image/Vector.png'
// import { NavLink } from 'react-router';


// const Navbar = () => {

//   return (



//     <nav class="flex items-center  gap-3 px-5 py-2.5 bg-white justify-around h-[64px] bg-[red]">
//       <div class="flex items-center gap-2">
//         <div class="flex items-center gap-2 ">
//           <CiSearch class='text-[30px]' />
//           <h4>I’m looking for..</h4>
//         </div>

//         <div class=" w-px h-6 bg-[#000]"></div>
//         <div class="flex items-center gap-2">
//           <a href="#"
//             class="flex items-center justify-center w-[24px] h-[24px] rounded-2xl  bg-[#006451] text-white ">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//             </svg>
//           </a>
//           <a href="#"
//             class="flex items-center justify-center w-[24px] h-[24px] rounded-2xl  bg-[#006451] text-white">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//               <rect x="2" y="9" width="4" height="12" />
//               <circle cx="4" cy="4" r="2" />
//             </svg>
//           </a>
//           <a href="#"
//             class="flex items-center justify-center w-[24px] h-[24px] rounded-2xl  bg-[#006451] text-white ">
//             <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//             </svg>
//           </a>
//         </div>

//       </div>

//       <div  class='flex  gap-4 items-center'>
       
//           <ul class='flex  gap-3'>
//             <li class='text-[#475569] font-[500] text-xl'>About Us</li>
//             <li class='text-[#475569] font-[500] text-xl'>Testimonials</li>
//             <li class='text-[#475569] font-[500] text-xl'>Blog</li>
//             <li class='text-[#475569] font-[500] text-xl'>Contact Us</li>
//           </ul>
        

//         <div class='flex  gap-2 items-center'>
//           <button class='flex bg-[#E8EBEA] py-4 px-4 items-center'>
           
//             <p>Log In</p>
//           </button>
//         </div>
//       </div >



//     </nav >
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-5 py-2.5 h-[64px] max-w-7xl mx-auto">
        
        {/* Left — Search + Social */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="flex items-center gap-2 text-[#475569]">
            <span className="text-[24px]"><CiSearch /></span>
            <span className="hidden md:block text-[14px]">I'm looking for..</span>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-[#D1D5DB]"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {/* Facebook */}
            <a href="#" className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#006451] text-white hover:bg-[#004d3d] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#006451] text-white hover:bg-[#004d3d] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#006451] text-white hover:bg-[#004d3d] transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Nav Links + Button (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-5">
            {['About Us', 'Testimonials', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={({ isActive }) =>
                    `font-[500] text-[15px] transition-colors ${isActive ? 'text-[#006451]' : 'text-[#475569] hover:text-[#006451]'}`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="bg-[#E8EBEA] hover:bg-[#d4d9d7] transition-colors py-2 px-5 rounded-md font-[500] text-[15px] text-[#111827]">
            Log In
          </button>
        </div>

        {/* Hamburger — Mobile only */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#475569] transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#475569] transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#475569] transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8EBEA] px-5 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {['About Us', 'Testimonials', 'Blog', 'Contact Us'].map((item) => (
              <li key={item}>
                <navLink
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="font-[500] text-[15px] text-[#475569] hover:text-[#006451] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </navLink>
              </li>
            ))}
          </ul>
          <button className="bg-[#E8EBEA] hover:bg-[#d4d9d7] transition-colors py-2 px-5 rounded-md font-[500] text-[15px] text-[#111827] w-full">
            Log In
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar