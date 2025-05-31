'use client';
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='h-15 w-full flex justify-around items-center bg-blue-100'>
        <div> 
            <p className='text-xs sm:text-sm md:text-base'>©2025 WeCoach Academy. All Rights Reserved.</p>
            <p className='text-[10px] sm:text-xs md:text-sm'>Powered By C.duPlessis Development</p>
        </div>
        <div className='flex justify-around text-center items-center text-3xl sm:text-xs md:text-3xl lg:text-4xl'>
            <a className='p-2' href='https://www.instagram.com/wecoachacademy/?igsh=MjV4OHZoY3U1OW83#'><FaInstagram /></a>
            <a className='p-2' href='https://www.facebook.com/'><FaFacebookSquare /></a>
            <a className='p-2' href='https://www.youtube.com/'><IoLogoYoutube /></a>
            <a className='p-2' href='https://www.tiktok.com/'><AiFillTikTok /></a>
        </div>
    </div>
  )
}

export default Footer

