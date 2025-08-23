'use client'
import React from 'react'
import copy from "@/app/assets/copy.svg"
import Image from 'next/image';
import { Montserrat} from "next/font/google";
import { Poppins } from 'next/font/google';
import { useState } from 'react';
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200",'300', "400", "500" ,"600","700"], 
});
export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
 export default function ActivationCode() {
  const [clicked, setclicked] = useState()
  const handleClick =() => {
    navigator.clipboard.writeText("ZAK001")

    setclicked(true);
     setTimeout(() => {
      setclicked(false)
    }, 2000)
  }
  return (
    <div>
      <h2 className='font-semibold text-2xl text-center mt-[26px] text-[min(4vw,1.5rem)]'>Activation Code</h2>
      
     <div className='flex gap-x-[21px] justify-center items-center mt-[37px] relative'>
  {/* Letters */}
  <div className={`bg-[#FFDAB9] ${montserrat.className} text-5xl w-[54px] text-center text-[min(5vw,3rem)]`}>Z</div>
  <div className={`bg-[#FFDAB9] ${montserrat.className} text-5xl w-[54px] text-center text-[min(5vw,3rem)]`}>A</div>
  <div className={`bg-[#FFDAB9] ${montserrat.className} text-5xl w-[54px] text-center text-[min(5vw,3rem)]`}>K</div>
  <div className={`bg-[#FFDAB9] ${montserrat.className} text-5xl w-[54px] text-center text-[min(5vw,3rem)]`}>0</div>
  <div className={`bg-[#FFDAB9] ${montserrat.className} text-5xl w-[54px] text-center text-[min(5vw,3rem)]`}>0</div>
  <div className={`bg-[#FFDAB9] ${montserrat.className} text-5xl w-[54px] text-center text-[min(5vw,3rem)]`}>1</div>
  <div className="relative">
    <Image src={copy} alt="not found" onClick={handleClick} />
    {clicked && (
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2A3035] rounded px-[5px] pb-[3px] pt-[1px] shadow">
        <p className={`text-white ${poppins.className} text-[10px]`}>Copied!</p>
          <div className="absolute left-5 -bottom-1 w-0 h-0 
        border-l-4 border-r-4 border-t-4 
        border-l-transparent border-r-transparent border-t-[#2A3035]">
</div>
      </div>
    )}
  </div>
</div>

      
       <div className='text-center mt-[39px]'>
        <button className={`text-[#FFFFFF] bg-[#FF9900]  px-[5px] md:px-[10px]  py-[6px] md:py-[9px] rounded ${montserrat.className} text-sm md:text-base`}> Generate New Code </button>
      </div>
    </div>
  )
}
