'use client'
import React, { useEffect, useRef } from 'react'
import Navbar from '@/app/components/navbar'
import Image from 'next/image'
import { Poppins, Montserrat } from "next/font/google"
import searchIcon from "@/app/assets/search2.svg"
import viewIcon from "@/app/assets/view.svg"
import productdata from '@/app/productdata.json'
import cross2 from '@/app/assets/cross2.svg'
import box from '@/app/assets/box.svg'
import { redirect } from 'next/navigation'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
});


  


export default function Monitoring() {
  const tableRef = useRef(null)

useEffect(() => {
  let table;

  const loadDataTables = async () => {
    if (typeof window !== "undefined") {
      const $ = (await import("jquery")).default;
      await import("datatables.net-dt");

      // 🚀 Prevent DataTables from throwing alerts
      $.fn.dataTable.ext.errMode = "none";

      table = $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        pagingType: "full_numbers",
        pageLength: 4,
        lengthChange: false,
        info: false,
        dom: "t",
      });

      $('#monitoringSearch').on('keyup', function () {
        table.search(this.value).draw();
      });

      function renderPagination() {
        let pageInfo = table.page.info();

        $('#monitoringInfo').text(
          `Showing ${pageInfo.recordsDisplay === 0 ? 0 : pageInfo.start + 1} to ${pageInfo.end} of ${pageInfo.recordsDisplay} entries`
        );

        let pages = '';
        for (let i = 0; i < pageInfo.pages; i++) {
          pages += `<button class="${i === pageInfo.page ? 'bg-[#ff9900] text-white' : 'text-[#909090]'} px-3 py-[7.5px] mx-1 rounded">${i + 1}</button>`;
        }
        $('#monitoringPagination').html(`
          <button id="prevPage" class="px-3 py-1 ${pageInfo.page === 0 ? 'opacity-50' : ''}">Previous</button>
          ${pages}
          <button id="nextPage" class="px-3 py-1 ${pageInfo.page === pageInfo.pages - 1 ? 'opacity-50' : ''}">Next</button>
        `);

        $('#prevPage').on('click', () => {
          if (pageInfo.page > 0) table.page(pageInfo.page - 1).draw('page');
        });
        $('#nextPage').on('click', () => {
          if (pageInfo.page < pageInfo.pages - 1) table.page(pageInfo.page + 1).draw('page');
        });
        $('#monitoringPagination button').each(function (i) {
          if (!$(this).attr('id')) {
            $(this).on('click', () => table.page(i - 1).draw('page'));
          }
        });
      }

      renderPagination();
      table.on('draw', renderPagination);
    }
  };

  loadDataTables();

  return () => {
    if (table) {
      table.destroy();
    }
  };
}, []);

  return (
    <div className="bg-[#EDEDED] pb-7 h-screen w-full  overflow-x-hidden">
      <div className="flex-1 ml-15 md:ml-0">
        <Navbar heading="VA Monitoring" />
        <div className={`mt-[30px] mx-[33px] ${poppins.className}`}>
          <div className="flex flex-col md:flex-row justify-between pt-0 md:pt-[29px]">
            <div className="flex items-center justify-between md:justify-start gap-3 md:mb-0 mb-2">
              <h2 className="font-semibold text-xl text-[min(3vw,1.25rem)] text-[#2F2F2F]">
                Calender Time Tracking
              </h2>
              <button className={`flex items-center gap-2 text-white bg-[#FF9900] rounded lg:py-[7px] lg:w-[84px] lg:h-[29px] py-1 px-[9px] ${montserrat.className} text-xs`} >
                <Image src={viewIcon} alt="not found" className="4 h-4" />
                VIEW
              </button>
            </div>
            <div className="relative">
              <input
                id="monitoringSearch"
                className={`w-full bg-white border-1 border-[#D8D6DE] outline-0 h-[35px] pl-[38px] rounded ${montserrat.className} placeholder:text-[#BDBDBD] placeholder:font-semibold placeholder:text-sm`}
                placeholder="Search "
              />
              <Image src={searchIcon} alt="not found" className="absolute bottom-2 md:bottom-2 left-3" />
            </div>
          </div>

          <div className="overflow-x-auto shadow-lg shadow-black/5 mt-[15px]">
            <table ref={tableRef} id="monitoringTable" className="min-w-[900px] w-full">
              <thead className={`bg-[#F8F8F8] text-sm font-semibold ${montserrat.className}`} >
                <tr className="text-center">
                  <th className=" py-[15px] cursor-pointer" onClick={() => redirect('/monitoring/profile')} > USER </th>
                  <th className="">EMAIL</th>
                  <th className="">LAST ACTIVE</th>
                  <th className="">WAGE P/H</th>
                  <th className="">ACCOUNT</th>
                  <th className="">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {productdata.map((e, index) => (
                  <tr
                    key={index}
                    className={`${montserrat.className} bg-white text-xs md:text-sm text-[#6E6B7B]`}
                  >
                    <td className="py-[25px] text-center font-semibold lg:text-lg flex items-center justify-center gap-2">
                      <Image src={box} alt="not found" />
                      {e.User}
                    </td>

                    <td className="text-center font-semibold lg:text-lg">
                      {e.Email}
                    </td>

                    <td className="text-center">
                      <p className="lg:text-lg font-semibold">19/01/21</p>
                      <p className="text-xs">24 hours ago</p>
                    </td>

                    <td className="text-center">
                      <select className="border border-[#D8D6DE] outline-0 rounded md:w-[130px] w-[90px] md:h-[35px] h-[30px]">
                        <option>Wage p/h</option>
                        <option>2.30</option>
                        <option>2.30</option>
                        <option>2.30</option>
                        <option>2.30</option>
                      </select>
                    </td>

                    <td className="text-center">
                      <button
                        className={`cursor-pointer border-1 border-[#FF9900] rounded text-[#FF9900] text-xs ${montserrat.className} md:w-[71px] w-[50px] md:h-[29px] h-[22px]`}
                      >
                        VIEW
                      </button>
                    </td>

                    <td className="text-center">
                      <div className="flex items-center justify-center cursor-pointer">
                        <Image src={cross2} alt="not found" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex lg:flex-row flex-col justify-between text-xs mt-[9px] mb-5">
             
             
  <span id="monitoringInfo" className="text-[#9E9E9E] text-center md:text-start mb-2 md:mb-0">
    Showing 0 to 0 of 0 entries
  </span>
            {/* <span className="text-[#9E9E9E] text-center md:text-start">
             
            </span> */}
            <div id="monitoringPagination" className=" justify-center md:justify-start rounded border-[#D8D6DE] border-[1px] text-[#909090] bg-white px-[10px] py-[4px] mb-4 md:mb-0 flex items-center">
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
