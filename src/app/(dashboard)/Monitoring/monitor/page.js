import React from 'react'
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import Image from 'next/image'
import rightarrow from "@/app/assets/Arrow.svg"
import leftarrow from "@/app/assets/chevronleft.svg"
import Navbar from '@/app/components/navbar'

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function Monitor() {
  return (
    <div className='bg-[#EDEDED] pb-7 w-full'>
       <div className="flex-1 ml-15 md:ml-0 overflow-x-hidden ">
          <Navbar heading='VA Monitoring'/>
                       
                       <div className=' mt-[30px]  mx-[33px]'>
                       <div className='flex justify-center mt-[30px]'>
                          <select className={`bg-white   py-[6px] md:py-[9px] rounded ${montserrat.className}  pl-[5px] md:pl-[11px]  md:pr-[271px] pr-0 w-full md:w-auto border-1 border-[#D8D6DE] md:text-base text-sm`}>
                            <option>Rashel M.</option>
                            <option>Rashel M.</option>
                            <option>Rashel M.</option>
                        </select>
                        </div>
                  <div className='flex lg:flex-row flex-col gap-y-3 lg:gap-y-0 justify-between items-center mb-[22px] lg:mt-0 mt-3'>
                    <div className='flex gap-x-1'>
                        <div className='bg-white py-[10px] px-[13px]'><Image src={rightarrow} alt='not found'/></div>
                        <div className='bg-white  py-[10px] px-[13px]'><Image src={leftarrow}  alt='not found'/></div>
                        <div className={`bg-white ${montserrat.className} flex items-center text-[#6E6B7B] md:text-sm text-xs font-normal py-[8px] pl-[9px] pr-[45px]`}>Sep 23-29, 2020</div>
                    </div>
                    
                        <h1 className={ `${poppins.className} font-semibold text-xl lg:mt-[24px] mt-1 lg:mr-12 text-[min(3vw,1.25rem)] `}>September, 2020</h1>
                    
                    <div className={`${montserrat.className} flex gap-x-1 `}>
                        <button className='bg-[#FF9900] text-white  text-sm md:text-basepy-[4px] md:py-[7px] px-[8px] rounded'>Month</button>
                        <button className='bg-[#FF9900] text-white text-sm md:text-base  py-[4px] md:py-[7px] px-[8px] rounded'>Week</button>
                        <button className='bg-[#FF9900] text-white  text-sm md:text-base py-[4px] md:py-[7px] px-[8px] rounded'>Date</button>
                    </div>

                  </div>
                  <div className='overflow-x-auto '>
                  <div className={`grid grid-cols-7 grid-rows-3 [&>*]:bg-white [&>*]:border-2   [&>*]:border-[#EBE9F1]  [&>*]:border-l  [&>*]:border-b text-[#6E6B7B]  [&>*]:h-[234px]  min-w-[900px]    ${montserrat.className} `} >
  <div >
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] '>0h</div>
    </div>
  <div class="  ">
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] text-sm font-bold '>
   <span >7h 20min <span className='text-[#7367F0]'>- 120$</span> </span> 
   <div className='flex-col flex gap-2 mt-[13px]'>
    <div className='rounded-full flex items-center justify-center bg-[#7367F01F]  lg:w-[131px] w-full lg:h-[31px] h-full text-xs text-[#7367F0]'>5hr 20min</div>
    <div className='rounded-full  flex items-center justify-center bg-[#7367F01F]  lg:w-[131px] w-full  lg:h-[31px] h-full text-xs  text-[#7367F0]'>2hr 00min</div>

   </div>
  </div>
    </div>
  <div class=" ">
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] '>0h</div>
    </div>
   <div class=" ">
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] '>0h</div>
    </div>
  <div class=" ">
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] '>0h</div>
    </div>
  <div class=" ">
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] '>0h</div>
    </div>
  <div class=" ">
  <div className='w-full bg-[#E4E4E4] text-[#FF9900] pt-[7px] pb-[3px] px-[30px] text-center '>Sun,23rd</div>
  <div className='mt-3 ml-[8px] '>0h</div>
    </div>
  <div className=" pl-[8px] pt-[16px]">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className="  pl-[8px] pt-[16px]">0h</div>
  <div className=" pl-[8px] pt-[16px]">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className="  pl-[8px] pt-[16px]">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
  <div className=" pl-[8px] pt-[16px] ">0h</div>
</div>
</div>
                  </div>
                   </div>
    </div>
  )
}
