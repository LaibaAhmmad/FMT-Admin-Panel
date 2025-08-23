import Image from 'next/image'
import React from 'react'
import searchIcon from "@/app/assets/search.svg"
import star from "@/app/assets/star.svg"
import deviceIcon from "@/app/assets/device.svg"

import { Montserrat} from "next/font/google";

import { Poppins} from "next/font/google";
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200",'300', "400", "500" ,"600","700"], 
});

export default function Devices() {
  return (
    <div className='text-center flex flex-col rounded'>
        <h1 className='text-center font-semibold text-[22px] md:mt-[56px] mt-5'>Devices</h1>
       <div className="flex justify-center mt-[12px]">
<div className="flex justify-center mt-[12px]">
  <div className="relative w-full md:w-[248px]">
   
    <Image
      src={searchIcon}
      alt="not found"
      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
    />
    <input
      className="w-full lg:w-[259px] bg-white pl-10 pr-3 lg:h-34px p-1 h-auto rounded border border-gray-300 
                 focus:outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-[#BDBDBD] "
      placeholder="Search"
    />
  </div>
</div>

</div>

<div className='flex justify-center items-center'>
<div className=' max-w-[709px] w-full  mt-[12px]'>
    <div  className={`${montserrat.className} flex justify-between bg-[#F8F8F8] lg:pl-[46px] px-2 pt-[19px] pb-[16px] font-semibold text-xs`}>
    <p >DEVICES</p>
    <p >IP LOCATION</p>
    <p className='text-center lg:pr-[20px]'>LAST ACTIVE</p>
    </div>
    <div  className={`${montserrat.className} bg-[#FFFFFF] flex justify-between lg:items-center items-baseline px-2  text-left lg:px-[40px] pb-[16px] md:text-sm text-xs text-[#6C6A72] text-[min(2vw,1rem)]`} >
        <ul className='' >
            <li className='flex gap-x-1 pt-[28px] '>
              <Image src={star} alt="notfound "/> <span>Device 1</span>
            </li>
            <li className='flex gap-x-1 pt-[38px] '>
              <Image src={star} alt="notfound"/> <span>Device 1</span>
            </li>
            <li className='flex gap-x-1  pt-[38px]'>
              <Image src={star} alt="notfound"/> <span>Device 1</span>
            </li>
            <li className='flex gap-x-1  pt-[38px] '>
              <Image src={star} alt="notfound"/> <span>Device 1</span>
            </li>
        </ul >
         <ul>
             <li className='flex gap-x-1  pt-[38px] '>
              <Image src={deviceIcon} alt="notfound"/> <span>United Kingdom</span>
            </li>
             <li className='flex gap-x-1  pt-[37px] '>
              <Image src={deviceIcon} alt="notfound"/> <span>India</span>
            </li>
            <li className='flex gap-x-1  pt-[40px] '>
              <Image src={deviceIcon} alt="notfound"/> <span>Spain</span>
            </li>
             <li className='flex gap-x-1  pt-[39px] '>
              <Image src={deviceIcon} alt="notfound"/> <span>United Kingdom</span>
            </li>
        </ul>
         <ul  className='text-center'>
            <li className='pt-[22px]'>
           <p>19/01/21</p>
           <p className='text-[8px]'>24 Hours ago</p>
            </li>
            <li className='pt-[24px]'>
               <p>19/01/21</p>
           <p className='text-[8px]'>24 Hours ago</p>
            </li>
            <li className='pt-[27px]'>
             <p>19/01/21</p>
           <p className='text-[8px]'>24 Hours ago</p>
            </li>
            <li className='pt-[25px]'>
                <p>19/01/21</p>
           <p className='text-[8px]'>24 Hours ago</p>
            </li>
        </ul>
       
    </div>
     <div className='flex lg:flex-row flex-col justify-between text-xs mt-[9px] mb-5'>
            <span className='text-[#9E9E9E]'>Showing 4 to 4 of 4 Entries</span>
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
