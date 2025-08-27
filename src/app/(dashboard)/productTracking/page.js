'use client'
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/navbar";
import productdata from "@/app/productdata.json";
import Image from "next/image";
import searchIcon from "@/app/assets/search2.svg";
import arrowdrop from "@/app/assets/arrowdrop.svg";

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "700", "600"],
});

export default function ProductTracking() {
  const tableRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    const initializeDataTable = async () => {
      try {
        // Dynamically import jQuery and DataTables
        const $ = (await import("jquery")).default;
        await import("datatables.net-dt");
        
        const initialLen = Number(document.getElementById("entriesSelect")?.value) || 10;

        const table = $(tableRef.current).DataTable({
          paging: true,
          searching: true,
          ordering: true,
          info: false,
          pageLength: initialLen,
          lengthChange: false, 
          dom: "t", 
        });

        // Search functionality
        $("#productSearch").on("keyup", function () {
          table.search(this.value).draw();
        });

        // Entries select functionality
        $("#entriesSelect").on("change", function () {
          const len = Number(this.value) || 10;
          table.page.len(len).draw();
        });

        // Pagination rendering
        function renderPagination() {
          const info = table.page.info();
          let html = "";

          html += `<button id="prevPage" class="px-3 py-1 ${info.page === 0 ? "opacity-50 pointer-events-none" : ""}">Previous</button>`;

          for (let i = 0; i < info.pages; i++) {
            html += `<button class="px-3 py-1 mx-1 rounded ${i === info.page ? "bg-[#ff9900] text-white" : "text-[#909090]"}">${i + 1}</button>`;
          }

          html += `<button id="nextPage" class="px-3 py-1 ${info.page === info.pages - 1 ? "opacity-50 pointer-events-none" : ""}">Next</button>`;

          $("#productPagination").html(html);

          // Event bindings
          $("#prevPage").on("click", () => {
            if (info.page > 0) table.page(info.page - 1).draw("page");
          });
          $("#nextPage").on("click", () => {
            if (info.page < info.pages - 1) table.page(info.page + 1).draw("page");
          });

          $("#productPagination button").each(function (i) {
            if (!$(this).attr("id")) {
              $(this).on("click", () => table.page(i - 1).draw("page"));
            }
          });

          // Showing info
          const start = info.recordsDisplay === 0 ? 0 : info.start + 1;
          const end = info.recordsDisplay === 0 ? 0 : info.end;
          $("#productInfo").text(`Showing ${start} to ${end} of ${info.recordsDisplay} Entries`);
        }

        renderPagination();
        table.on("draw", renderPagination);

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

  return (
    <div className="bg-[#EDEDED] pb-7 w-full h-screen overflow-x-hidden">
      <div className="flex-1 ml-15 md:ml-0 ">
        <Navbar heading="Product Tracking" />

        <div className="mt-[30px] mx-[33px]">
          {/* Top Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-[15px] ">
            <span
              className={`text-sm text-normal text-[#696969] ${poppins.className} mb-2 flex items-center gap-x-[8px]`}
            >
              Show
              <span className="relative inline-block">
                <select
                  id="entriesSelect"
                  defaultValue="10"
                  className={`${montserrat.className} text-[#4B4B4B] appearance-none md:px-[6px] px-3 bg-white border-1 rounded py-2 md:py-0 md:w-[46px] w-full md:h-[35px] h-auto border-[#D8D6DE] font-semibold focus:outline-none focus:ring-0`}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
                <Image
                  src={arrowdrop}
                  alt="not found"
                  className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 "
                />
              </span>
              Entries
            </span>

            <div className="relative w-full md:w-auto">
              <input
                id="productSearch"
                className={`w-full md:w-[197px] bg-white border-1 border-[#D8D6DE] outline-0 h-[35px] pl-[35px] rounded ${montserrat.className} placeholder:text-[#BDBDBD] placeholder:font-semibold placeholder:text-sm `}
                placeholder="Search "
              />
              <Image src={searchIcon} alt="not found" className="absolute bottom-2 left-2" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow-lg shadow-black/5">
            <table ref={tableRef} className={`w-full min-w-[900px] ${montserrat.className}`}>
              <thead className="bg-[#F8F8F8] font-semibold text-xs md:text-sm">
                <tr>
                  <th className="py-[15px] text-left px-4">ID</th>
                  <th className="py-[15px] text-left px-4">URL</th>
                  <th className="py-[15px] text-center px-4">TARGET PRICE</th>
                  <th className="py-[15px] text-left px-4">PREVIOUS PRICE</th>
                  <th className="py-[15px] text-left px-4">POSTAL CODE</th>
                  <th className="py-[15px] text-left px-4">PRICE</th>
                  <th className="py-[15px] text-left px-4">INSTOCK</th>
                  <th className="py-[15px] text-left px-4">STATUS</th>
                </tr>
              </thead>
              <tbody className={`bg-white text-[#6E6B7B] text-xs md:text-sm ${poppins.className}`}>
                {productdata.map((e, index) => (
                  <tr key={index}>
                    <td className="py-[18px] px-4">{e.id}</td>
                    <td className="py-[18px] px-4 text-[#0898D6F7]">{e.url}</td>
                    <td className="py-[18px] px-4 text-center">{e.Targetprice}</td>
                    <td className="py-[18px] px-4">{e.Price}</td>
                    <td className="py-[18px] px-4">{e.PostalCode || ""}</td>
                    <td className="py-[18px] px-4">{e.Price}</td>
                    <td className="py-[18px] px-4">{e.Instock || ""}</td>
                    <td className="py-[18px] px-4">{e.Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex lg:flex-row flex-col justify-between text-xs mt-[9px] mb-5">
            <span id="productInfo" className="text-[#9E9E9E] text-center md:text-start mb-2 md:mb-0">
              Showing 0 to 0 of 0 Entries
            </span>
            <div
              id="productPagination"
              className="rounded border-[#D8D6DE] border-[1px] text-[#909090] bg-white pl-[16px] pr-[3px] py-[4px] mb-4 md:mb-0 flex items-center justify-center md:justify-start"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}