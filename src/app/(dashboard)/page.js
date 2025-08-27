import Image from "next/image";
import Sidebar from "@/app/components/sidebar";
import { Poppins } from "next/font/google";
import Navbar from '@/app/components/navbar'
import Card from '@/app/components/card';
import ActivationCode from '@/app/components/activationCode';

import Devices from "@/app/components/devices";
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400",'100','200','300' ,"500", "700",'600'], 
});

export default function Home() {
  return (
   
     
    <div className="flex-1 ml-15 md:ml-0 overflow-x-hidden ">
 <div>
  <Navbar heading="Dashboard"/>
</div>
  <div className="mx-[33px]  ">
 <Card/>
 <ActivationCode/>
<Devices/>
  </div>
  </div>
   
  );
}
