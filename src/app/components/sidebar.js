"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import webappIcon from "@/app/assets/webappIcon.svg";
import shoppingcart from "@/app/assets/shoppingcart.svg";
import profileIcon from "@/app/assets/pIcon.svg";
import HomeIcon from "@/app/assets/home.svg";
import { Montserrat } from "next/font/google";
import { redirect } from "next/navigation";
import { useSidebar } from "@/app/sidebarContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

   
      <div
        className={`bg-[#FF9900] z-50 fixed md:sticky top-0 left-0 h-screen transition-all duration-300 
        ${isOpen ? "w-[247px]" : "w-[60px] md:w-21"}`}
      >
        <div className="h-full">
         
          <div
            className={`flex items-center pt-5 ${
              isOpen ? "justify-center" : "justify-end"
            }`}
          >
            <Image src={logo} alt="notfound" />
          </div>

          <button
            className={`bg-white text-[#FF9900] w-[213px] h-[40px] ml-[16px] rounded mt-12 font-semibold ${montserrat.className} ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Upgrade
          </button>

          <div
            className={`hover:bg-white/20 pl-1 md:pl-[18px] ${
              isOpen ? "w-[213px]" : "w-10 md:w-15"
            } h-[40px] mr-[18px] ml-[16px] rounded flex text-white items-center gap-x-[11px] mt-7 cursor-pointer`}
            onClick={() => {
              redirect("/");
            }}
          >
            <Image src={HomeIcon} alt="" />
            <p className={`${isOpen ? "block" : "hidden"} cursor-pointer`}>
              Dashboard
            </p>
          </div>

          <div
            className={`hover:bg-white/20 pl-1 md:pl-[18px] ${
              isOpen ? "w-[213px]" : "w-10 md:w-15"
            } h-[40px] mr-[18px] ml-[16px] rounded flex text-white items-center gap-x-[11px] mt-7 cursor-pointer`}
            onClick={() => {
              redirect("/webapp");
            }}
          >
            <Image src={webappIcon} alt="" />
            <p className={`${isOpen ? "block" : "hidden"} cursor-pointer`}>
              Web App
            </p>
          </div>

          <div
            className={`hover:bg-white/20 pl-1 md:pl-[18px] ${
              isOpen ? "w-[213px]" : "w-10 md:w-15"
            } h-[40px] mr-[18px] ml-[16px] rounded flex text-white items-center gap-x-[11px] mt-7 cursor-pointer`}
            onClick={() => {
              redirect("/Monitoring");
            }}
          >
            <Image src={profileIcon} alt="" />
            <p className={`${isOpen ? "block" : "hidden"}`}>VA Monitoring</p>
          </div>

          <div
            className={`hover:bg-white/20 pl-1 md:pl-[18px] ${
              isOpen ? "w-[213px]" : "w-10 md:w-15"
            } h-[40px] mr-[18px] ml-[16px] rounded flex text-white items-center gap-x-[11px] mt-7 cursor-pointer`}
            onClick={() => {
              redirect("/productTracking");
            }}
          >
            <Image src={shoppingcart} alt="" />
            <p className={`${isOpen ? "block" : "hidden"}`}>
              Product Tracking
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
