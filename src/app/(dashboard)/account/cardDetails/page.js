'use client'
import React from 'react'
import Navbar from '@/app/components/navbar'
import arrow from '@/app/assets/arrow2.svg' 
import card from '@/app/assets/card.jpg' 
import stripe from '@/app/assets/stripe.svg' 

import Image from 'next/image'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";

import lock from '@/app/assets/lock.svg' 
import { redirect } from 'next/navigation'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function CardDetails() {
  return (
    <div className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden'>
        <div className="flex-1 ml-15 md:ml-0  ">
         <Navbar heading="Credit Card Details"/>
         <div className=' mt-[30px] mx-[33px]'>
                        <div className='flex items-center gap-x-1'>
                        <div className='bg-[#FF990042] rounded py-2 md:py-[7px] px-[10px]' onClick={()=>{redirect('/account')}}><Image src={arrow} alt='not found'/></div>
                        <h1 className={`text-xl font-semibold text-[#2F2F2F] ${poppins.className} text-[min(3vw,1.25rem)]`}>Payment Method</h1>
                        </div>
                      
                        <div className='bg-white md:w-[443px] w-full h-[430px] rounded px-[25px] mt-[20px]'>
                        <h1 className={`text-lg ${montserrat.className} text-[#2F2F2F] font-semibold pt-[25px]  pb-[13px]`}>Change Payment Details</h1>
                       <div className="flex items-center gap-x-1">
  <Image src={lock} alt="not found" />
  <span className={`text-[#909090] text-sm font-normal ${poppins.className}`}>
    Secure 128 bit SSL encrypted system.
  </span>
</div>

                        <div className='flex justify-between mt-[28px]'>
                       <Image src={card} alt='not found'/>
                       <div className={`bg-[#A0A2B7] px-[7px] rounded text-white flex ${poppins.className} text-[10px] font-normal flex items-center gap-x-[3px]`}> Powered by  <Image src={stripe} alt='not found'/> </div>
                      
                        </div>
                         <div className={` ${poppins.className} `}>
                       <p className={`  text-[#2F2F2F]  text-xs font-normal  mt-[16px]`}>Card Number</p>
                       <input className='bg-[#F5F5F5] h-[35px] w-full text-sm md:text-base' placeholder=" 1234 1234 1234 1234"/>
                       <p className={`  text-[#2F2F2F]  text-xs font-normal mt-[13px] `}>Expiry Date</p>
                       <input className='bg-[#F5F5F5] h-[35px] w-full text-sm md:text-base' placeholder=" MM / YY"/>
                        <p className={`  text-[#2F2F2F]  text-xs font-normal mt-[13px] `}>Card Verification Code</p>
                       <input className='bg-[#F5F5F5] h-[35px] w-full text-sm md:text-base' placeholder=" CVC"/>
                       </div>
                       <div className='text-end mt-[21px]'>
                        <button className={`bg-[#FF9900] text-white text-sm md:text-base font-semibold py-2 md:py-[7px]  px-[18px] ${montserrat.className} rounded`}>Update</button>
                       </div>
                        </div>
                        </div>
                        </div>
    </div>
  )
}
