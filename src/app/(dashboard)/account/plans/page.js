import React from 'react'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navbar from '@/app/components/navbar';
import vector from "@/app/assets/vector.svg";
import vectorfilled from "@/app/assets/vectorfilled.svg";

import Image from 'next/image';
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function Plans() {
  return (
      <div className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden'>
          <div className="flex-1 ml-15 md:ml-0  ">
            <Navbar heading="Plans"/>
              <div className=' mt-[30px] mx-[33px]'>
<div className={`${poppins.className} flex  justify-between md:items-center items-start`}>
    <div className='flex gap-x-[10px]'>
        <div className='flex flex-col md:flex-row gap-x-[6px]'>
      <h2 className='md:text-base text-sm'>Bill Monthly</h2>
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer"/>
  <div
    class="relative w-[40px] h-[20px] bg-[#F5F1EA] border border-[#FF9900] rounded-full
           after:content-[''] after:absolute after:top-0.5 after:left-0.5
           after:bg-[#FF9900] after:rounded-full after:h-[14px] after:w-[14px]
           after:transition-all peer-checked:after:translate-x-[22px]">
  </div>
  
</label>
  <h2 className='md:text-base text-sm'>Bill Yearly</h2>
  <button className='bg-[#FF9900] text-white px-[6px] rounded text-xs font-normal py-[3px]'>
    Save 20%
  </button>
</div>
    </div>
    <div className='flex flex-col md:flex-row items-center gap-x-[20px]'>
        <div className='flex gap-x-1 items-center'>
     <span className='text-sm md:text-base font-normal text-[#2F2F2F]'>USB</span>
     <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer"/>
  <div
    className="relative w-[40px] h-[20px] bg-[#F5F1EA] border border-[#909090] rounded-full
           after:content-[''] after:absolute after:top-0.5 after:left-0.5
           after:bg-[#909090] after:rounded-full after:h-[14px] after:w-[14px]
           after:transition-all peer-checked:after:translate-x-[22px]">
  </div>
  
</label>
<span  className='text-sm md:text-base font-normal text-[#2F2F2F]'> GBP</span>
</div>
<div className='flex gap-x-1 items-center'>
<div className='bg-[#E4E4E4] border-[#777777] border rounded-full font-semibold  text-[#777777] h-[13px] w-[13px] flex justify-center  text-[9px]'>?</div>
<span  className={` text-xs md:text-sm font-semibold  text-[#777777] ${montserrat.className} mt-2 md:mt-0 `}> Help</span>
</div>
<button className={`${montserrat.className} bg-[#FFDAB97D] font-semibold text-[#ff9900] px-[10px] py-[4px] rounded mt-3 md:mt-0 text-sm md:text-base`}>Feedback</button>
    </div>
</div>
 <div className='flex flex-col lg:flex-row gap-x-[17px] lg:gap-y-0 gap-2 mt-[30px]'>
    <div className={`bg-white rounded md:w-auto w-full h-[449px] flex-1`}>
<button className={`bg-[#FF9900] text-white ml-[24px] ${poppins.className} text-xs font-normal px-[6px] py-[3px] rounded mt-[24px]`}>Active</button>
     <div className='border-b border-[#E9E9E9]  pb-[29px] mt-[13px]'>
    <p className={`${montserrat.className} text-[#2F2F2F] font-semibold md:text-[28px] text-[24px] pl-[24px] pr-[26px] `}>Free</p>
    <p className={ `${montserrat.className} text-5xl text-[#ff9900]  pl-[24px] pr-[26px]  text-[min(5vw,3rem)]`}>$0/month</p>
  </div>
  <div className={`${poppins.className} flex flex-col gap-y-[16px]  pl-[24px] pr-[26px] pt-[26px]`}>
    <div className=' flex  gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal text-[#2F2F2F]'>Up to 500 orders</p></div>
    <div className=' flex  gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Up to infinite ASIN'S</p></div>
     <div className=' flex  gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Up to infinte SKU’s</p></div>
     <div className=' flex  gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Infinite marketplaces</p></div>
  </div>
  <div className=' pl-[24px] pr-[26px] pt-[39px]'>
    <button className=' py-2 lg:py-[13px] w-full bg-[#FFDAB980] text-[#FF990099] mb-3 lg: mb-0 text-sm md:text-base'>Subscribed</button>
  </div>
    </div>
     <div className={`bg-[#F6E4D3] shadow-[0_4px_6px_rgba(0,0,0,0.15)] rounded h-[449px] md:w-auto w-full flex-1`}>

     <div className='border-b border-[#FF9900]  pb-[29px] pt-[58px] relative'>
    <p className={`${montserrat.className} text-[#2F2F2F] font-semibold  md:text-[28px] text-[24px]   pl-[24px] pr-[26px] `}>Starter</p>
    <p className={ `${montserrat.className} text-5xl text-[#ff9900] pl-[24px] pr-[26px] text-[min(5vw,3rem)]`}>$29/month</p>
     <div className="absolute -bottom-2 left-5 bg-[#ff9900] text-white text-xs px-3 py-1 rounded">
    Recommended
  </div>
  </div>
  <div className={`${poppins} flex flex-col gap-y-[16px] pl-[24px] pr-[26px]  pt-[26px]`}>
    <div className=' flex  gap-x-1'><Image src={vectorfilled} alt=" not found"/><p className='text-sm font-normal text-[#2F2F2F]'>Up to 500 orders</p></div>
    <div className=' flex  gap-x-1'><Image src={vectorfilled} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Up to infinite ASIN'S</p></div>
     <div className=' flex  gap-x-1'><Image src={vectorfilled} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Up to infinte SKU’s</p></div>
     <div className=' flex  gap-x-1'><Image src={vectorfilled} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Infinite marketplaces</p></div>
  </div>
  <div className=' pl-[24px] pr-[26px]  pt-[39px]'>
    <button className='py-2 lg:py-[13px] w-full bg-[#ff9900] text-white mb-3 lg: mb-0 text-sm md:text-base'>Upgrade Plan</button>
  </div>
    </div>
     <div className={`bg-white rounded h-[449px] md:w-auto w-full flex-1`}>

     <div className='border-b border-[#E9E9E9] pb-[29px] pt-[58px] '>
    <p className={`${montserrat.className} text-[#2F2F2F] font-semibold  md:text-[28px] text-[24px]   pl-[24px] pr-[26px]`}>Personal</p>
    <p className={ `${montserrat.className} text-5xl text-[#ff9900]  pl-[24px] pr-[26px]  text-[min(5vw,3rem)]`}>$59/month</p>
  </div>
  <div className={`${poppins} flex flex-col gap-y-[16px]  pl-[24px] pr-[26px]  pt-[26px]`}>
    <div className='flex gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal text-[#2F2F2F]'>Up to 500 orders</p></div>
    <div className='flex  gap-x-1 '><Image src={vector} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Up to infinite ASIN'S</p></div>
     <div className='flex  gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Up to infinte SKU’s</p></div>
     <div className='flex  gap-x-1'><Image src={vector} alt=" not found"/><p className='text-sm font-normal  text-[#2F2F2F]'>Infinite marketplaces</p></div>
  </div>
  <div className=' pl-[24px] pr-[26px] pt-[39px] '>
    <button className='py-2 lg:py-[13px] w-full bg-[#ff9900] text-white mb-3 lg: mb-0 text-sm md:text-base '>Upgrade Plan</button>
  </div>
    </div>


 </div>
              </div>
              </div>
              </div>
  )
}
