"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import searchIcon from "@/app/assets/search.svg";
import star from "@/app/assets/star.svg";
import deviceIcon from "@/app/assets/device.svg";

import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "700", "600"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Devices() {
  const tableRef = useRef();
  const dtRef = useRef(null);
  const [pageInfo, setPageInfo] = useState({
    page: 0,
    pages: 0,
    start: 0,
    end: 0,
    recordsTotal: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const initializeDataTable = async () => {
      try {
      
        const $ = (await import("jquery")).default;
        
       
        await import("datatables.net-dt");
        
     
        const table = $(tableRef.current).DataTable({
          paging: true,
          pageLength: 4,
          searching: true,
          info: false,
          ordering: false,
          lengthChange: false,
          dom: "t",
          language: {
            search: "",
            searchPlaceholder: "Search...",
          },
        });

        dtRef.current = table;
        setPageInfo(table.page.info());

        table.on("draw", () => {
          setPageInfo(table.page.info());
        });

        return () => {
          if (table) {
            table.destroy(true);
          }
        };
      } catch (error) {
        console.error("Error initializing DataTable:", error);
      }
    };

    initializeDataTable();
  }, [isClient]);

  const handleSearch = (e) => {
    if (dtRef.current) {
      dtRef.current.search(e.target.value).draw();
    }
  };

  const goToPage = (page) => {
    if (dtRef.current) {
      dtRef.current.page(page).draw("page");
    }
  };

  const renderPagination = () => {
    if (!pageInfo.pages) return null;
    const pages = [];
    const totalPages = pageInfo.pages;
    const current = pageInfo.page;

    const showEllipsis = (key) => (
      <span key={key} className="px-2">
        ...
      </span>
    );

   
    pages.push(
      <button
        key={0}
        className={`px-3 py-1 rounded ${
          current === 0 ? "bg-[#ff9900] text-white" : ""
        }`}
        onClick={() => goToPage(0)}
      >
        1
      </button>
    );

    if (current > 2) {
      pages.push(showEllipsis("start"));
    }

    
    for (let i = Math.max(1, current - 1); i <= Math.min(totalPages - 2, current + 1); i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-1 rounded ${
            current === i ? "bg-[#ff9900] text-white" : ""
          }`}
          onClick={() => goToPage(i)}
        >
          {i + 1}
        </button>
      );
    }

    
    if (current < totalPages - 3) {
      pages.push(showEllipsis("end"));
    }

    
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages - 1}
          className={`px-3 py-1 rounded ${
            current === totalPages - 1 ? "bg-[#ff9900] text-white" : ""
          }`}
          onClick={() => goToPage(totalPages - 1)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="text-center flex flex-col rounded w-full pb-20  
">
      <h1 className="text-center font-semibold text-[22px] md:mt-[56px] mt-5">
        Devices
      </h1>

      <div className="flex justify-center mt-[12px]">
        <div className="relative w-full md:w-[248px]">
          <Image
            src={searchIcon}
            alt="not found"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
          />
          <input
            className="w-full lg:w-[259px] bg-white pl-10 pr-3 lg:h-34px p-1 h-auto rounded border border-gray-300 
                 focus:outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-[#BDBDBD]"
            placeholder="Search"
            onKeyUp={handleSearch}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="max-w-[709px] w-full mt-[12px]">
          <div className="overflow-x-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.06)] rounded">
            <table
              ref={tableRef}
              className="text-left border-collapse min-w-max w-full"
            >
              <thead
                className={`${montserrat.className} bg-[#F8F8F8] font-semibold text-xs`}
              >
                <tr>
                  <th className="py-3 px-4 text-center">DEVICES</th>
                  <th className="py-3 px-4 text-center">IP LOCATION</th>
                  <th className="py-3 px-4 text-center">LAST ACTIVE</th>
                </tr>
              </thead>
              <tbody className="bg-[#FFFFFF] text-[#6C6A72] text-xs md:text-sm">
                {[
                  ["Device 1", "United Kingdom", "19/01/21"],
                  ["Device 2", "India", "19/01/21"],
                  ["Device 3", "Spain", "19/01/21"],
                  ["Device 4", "United Kingdom", "19/01/21"],
                  ["Device 5", "France", "19/01/21"],
                  ["Device 6", "USA", "19/01/21"],
                  ["Device 7", "Spain", "19/01/21"],
                  ["Device 8", "USA", "19/01/21"],
                  ["Device 9", "United Kingdom", "19/01/21"],
                ].map(([device, location, date], i) => (
                  <tr key={i}>
                    <td className="py-3 px-10">
                      <div className="flex items-center gap-x-[8px]">
                        <Image src={star} alt="notfound" />
                        <span>{device}</span>
                      </div>
                    </td>

                    <td className="py-3 md:px-20 px-7">
                      <div className="flex items-center gap-x-[8px]">
                        <div className="bg-[#F8F8F8] rounded-full">
                          <Image src={deviceIcon} alt="notfound" />
                        </div>
                        <span>{location}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <p>{date}</p>
                      <p className="text-[8px] text-[#9E9E9E]">24 Hours ago</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex lg:flex-row flex-col justify-between text-xs mt-[9px] mb-5">
            <span className="text-[#9E9E9E] mb-2 md:mb-0">
              Showing {pageInfo.start + 1} to {pageInfo.end} of{" "}
              {pageInfo.recordsTotal} Entries
            </span>
            <div className="rounded border-[#D8D6DE] border-[1px] text-[#909090] bg-white px-2 py-1 mb-4 md:mb-0 flex items-center justify-center md:justify-start gap-2">
            
              <button
                className="px-3 py-1 disabled:opacity-50 rounded"
                onClick={() => goToPage(pageInfo.page - 1)}
                disabled={pageInfo.page === 0}
              >
                Previous
              </button>

              {renderPagination()}

         
              <button
                className="px-3 py-1 disabled:opacity-50 rounded"
                onClick={() => goToPage(pageInfo.page + 1)}
                disabled={pageInfo.page + 1 >= pageInfo.pages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}