'use client'
import React from 'react'
import Navbar from '@/app/components/navbar'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from 'next/image';
import arrowdownicon from "@/app/assets/arrowdown.svg"
import { redirect } from 'next/navigation';
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

export const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});
export default function Account() {
  return (
    <div className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden'>
        <div className="flex-1 ml-15 md:ml-0  ">
        <Navbar heading="Account"/>
          <div className=' mt-[30px] mx-[33px]'>
            <div className='flex lg:flex-row flex-col gap-x-[22px] gap-y-3 lg:gap-y-0'>
            <div className='bg-white rounded   flex-[1_1_426px]    md:h-[386px] md:w-auto h-full px-[16px]  pb-2 lg:pb-0'> 
                <h1 className={`${montserrat.className} text-lg font-semibold text-[#2F2F2F] mt-[22px]`}>Change Password</h1>
                <p className={`${poppins.className} text-xs font-normal text-[#909090] mt-[12px]`}><span className='text-[#FF9900] '>Note:</span> Your password must be minimum of 8 characters long and include atleast one capital letter and oone number.</p>
                <p  className={`${poppins.className} text-xs font-normal text-[#909090]  mt-[16px]`}>Current Password</p>
                <input type="text " className='bg-[#F5F5F5] w-full md:h-[35px] rounded'/>
                <p className={`${poppins.className} text-xs font-normal text-[#909090]  mt-[13px]`}>New Password</p>
                <input type="Password" className='bg-[#F5F5F5] w-full md:h-[35px] rounded'/>
                <p className={`${poppins.className} text-xs font-normal text-[#909090] mt-[13px]`}>Confirm Password</p>
                <input type='password' className='bg-[#F5F5F5] w-full md:h-[35px] rounded'/>
                  <div className='text-end mt-[21px]'>
                        <button className={`bg-[#FF9900] text-white text-sm md:text-base font-semibold py-2 md:py-[7px]  px-[18px] ${montserrat.className} rounded`}>Update</button>
                       </div>
            </div>
            <div className='bg-white rounded   md:w-auto flex-[1_1_678px] h-[386px] px-[16px] pb-2 lg:pb-0'>
                <h1 className={` ${montserrat.className} text-2xl text-[#2F2F2F] md:mt-[24px] mt-2 font-semibold text-[min(4vw,1.5rem)]`}>Subscription</h1>
                <p className={`text-[#909090] text-xs md:text-sm ${poppins.className} md:mt-[39px] mt-2`}>Your Subscription will renew on <span className='text-[#FF9900]'>8th March, 2021</span></p>
                   <button className={`text-white bg-[#F44336] text-lg font-semibold ${montserrat.className} rounded md:mt-[16px] mt-2  py-2 md:py-[10px] px-[26px] text-[min(3vw,1.125rem)] ` } >Cancel Subscription</button>
                <p className='text-xs text-[#909090] font-normal mt-[22px]'><span className='text-[#FF9900] '>Note:</span >Canceling your account will means after your current billing cycle completes, you will no longer have any access to your Searches and WichList Items. </p>
                <button className={`text-[#FF9900] bg-[#FFDAB97D]  text-sm md:text-[15px] mt-[22px] rounded py-2 md:py-[7px] px-[21px]`} onClick={()=>{ redirect('/account/cardDetails')} } >Change Payment Details</button>
            </div>
             </div>
 <div className='bg-white rounded lg:mt-[27px] mt-3  md:w-auto flex-[1_1_1127px] w-full overflow-x-auto'>
    <h1 className={`text-lg font-semibold text-[#2F2F2F] ${montserrat.className} pt-[21px] mb-[15px] ml-[25px]`}>Subscription</h1>
   <div className=" pl-[25px] pr-[33px]  py-[15px] min-w-[900px]">
  <div
    className={`grid shadow-[0_3px_5px_0_#0000000D] border-white grid-cols-6 bg-[#F8F8F8] border border-[#CFCFCF] font-semibold py-[10px] rounded-t text-center ${montserrat.className}`}
  >
    <div >Billing Start</div>
    <div>Billing End</div>
    <div>STATUS</div>
    <div>DISCOUNT</div>
    <div>PRICE</div>
    <div>INVOICE</div>
  </div>
  <div className={`grid grid-cols-6 bg-white shadow-[0_3px_5px_0_#0000000D] border-white  font-normal text-center ${poppins.className}  pt-[12px] pb-[9px] hover:bg-[#F8F8F8] crursor-pointer`}>
    <div >8 Jan 2021</div>
    <div>8 Jan 2021</div>
    <div className="text-[#1BB65D]">PAID</div>
    <div>£0</div>
    <div>£19.95</div>
    <div className="flex justify-center"><Image src={arrowdownicon} alt="notfound" /></div>
  </div>
  <div className="grid grid-cols-6 shadow-[0_3px_5px_0_#0000000D] border-white bg-white text-center  pt-[12px] pb-[9px] hover:bg-[#F8F8F8] crursor-pointer">
    <div>8 Jan 2021</div>
    <div>8 Jan 2021</div>
    <div className="text-[#1BB65D]">PAID</div>
    <div>£0</div>
    <div>£19.95</div>
    <div className="flex justify-center"><Image src={arrowdownicon} alt="notfound" /></div>
  </div>
  <div className="grid grid-cols-6 bg-white text-center shadow-[0_3px_5px_0_#0000000D] border-white  pt-[12px] pb-[9px] hover:bg-[#F8F8F8] crursor-pointer">
    <div>8 Jan 2021</div>
    <div>8 Jan 2021</div>
    <div className="text-[#1BB65D]">PAID</div>
    <div>£0</div>
    <div>£19.95</div>
    <div className="flex justify-center "><Image src={arrowdownicon} alt="notfound" /></div>
  </div>
 <div className="grid grid-cols-6 bg-white text-center shadow-[0_3px_5px_0_#0000000D] border-white  pt-[12px] pb-[9px] hover:bg-[#F8F8F8] crursor-pointer">
    <div>8 Jan 2021</div>
    <div>8 Jan 2021</div>
    <div className="text-[#1BB65D]">PAID</div>
    <div>£0</div>
    <div>£19.95</div>
    <div className="flex justify-center"><Image src={arrowdownicon} alt="notfound" /></div>
  </div>
   <div className="grid grid-cols-6 bg-white text-center shadow-[0_3px_5px_0_#0000000D] border-white pt-[12px] pb-[9px] hover:bg-[#F8F8F8] crursor-pointer">
    <div>8 Jan 2021</div>
    <div>8 Jan 2021</div>
    <div className="text-[#1BB65D]">PAID</div>
    <div>£0</div>
    <div>£19.95</div>
    <div className="flex justify-center"><Image src={arrowdownicon} alt="notfound" /></div>
  </div>
</div>

 </div>
             </div>
               </div>
        </div>
   
  )
}
