'use client'
import React from 'react'
import menuIcon from '@/app/assets/menuIcon.svg'
import fileIcon from '@/app/assets/Mask.svg'
import bellIcon from '@/app/assets/notification.svg'
import pp from '@/app/assets/pp.svg'
import arrow from '@/app/assets/arrow2.svg'
import lego from '@/app/assets/lego.jpg'
import settings from '@/app/assets/settings.svg'
import droparrow from '@/app/assets/droparrow.svg'
import dropIcon from '@/app/assets/icon.svg'
import flag1 from "@/app/assets/flag1.svg"
import keepa from "@/app/assets/keepa.svg"

import Navbar from '@/app/components/navbar'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);


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
const EUdata = [
  { region: flag1, rank: 142, price: 142, profit: 142, roi: "30.33%" },
  { region: flag1, rank: 1102, price: 1102, profit: 1102, roi: "30.33%" },
  { region: flag1, rank: 565, price: 565, profit: 565, roi: "30.33%" },
  { region: flag1, rank: 565, price: 565, profit: 565, roi: "30.33%" },
  { region: flag1, rank: 342, price: 342, profit: 342, roi: "30.33%" },
];
  const data = [];
const data2 = [];
const data3 =[];
const data4 =[];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}
const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
}
const config = {
  type: 'line',
  data: {
    datasets: [{
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      radius: 0,
      data: data,
    },
    {
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
      radius: 0,
      data: data2,
    },
     {
      borderColor: "#A8DCAB",
      borderWidth: 1,
      radius: 0,
      data: data3,
    },
      {
      borderColor: '#FC0FC0',
      borderWidth: 1,
      radius: 0,
      data: data4,
    }
  ]
  },
  options: {
   
    responsive: true,
    maintainAspectRatio :false,
    animation,
    interaction: {
      intersect: false
    },
    plugins: {
      legend: false
    },
    scales: {
      x: {
        type: 'linear'
      }
    }
  }
};
export default function ProductDetails() {
  
  return (
          <div className='bg-[#EDEDED] pb-7 w-full overflow-x-hidden '>
               <div className="flex-1 ml-15 md:ml-0  ">
          <Navbar heading="Web App"/>
             
             <div className=' mt-[30px] mx-[33px] '>
                
                <div className='flex items-center gap-x-1 '>
                <div className='bg-[#FF990042] rounded py-[7px] px-[10px]'><Image src={arrow} alt='not found'/></div>
                <h1 className={`text-xl font-semibold text-[#2F2F2F] text-[min(3vw,1.25rem)] ${poppins.className}`}>Product Details</h1>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-x-[15px] gap-x-2 mt-[21px] gap-y-3 lg:gap-y-0 '>
                    <div className='bg-white rounded lg:w-[472px] w-full lg:h-[326px] h-full pr-[12px] pb-3 lg:pb-0'>
                      <h2 className={`font-semibold lg:text-base text-sm ${montserrat.className} text-[#2F2F2F] pt-[14px] pl-[14px] `}>Product Information</h2>
                      <div className={` ${poppins.className} flex justify-center  flex-col lg:flex-row w-full px-3 lg:px-0  pt-[13px] gap-x-[19px] `}>
                      <div  className='lg:w-1/2 w-full '>
                        <div className='lg:pl-[14px] pl-0'><Image src={lego} alt="not found" className=''/></div>
                      </div>
                      <div className='lg:w-[60%] pt-2  w-full'>
                        <p className='text-[#0898D6F7] lg:text-sm font-normal text-xs '>LEGO Online shopping Retail Toy, toy, child, retail, shopping. You can also check out the similar PNG images from below gallery. </p>
                        <p className='  lg:text-sm text-xs text-[#777777] mt-[11px]'>By: <span className='text-[#FF9900]'>LEGO</span></p>
                       <p className='  lg:text-sm text-xs text-[#777777]'>ASIN: <span className='font-semibold text-[#666666]'>B134FT00Y</span></p> 
                       <div className='mt-[11px]'>
                       <p className='text-[#777777] lg:text-sm text-xs'>Size: <span className='text-[#666666]'> 17.32 X 15.02 X 4.03 CM</span></p> 
                       <p className='text-[#777777] lg:text-sm text-xs'>Weight: <span className='text-[#666666]'>0.55 Kg</span></p>
                       <p className='text-[#777777] lg:text-sm text-xs'>Category:<span className='text-[#666666]'>Toy</span> </p>
                       </div>
                        </div>
                        </div>
                    </div>
                    <div className='bg-white rounded lg:w-[314px] w-full px-3 lg:px-[13px] lg:h-[326px] h-full '>
               <h2 className={`font-semibold lg:text-base text-sm ${montserrat.className} text-[#2F2F2F] my-[15px] `}>Restrictions</h2>
                         <div className='mt-[16px]' >
                            <ul className={`border-[#E0E0E0] border-1  rounded text-[13px] text-[min(2vw,0.8125rem)] mb-[28px] ${poppins.className}`}>
                                <li className='flex justify-between items-center lg:h-[50px]  h-[40px] lg:pl-[11px] lg:pr-[9px]  px-2 border-[#E0E0E0] border-b'>
                                  <p className='text-[#4B4B4B] font-normal'>Eligible to Sell</p>
                                   <button className='text-[#FF9900]  bg-[#FFDAB980] rounded py-[5px] px-[12px]'>Check</button>
                                  </li>
                                   <li className='flex justify-between items-center  lg:h-[50px]  h-[40px] lg:pl-[11px]  px-2 lg:pr-[9px]  border-[#E0E0E0] border-b'>
                                  <p  className='text-[#4B4B4B] font-normal'>Mark as restricted</p>
                                   <input type="checkbox" className='accent-[#ff9900]'/>
                                  </li>
                                   <li className='flex justify-between items-center   lg:h-[50px] h-[40px] lg:pl-[11px]  px-2 lg:pr-[9px] border-[#E0E0E0] border-b'>
                                  <p  className='text-[#4B4B4B] font-normal'>Hazmat</p>
                                   <button className='text-[#FF9900] bg-[#FFDAB980] rounded py-[5px] px-[12px]'>Check</button>
                                  </li>
                                   <li className='flex justify-between items-center   lg:h-[50px]  h-[40px] lg:pl-[11px]  px-2 lg:pr-[9px] border-[#E0E0E0] border-b'>
                                  <p  className='text-[#4B4B4B] font-normal'>Mark as Hazmat</p>
                                   <input type="checkbox"/>
                                  </li>
                                    <li className='flex justify-between items-center  lg:h-[50px] h-[40px] lg:pl-[11px]  px-2 lg:pr-[9px]  '>
                                  <p  className='text-[#4B4B4B] font-normal'>IP Complaints</p>
                                   <p className='text-[#ADADAD] font-normal'>coming Soon</p>
                                  </li>
                            </ul>
                         </div>
                    </div>
                    <div className={`bg-white rounded   w-full px-[12px] lg:h-[326px] h-full pb-2 lg:pb-0  lg:w-[314px] `}>
                      <div className='flex justify-between'>
                         <h2 className={`font-semibold text-base ${montserrat.className} text-[#2F2F2F] pt-[12px] `}>FBA Calculator</h2>
                         <Image src={settings} alt='not found'/>
                         </div>
                         <div className={`${montserrat.className}  text-xs`}>
                         <div className='flex justify-between text-xs  text-[#3E4042] '>
                          <p  className='font-medium mt-[21px]'>Voucher Discount</p>
                          <p className='text-[#FF9900]  mt-[21px]'>23%</p>
                         </div>
                          <div className='bg-[#F2F4F6] h-[2px] w-full mt-[12px] rounded'>
                            <div className='bg-[#FF9900] h-[5px] w-[23%] rounded'></div>
                          </div>
                       <div className='flex justify-between  mt-[16px] font-medium'>
                      <p> Buy Price</p>
                      <p> Qty</p>
                       </div>
                        <div className='flex gap-x-2  mt-[15px] pb-[15px]'>
                          <div className='flex items-center gap-x-1 py-[10px] px-[7px] bg-[#F5F5F5] rounded  '>
                            <Image src={dropIcon} alt="not found" className='w-[9px] h-[10px]'/>
                            <Image src={droparrow} alt="not found" className='w-[6px] h-[3px]'/>
                          </div>
                          <input placeholder='Type Your Price ' className=' pl-[10px] gbg-[#F5F5F5]  w-full placeholder:text-xs rounded'/>
                          <div className=' bg-[#F5F5F5] py-[10px] px-[13px] rounded'>1</div>
                        </div>
                          <div>
                              <p className='font-medium mb-[10px]'> Sell Price</p>
                              <input placeholder='29.99 ' className=' bg-[#F5F5F5] py-[10px]  pl-[10px] w-full rounded  placeholder:text-xs'/>
                          </div>
                          </div>
                    </div>
                </div>
                <div className='flex   lg:flex-row flex-col gap-x-[17px] mt-3 lg:mt-[30px] lg:gap-y-0 gap-y-3'>
                   <div className='bg-white rounded  lg:w-[314px] w-full  lg:h-[326px] h-full pb-3 lg:pb-0'>
                         <h2 className={`font-semibold text-base ${montserrat.className} text-[#2F2F2F] py-[14px] pl-[14px]`}>Ranking & Pricing</h2>
                         <div >
                            <ul className={`border-[#E0E0E0] border-1 mx-[14px] rounded text-sm text-[min(2vw,0.875rem)] ${poppins.className}`}>
                                <li className='flex justify-between items-center py-[14px] pl-[11px] pr-[9px] border-[#E0E0E0] border-b'>
                                  <p className='text-[#4B4B4B] font-normal'>GB Sales Rank (Top %)</p>
                                   <p className='text-[#EA5455] text-[13px] font-normal'>No Rank</p>
                                  </li>
                                   <li className='flex justify-between items-center py-[14px] pl-[11px] pr-[9px]  border-[#E0E0E0] border-b'>
                                  <p  className='text-[#4B4B4B] font-normal'>Buy Box</p>
                                   <p> <button className='text-[#FF9900] text-[11px] bg-[#FFDAB980] rounded py-[5px] px-[12px]'>Buy Box Available</button></p>
                                  </li>
                                   <li className='flex justify-between items-center py-[14px] pl-[11px] pr-[9px]  border-[#E0E0E0] border-b'>
                                  <p  className='text-[#4B4B4B] font-normal'>Buy Box Price</p>
                                  <p className='text-[#777777] text-[13px]'>1699</p>
                                  </li>
                                   <li className='flex justify-between items-center py-[14px] pl-[11px] pr-[9px]  border-[#E0E0E0] border-b'>
                                  <p  className='text-[#4B4B4B] font-normal'>Lowest FBA (Sellers)</p>
                                   <p className='text-[#777777] text-[13px]'>1699</p>
                                  </li>
                                    <li className='flex justify-between items-center py-[14px] pl-[11px] pr-[9px]  '>
                                  <p  className='text-[#4B4B4B] font-normal'>Lowest FBM (Sellers)</p>
                                   <p className='text-[#777777] text-[13px]'>1699</p>
                                  </li>
                            </ul>
                         </div>
                        
                    </div>
                  <div className="bg-white rounded  lg:w-[799px] w-full lg:h-[326px] h-full pb-15 lg:pb-0 ">
  <h2 className=" lg:pt-[19px] pl-[16px] text-base">Keepa</h2>
  <p className="text-[#FF9900] lg:pt-[14px] lg:pb-[5px] pl-[23px] font-semibold text-lg">Keepa Graph</p>

  <div className="px-[16px]  h-[192px] w-[630px]">
    <p className=' text-sm ml-2'>LEGO 60226 CITY MARS RESEARCH SHUTTLE SPACESHIP CONSTRUCTION TOYS FOR..</p>
    <Line
      data={config.data}
      options={{
        ...config.options,
        responsive: true,
        maintainAspectRatio: false,
      }}
      className="w-full h-full"
    />
  </div>

  <div className='flex items-end mt-5 lg:mt-0 lg:justify-end justify-center gap-x-[11px] px-[16px] '>
    <Image src={keepa} alt='not found'/><span>Keepa</span>
    </div>
</div>

                        
                         </div>
                          <div className='flex items-center gap-x-[18px] mt-3 lg:mt-[30px] gap-y-2 lg:gap-y-0 lg:flex-row flex-col'>
                          <div className='bg-white rounded  h-[343px]  lg:w-[609px] w-full'>
                            <h2 className={`${montserrat.className} pt-[19px] pl-[14px] text-xs font-semibold`}>EU Chart</h2>
                            <div className=' pt-[16px] pr-[12px]  flex gap-x-3 items-baseline  justify-end'>
                              <p className={`pt-[19px] pl-[14px] text-xs font-medium ${montserrat.className}`}>ROI%</p>
                              <input className={`bg-[#F5F5F5] text-xs text-black ${montserrat.className} font-semibold py-[7px] pl-[11px]`} placeholder=''  />
                             <p className={`${poppins.className} font-normal text-xs`}>Buy Price: 30.20</p>
                            </div>
                          <div className="mt-[13px] mx-[10px] border border-white shadow-md rounded-b ">
  
  <div className={`flex pl-[22px] text-xs pr-[10px] py-[10px] font-semibold border border-[#CFCFCF] rounded-t bg-[#F8F8F8]  ${montserrat.className}`}>
    <div className="flex-1 text-left">REGION</div>
    <div className="flex-1 text-center">RANK</div>
    <div className="flex-1 text-center">PRICE</div>
    <div className="flex-1 text-center">PROFIT</div>
    <div className="flex-1 text-center">ROI</div>
  </div>

 
  {EUdata.map((item, i) => (
    <div key={i} className="flex pl-[22px] pr-[10px] py-2 hover:bg-[#F8F8F8] ">
      <div className="flex-1 text-left">
        <Image src={item.region} alt="flag" />
      </div>
      <div className="flex-1 text-center font-semibold text-xs ">{item.rank}</div>
      <div className="flex-1 text-center font-semibold text-xs">{item.price}</div>
      <div className="flex-1 text-center font-semibold text-xs">{item.profit}</div>
      <div className="flex-1 text-center font-semibold text-xs text-[#1BB65D]">{item.roi}</div>
    </div>
  ))}
</div>
                          </div>
                          <div className='bg-white rounded  lg:w-[503px] w-full h-[343px] px-[14px]'>
                            <h2 className={`${montserrat.className} text-[#2F2F2F] font-semibold pt-[19px] pb-[35px] `}>News & Updates</h2>
                            <h2 className={`${poppins.className} text-[#FF9900] font-semibold text-lg pb-[11px]`}>Update Name</h2>
                           <p className={`${poppins.className} text-[#9A9A9A] text-sm font-normal`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                          </div>
                         </div>
             </div>
             </div>
    </div>
  )
}
