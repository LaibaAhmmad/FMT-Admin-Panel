import React from 'react'
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import arrowdrop from '@/app/assets/arrowdrop.svg'

import searchIcon from "@/app/assets/search2.svg"
import productdata from '@/app/productdata.json'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navbar from '@/app/components/navbar'
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function ProductTracking() {
  return (
    <div className='bg-[#EDEDED] pb-7 w-full  overflow-x-hidden'>
               <div className="flex-1 ml-15 md:ml-0 ">
            <Navbar heading="Product Tracking"/>
             
<div className=' mt-[30px] mx-[33px]'>
    <div className='flex flex-col md:flex-row justify-between items-center mb-[15px] '>
        <span className={`text-sm text-normal text-[#696969] ${poppins.className} mb-2 flex items-center gap-x-[8px]`}>
  Show 
  <span className="relative inline-block">
    <select
      className={`${montserrat.className} text-[#4B4B4B] appearance-none md:px-[6px] px-3 bg-white border-1 rounded py-2 md:py-0  
        md:w-[46px] w-full md:h-[35px] h-auto border-[#D8D6DE] font-semibold focus:outline-none focus:ring-0`}
    >
      <option>10</option>
      <option>20</option>
      <option>30</option>
    </select>
    <Image
      src={arrowdrop}
      alt="not found"
      className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 "
    />
  </span>
  Entries
</span>

    <div className='relative w-full md:w-auto '>
                         <input className={`w-full md:w-[197px] bg-white border-1 border-[#D8D6DE] outline-0 h-[35px] pl-[35px] rounded ${montserrat.className} placeholder:text-[#BDBDBD] placeholder:font-semibold placeholder:text-sm `}  placeholder='Search '/>
                         <Image src={searchIcon} alt='not found' className='absolute bottom-2 left-2'/>
                         </div>
                         </div>
                         <div className='overflow-x-auto  shadow-lg shadow-black/5' >
                            <div className={`flex ${montserrat.className} pl-[24px] py-[18px] text-xs gap-x-4 justify-between text-sm font-semibold bg-[#F8F8F8] min-w-[900px]` }>
                                <div className='w-1/5'>ID</div>
                                <div className='w-full '>URL</div>
                                <div className='w-1/3 text-center'>TARGET<br/> PRICE</div>
                                <div  className='w-1/3 '>PREVIOUS  PRICE</div>
                                <div  className='w-1/3'>POSTAL  CODE</div>
                                <div  className='w-1/3'>PRICE</div>
                                <div  className='w-1/3'>INSTOCK</div>
                                <div  className='w-1/3'>STATUS</div>

                            </div>
                            {productdata.map((e, index) =>{
                                return<div  key ={index} className={`flex justify-between gap-x-4 pl-[24px] bg-white text-sm ${poppins.className}   min-w-[900px]`}>
                                    
                                    <div className='w-1/5 py-[46px]'>{e.id}</div>
                                    <div className=' w-full py-[24px] text-[#0898D6F7] '>{e.url}</div>
                    
                                    <div  className='w-1/3  py-[46px] text-center'>{e.Targetprice}</div>
                                    <div  className='w-1/3 py-[46px]'>{ e.Price}</div>
                                    <div  className='w-1/3 py-[46px]'></div>
                                    <div  className='w-1/3 py-[46px]'>{e.Price}</div>
                                    <div  className='w-1/3 py-[46px]'>{e.Price}</div>
                                    <div  className='w-1/3 py-[46px]'>{e.Status}</div>
                                </div>
                            })}
                         </div>
</div>
</div>
    </div>
  )
}
