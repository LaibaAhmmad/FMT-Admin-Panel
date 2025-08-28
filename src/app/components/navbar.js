'use client'
import React, { useState } from 'react'
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import logout from '@/app/assets/logout.svg'
import settings2 from '@/app/assets/settings2.svg'
import paper from '@/app/assets/paper.svg'
import { useSidebar } from '@/app/sidebarContext.js'

import { redirect } from 'next/navigation'

import Image from 'next/image'
import { Montserrat} from "next/font/google";

import { Poppins } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200",'300', "400", "500" ,"600","700"], 
});
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function Navbar({heading}) {
  const { isOpen, setIsOpen } = useSidebar();
  const [openDropdown , setopenDropdown] = useState();
  return (
    <div className='flex justify-between p-3 border-b border-[#D3D3D3]'>
            <div className='flex items-center md:gap-x-3 gap-x-1'>
  <Image src={menuIcon} alt='notfound' onClick={ () => {setIsOpen(!isOpen)} } className='cursor-pointer'/>
  <h1 className='font-semibold text-2xl text-[min(3vw,1.5rem)]' >{heading}</h1>
</div>
<div className='flex  gap-x-2 md:gap-x-[31px] items-center'>
  <div>
    <Image src={fileIcon} alt='notfound' className='max-w-full h-auto'/>
    </div>
    <div>
    <Image src={bellIcon} alt='notfound' className='max-w-full h-auto'/>
    </div>
<div className='flex md:gap-x-3 gap-x-2 font-semibold'>
  <div className=' text-right mt-1 '>
<p className={`text-lg text-[#2F2F2F]  ${montserrat.className} m-0 p-0 font-semibold text-[min(3vw,1.125rem)]`}>John Doe</p>
<p className={`text-sm text-[#777777] leading-[0px] m-0 p-0 ${montserrat.className}  text-[min(2vw,0.875rem)] font-normal cursor-pointer` } onClick={() =>{ redirect('/account')}}  >Account</p>
</div>
<div className='relative'>
<div className='bg-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-full flex items-center  p-1 md:p-2 ' onClick={()=>{setopenDropdown(!openDropdown)}}> 
    <Image src={pp} alt='notfound'/>
</div>
{openDropdown && <div className={`absolute bg-white rounded right-2 ${poppins.className} w-[127px] h-[113px] top-13 `}>
  <div>
   <div className='flex items-center gap-x-2 text-sm font-normal hover:bg-[#F8F8F8] py-[3px]  mt-[10px] px-4 mx-1 rounded  cursor-pointer text-left' onClick={() =>{redirect('/account/plans')}}> <Image src={paper} alt='notfound' className=''/> <p className='text-sm font-normal text-[#6D6D6D]'>Plans</p></div>
     <div className='flex items-center gap-x-2 text-sm font-normal  hover:bg-[#F8F8F8]  py-[3px]  px-4 mx-1 rounded cursor-pointer text-left'> <Image src={settings2} alt='notfound'/> <p className='text-sm font-normal text-[#6D6D6D]'>Settings</p></div>
   <div className='flex items-center gap-x-2 text-sm font-normal  hover:bg-[#F8F8F8]  py-[3px] px-4  mx-1 rounded  cursor-pointer text-left'> <Image src={logout} alt='notfound' /> <p className='text-sm font-normal text-red-500'>Logout</p></div>
</div>
  </div>}
</div>
</div>
</div>
    
    </div>
  
  )
}


