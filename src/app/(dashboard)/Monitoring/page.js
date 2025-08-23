'use client'
import React, { use } from 'react'
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import Navbar from '@/app/components/navbar'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import searchIcon from "@/app/assets/search2.svg"
import viewIcon from "@/app/assets/view.svg"
import productdata from '@/app/productdata.json'
import dots from '@/app/assets/dots.svg'
import cross2 from '@/app/assets/cross2.svg'
import eye from '@/app/assets/eye.svg'
import box from '@/app/assets/box.svg'
import { redirect } from 'next/navigation'
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function Monitoring() {
  return (
    <div  className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden'>
        <div className="flex-1 ml-15 md:ml-0  ">
          <Navbar heading="VA Monitoring"/>
          <div className={`  mt-[30px] mx-[33px]  ${poppins.className} `}>
              <div className='flex flex-col md:flex-row  justify-between pt-0 md:pt-[29px]'>
                        <div className='flex items-center justify-between md:justify-start gap-3 md:mb-0 mb-2'>
                             <h2 className='font-semibold text-xl text-[min(3vw,1.25rem)]'>Calender Time Tracking</h2>
                             <button 
  className={`flex items-center gap-2 text-white bg-[#FF9900] rounded lg:py-[7px] lg:w-[84px] lg:h-[29px] py-1 px-[9px] ${montserrat.className} text-xs `}
>
  <Image src={viewIcon} alt="not found" className="w-4 h-4" />
  VIEW
</button>

                             </div>
                              <div className='relative '>
                     <input className={`w-full bg-white border-1 border-[#D8D6DE] outline-0 h-[35px] pl-[38px] rounded ${montserrat.className} placeholder:text-[#BDBDBD] placeholder:font-semibold placeholder:text-sm `}  placeholder='Search '/>
                     <Image src={searchIcon} alt='not found' className='absolute   bottom-2 md:bottom-2  left-3'/>
                     </div>
                         </div>
                      
<div className=''>
<div className="overflow-x-auto shadow-lg shadow-black/5">
  <div
    className={`flex ${montserrat.className} flex-row justify-between text-sm font-semibold bg-[#F8F8F8] pr-[58px] pl-[60px] pt-[20px] pb-[15px] mt-[15px] min-w-[900px]`}
  >
    <div
      className="w-1/6 text-center font-semibold text-sm "
      onClick={() => {
        redirect('/monitoring/profile');
      }}
    >
      USER
    </div>
    <div className="w-1/5 text-center font-semibold text-sm">EMAIL</div>
    <div className="w-2/11 text-center font-semibold text-sm">LAST ACTIVE</div>
    <div className="w-1/8 text-center font-semibold text-sm">WAGE P/H</div>
    <div className="w-1/6 text-center font-semibold text-sm">ACCOUNT</div>
    <div className="w-1/14 text-center font-semibold text-sm">DELETE</div>
  </div>

  {productdata.map((e, index) => (
    <div
      key={index}
      className={`${montserrat.className} pt-[31px] pb-[25px] pl-[60px] pr-[58px] flex flex-row justify-between items-center bg-[#ffffff] text-xs md:text-sm gap-x-5 md:gap-x-0 text-[min(2vw,1rem)] min-w-[900px]`}
    >
      <div className="w-1/6 text-center text-[#6E6B7B] lg:text-lg font-semibold flex gap-2">
        <Image src={box} alt="not found" />
        {e.User}
      </div>

      <div className="w-1/5 text-center text-[#6E6B7B] lg:text-lg font-semibold">
        {e.Email}
      </div>

      <div className="w-2/11 text-center text-[#6E6B7B]">
        <p className="lg:text-lg font-semibold">19/01/21</p>
        <p className="text-xs">24 hours ago</p>
      </div>

      <div className="w-1/8 text-center text-[#6E6B7B]">
        <select className="border border-[#D8D6DE] outline-0 rounded md:w-[130px] w-full md:h-[35px] h-auto">
          <option>Wage p/h</option>
          <option>2.30</option>
          <option>2.30</option>
          <option>2.30</option>
          <option>2.30</option>
        </select>
      </div>

      <div className="w-1/6 text-center">
        <button
          className={`
             cursor-pointer border-1 border-[#FF9900] rounded text-[#FF9900] text-xs ${montserrat.className} md:w-[71px] w-full md:h-[29px] h-auto`}>
          VIEW
        </button>
      </div>

      <div className="w-1/14 text-center">
        <div className="relative">
          <div
            className="cursor-pointer flex items-center justify-center"
            onClick={() => {
              setaction(!action);
            }}
          >
            <Image src={cross2} alt="not found" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

</div>
  <div className='flex justify-between text-sm mt-[9px]'>
            <span className='text-[#9E9E9E]'>Showing 4 of 4 Entries</span>
            <div className='rounded border-[#D8D6DE] border-[1px] text-[#909090] bg-white pl-[16px] pr-[3px] py-[4px] mb-4 md:mb-0 '>
                          <button className='py-[3px] text-center'> 
                           Previous <span className={`${montserrat.className} bg-[#ff9900] text-white px-[12px] py-[7.5px] my-0 `}>1</span>
                          </button>
                            <button className={`${poppins} text-center py-[3px] pr-[13px] pl-[12px] `}>
                           Next
                          </button>
                       </div>
        </div>
                         </div>
                         </div>
    </div>
  )
}
