'use client'
import React from 'react'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import search from '@/app/assets/searchIcon.svg'
import Image from 'next/image';
import searchIcon from "@/app/assets/search2.svg"
import productdata from '@/app/productdata.json'
import dots from '@/app/assets/dots.svg'
import cross from '@/app/assets/cross.svg'
import eye from '@/app/assets/eye.svg'
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import Navbar from '@/app/components/navbar';
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});
export default function WebApp() {
  return (
    <div className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden'>
      
       <div className="flex-1 ml-15 md:ml-0">
   <Navbar heading="Web App"/>
     
    <div className={`  mt-[30px] mx-[33px]  ${poppins.className} `}>
        <div className='border-b border-[#D3D3D3] pb-[22px]'>
        <h1 className={`text-xl font-semibold ${poppins.className} text-[#2F2F2F] pb-[15px] text-[min(3vw,1.25rem)]` }>Search Products</h1>
        <div className='flex justify-between items-baseline gap-2 '>
       <div className="relative w-full mt-[12px]">
  <input
    className={`w-full bg-white border border-[#D8D6DE] outline-0 text-[min(2vw,1.125rem)] h-[35px] md:h-[55px] pl-8 md:pl-[47px] rounded ${montserrat.className} placeholder-[#BDBDBD] placeholder:font-semibold`}
    placeholder="Search Product Or ASIN"
  />
  <Image
    src={search}
    alt="not found"
    className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6"
  />
</div>
<div>
            <button className={`bg-[#FF9900] w-[80px] md:w-[159px]  h-[35px] md:h-[55px] w-
            [159px] ${montserrat.className} text-white rounded text-sm md:text-base`}> Search</button>
      </div>
        </div>
        </div>
        <div>
            <div className='flex justify-between pt-[29px]'>
                <h2 className='font-semibold text-xl text-[min(3vw,1.25rem)] '>Recently Viewed</h2>
                <div className="relative">
  <input
    className={`w-full bg-white border border-[#D8D6DE] outline-0 
    h-[35px] pl-[35px] rounded ${montserrat.className} 
    placeholder-[#BDBDBD] placeholder:font-semibold placeholder:text-sm`}
    placeholder="Search"
  />
  <Image
    src={searchIcon}
    alt="not found"
    className="absolute   -mt-[2px] md:-mt-0 top-1/2 left-2 -translate-y-1/2 w-4 h-4   "
  />
</div>
            </div>
         
<div className="overflow-x-auto shadow-lg shadow-black/5">
 
  <div className="flex flex-row justify-between text-sm font-semibold bg-[#F8F8F8] px-[62px] pt-[20px] pb-[15px] mt-[15px] min-w-[900px]">
    <div className="w-1/6 text-center font-semibold text-xs">TITLE</div>
    <div className="w-1/5 text-center font-semibold text-xs">ASIN</div>
    <div className="w-2/10 text-center font-semibold text-xs">DATE</div>
    <div className="w-1/6 text-center font-semibold text-xs">VERSION</div>
    <div className="w-1/10 text-center font-semibold text-xs">ACTIONS</div>
  </div>


  {productdata.map((e, index) => (
    <div
      key={index}
      className={`${montserrat.className} pt-[31px] pb-[25px] px-[62px] flex flex-row justify-between bg-[#ffffff] text-xs md:text-sm text-[min(2vw,1rem)] min-w-[900px]`}
    >
      <div className="w-1/6 text-center">{e.product}</div>

      <div className="w-1/5 text-center">{e.Asin}</div>

      <div className="w-2/10 text-center">
        <span>19/01/21</span>
      </div>

      <div className="w-1/6 text-center">
        <span
          className={
            e.label === "Web App"
              ? "bg-[#7367F01F] rounded-full text-[#7367F0] py-[5px] px-[15px] font-semibold"
              : "bg-orange-200 rounded-full text-[#FF8000] py-[5px] px-[15px] font-semibold"
          }
        >
          {e.label}
        </span>
      </div>

      <div className="w-1/10 text-center">
        <div className="relative">
          <div
            className="font-bold cursor-pointer flex gap-x-[15px] items-center justify-center"
            onClick={() => {
              setaction(!action);
            }}
          >
            <Image src={eye} alt="not found" />
            <Image src={cross} alt="not found" />
            <Image src={dots} alt="not found" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    <div className='flex lg:flex-row flex-col justify-between text-xs mt-[9px] mb-5'>
            <span className='text-[#9E9E9E] text-center md:text-start'>Showing 4 to 4 of 4 Entries</span>
            <div className='rounded border-[#D8D6DE] border-[1px] text-[#909090] bg-white pl-[16px] pr-[3px] py-[4px] mb-4 md:mb-0 flex items-center justify-center md:justify-start md:items-start'>
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
    </div>
  )
}
