import React from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200",'300', "400", "500" ,"600","700"], 
});
 export default function Card() {
  return (
    <div className='bg-white rounded  w-full max-h-[145px]  mt-[31px] flex-col md:flex-row flex justify-between items-center  '>
        <div className=' pt-[15px] md:pt-[35px] pl-0 md:pl-[30px]   pb-[5px] md:pb-[39px]'>
            <div className='text-center md:text-start'>
    <h1 className='text-2xl font-normal text-[min(4vw,1.5rem)]'>Install FBAMultiTool</h1>
    <p className={`text-lg font-normal text-[#9D9D9D] ${roboto.className} text-[min(3vw,1.125rem)]`}>To enable the FMT please click install</p>
    </div>
    </div>
    <div className='pb-[10px] md:pb-0'>  
        <button className='bg-[#FF9900] rounded text-white   text-xs md:text-base px-[10px] md:px-[22px]  py-[3px] md:py-[10px]  mr-[31px] '>
        Install FMT
    </button></div>
    </div>
  )
}

