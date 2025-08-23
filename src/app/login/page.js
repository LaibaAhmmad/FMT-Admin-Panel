import React from 'react'
import loginlogo from '@/app/assets/loginlogo.svg'
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
export default function Login() {
  return (
    <div className={`bg-[#EDEDED] flex justify-center items-center flex-col h-[100vh] ${poppins.className}  `}>
   <div className='bg-[#ffffff] w-[500px] h-[446px] rounded shadow-md '>
  <div className='bg-[#FF9900] flex justify-center items-center py-[20px] rounded-t'>
  <Image src={loginlogo} alt='notfound'/>
  </div>
<div className='px-[30px] '>
   <h1 className='font-semibold text-sm mt-[19px]'>Welcome Back!</h1>
   <p className='text-xs mt-[15px]'>Email</p>
   <input type="pasword" placeholder="Email/Username" className="  py-[11px]  pl-[17px] mb-[22px] border-[#D8D6DE] border-1 rounded placeholder:text-sm w-full"/>
   <p className='text-xs'>Password</p>
   <input type="pasword" placeholder="Password" className=" py-[11px] pl-[17px] mb-[19px] border-[#D8D6DE] border-1 rounded placeholder:text-sm w-full"/>
   <div className='flex items-center justify-between  mb-[17px]'>
   <div className='flex items-center  '> <input type='checkbox'  /> <span className='text-sm'>Remember Me</span></div>
    <span><a className='text-sm underline text-[#FF9900]' >Forgot Password?</a></span>
   </div>
    <button className={`bg-[#FF9900] text-white py-[12px] w-full rounded mb-[39px] ${montserrat.className}`}>Login</button>
    </div>
    <div>
      <p className='text-center text-sm'>Already have an account?<span ><a className='underline text-[#FF9900]'>Sign Up</a> </span></p>
    </div>
    </div>
    </div>
  )
}
