import React from 'react'
import pp2 from "@/app/assets/pp2.svg"
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import productImage from '@/app/assets/image.jpg'
import Navbar from '@/app/components/navbar'
import Image from 'next/image'
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
export default function Profile() {
  return (
          <div className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden'>
                 <div className="flex-1 ml-15 md:ml-0 ">
                          <Navbar heading="VA Monitoring"/>
                            
                          <div className={`${poppins.className} mt-[30px] mx-[33px] flex lg:flex-row flex-col gap-x-4`}>
  {/* Left column */}
  <div className="flex-[1_1_247px]">  
    <div className='bg-white rounded h-[247px] min-w-[247px] relative'>
      <div className='bg-[#FF9900] p-8 rounded-t'></div>
      <div className='rounded-full bg-[#FFDAB9] p-2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 '>
        <Image src={pp2} alt="not found"/>
      </div>
      <div className='mt-7'>
        <h1 className="text-center font-semibold min-w-[247px] text-lg">Rashel M.</h1>
        <p className='text-[#B4B4B4] font-normal text-xs text-center'>Details</p>
      </div>
    </div>

    <div className='bg-white rounded h-[153px] min-w-[247px] text-center mt-[13px]'>
      <p className='text-sm pt-[39px] font-semibold'>Time Worked Today</p>
      <p className={`${montserrat.className} text-[#FF9900] text-[41px] font-bold`}>3h 2m</p>
    </div>

    <div className='bg-white rounded h-[153px] min-w-[247px] text-center mt-[13px]'>
      <p className='text-sm pt-[39px] font-semibold'>Time Worked This Week</p>
      <p className={`${montserrat.className} text-[#FF9900] text-[41px] font-bold`}>9h 2m</p>
    </div>

    <div className='bg-white rounded h-[153px] min-w-[247px] text-center mt-[13px]'>
      <p className='text-sm pt-[39px] font-semibold'>Time Worked This Month</p>
      <p className={`${montserrat.className} text-[#FF9900] text-[41px] font-bold`}>13h 2m</p>
    </div>
  </div>

  {/* Right column */}
  <div className="flex-[1_1_869px] flex flex-col gap-y-3">
    <div>
      <div className='bg-white rounded lg:h-[170px] h-auto mt-3 lg:mt-0 pb-4 md:pb-0'>
        <p className='font-semibold text-lg pt-1 md:pt-[38px] pl-[25px]'>Filter</p>
        <p className='text-[#909090] leading-none text-xs pl-[25px] pt-[12px] pb-1'>Filter the Results</p>
        <div className='flex px-[25px] flex-col md:flex-row items-center gap-x-2'>
          <input className='bg-[#F5F5F5] h-[35px] w-full rounded'/>
          <span className='font-bold'>to</span>
          <input className='h-[35px] w-full bg-[#F5F5F5] rounded'/> 
          <button className='bg-[#FF9900] text-white md:px-[18px] px-0 w-full h-[35px] rounded mt-2 md:mt-0'>Submit</button>
        </div>
      </div>
    </div>

    <div className='bg-white rounded px-[25px] lg:h-[560px] h-auto pb-3 md:pb-0'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='font-semibold text-base mt-[18px]'>Everyday Record</p>
        <p className='text-base font-semibold mt-[18px] mb-[5px]'>Total Time: <span className='text-[#FF9900]'>1h 16 mins</span></p>
      </div>
      <button className={`${montserrat.className} p-[7px] text-white bg-[#FF9900] rounded text-sm font-semibold mt-[18px]`}>2021-05-12</button>
      <p className='text-sm font-normal mt-[17px]'>Session#1: <span className='text-red-500'>1h 12mins</span></p>
      <Image src={productImage} alt='not found' className='w-full max-h-[327px]'/>
    </div>
  </div>
</div>

                               </div>

    </div>
  )
}
