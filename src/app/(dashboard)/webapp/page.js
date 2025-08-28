'use client'

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import search from '@/app/assets/searchIcon.svg'
import Image from 'next/image';
import searchIcon from "@/app/assets/search2.svg"
import productdata from '@/app/productdata.json'
import dots from '@/app/assets/dots.svg'
import cross from '@/app/assets/cross.svg'
import eye from '@/app/assets/eye.svg'
import Navbar from '@/app/components/navbar';
import { useEffect, useRef, useState } from 'react';

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function WebApp() {
  const tableRef = useRef(null);
  const dtRef = useRef(null);
  const [mainSearch, setMainSearch] = useState('');
  const [isClient, setIsClient] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageInfo, setPageInfo] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !tableRef.current) return;

    const initializeDataTable = async () => {
      try {
        // Dynamically import jQuery and DataTables
        const $ = (await import("jquery")).default;
        await import("datatables.net");
        
        dtRef.current = $(tableRef.current).DataTable({
          pageLength: 5,
          lengthChange: false,
          searching: true,
          info: false,
          paging: true,
          dom: 't', // hide default pagination
        });

        // Set initial total pages + info
        const info = dtRef.current.page.info();
        setTotalPages(info.pages);
        setPageInfo(info);

        // Update current page and info on page change
        dtRef.current.on('draw page', () => {
          const newInfo = dtRef.current.page.info();
          setCurrentPage(newInfo.page);
          setPageInfo(newInfo);
        });

        return () => {
          if (dtRef.current) dtRef.current.destroy(true);
        };
      } catch (error) {
        console.error("Error initializing DataTable:", error);
      }
    };

    initializeDataTable();
  }, [isClient]);

  const handleMainSearch = () => {
    if (dtRef.current) {
      dtRef.current.search(mainSearch).draw();
    }
  };

  const handleTableSearch = (e) => {
    if (dtRef.current) {
      dtRef.current.search(e.target.value).draw();
    }
  };

  const goToPage = (page) => {
    if (dtRef.current) {
      dtRef.current.page(page).draw('page');
    }
  };

  const goToPreviousPage = () => {
    if (dtRef.current && currentPage > 0) {
      dtRef.current.page('previous').draw('page');
    }
  };

  const goToNextPage = () => {
    if (dtRef.current && currentPage < totalPages - 1) {
      dtRef.current.page('next').draw('page');
    }
  };

  return (
    <div className='bg-[#EDEDED] pb-7 w-full h-screen overflow-x-hidden'>
      <div className="flex-1 ml-15 md:ml-0">
        <Navbar heading="Web App"/>
        <div className={` mt-[30px] mx-[33px] ${poppins.className} `}>
          <div className='border-b border-[#D3D3D3] pb-[22px]'>
            <h1 className={`text-xl font-semibold ${poppins.className} text-[#2F2F2F] pb-[15px] text-[min(3vw,1.25rem)]`}>Search Products</h1>
            <div className='flex justify-between items-baseline gap-2 '>
              <div className="relative w-full mt-[12px]">
                <input
                  value={mainSearch}
                  onChange={(e) => setMainSearch(e.target.value)}
                  className={`w-full bg-white border border-[#D8D6DE] outline-0 text-[min(2vw,1.125rem)] h-[35px] md:h-[55px] pl-8 md:pl-[47px] rounded ${montserrat.className} placeholder-[#BDBDBD] placeholder:font-semibold`}
                  placeholder="Search Product Or ASIN"
                />
                <Image src={search} alt="not found" className="absolute top-1/2 left-3 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleMainSearch}
                  className={`bg-[#FF9900] w-[80px] md:w-[159px] h-[35px] md:h-[55px] ${montserrat.className} text-white rounded text-sm md:text-base`} >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between pt-[29px]'>
              <h2 className='font-semibold text-xl text-[min(3vw,1.25rem)] '>Recently Viewed</h2>
              <div className="relative w-[250px]">
                <input
                  onChange={handleTableSearch}
                  className={`w-full bg-white border border-[#D8D6DE] outline-0 h-[35px] pl-[35px] rounded ${montserrat.className} placeholder-[#BDBDBD] placeholder:font-semibold placeholder:text-sm`}
                  placeholder="Search"
                />
                <Image src={searchIcon} alt="not found" className="absolute top-1/2 left-2 -translate-y-1/2 w-4 h-4" />
              </div>
            </div>

            <div className="overflow-x-auto shadow-lg shadow-black/5 mt-[15px]  rounded">
              <table ref={tableRef} className="min-w-[900px] w-full border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8] text-sm font-semibold">
                    <th className=" text-center pt-[20px] pb-[15px]">TITLE</th>
                    <th className=" text-center pt-[20px] pb-[15px]">ASIN</th>
                    <th className="text-center pt-[20px] pb-[15px]">DATE</th>
                    <th className="text-center pt-[20px] pb-[15px]">VERSION</th>
                    <th className=" text-center pt-[20px] pb-[15px]">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {productdata.map((e, index) => (
                    <tr key={index} className={`${montserrat.className} bg-[#ffffff] text-sm text-[#6E6B7B] md:text-lg text-[min(2vw,1.125rem)]`} >
                      <td className=" text-center pt-[31px] pb-[25px]">{e.product}</td>
                      <td className=" text-center pt-[31px] pb-[25px]">{e.Asin}</td>
                      <td className=" text-center pt-[31px] pb-[25px]">19/01/21</td>
                      <td className=" text-center pt-[31px] pb-[25px]">
                        <span className={ e.label === "Web App" ? "bg-[#7367F01F] rounded-full text-[#7367F0] py-[5px] px-[15px] font-semibold" : "bg-orange-200 rounded-full text-[#FF8000] py-[5px] px-[15px] font-semibold" } >
                          {e.label}
                        </span>
                      </td>
                      <td className=" text-center pt-[31px] pb-[25px]">
                        <div className="font-bold cursor-pointer flex gap-x-[15px] items-center justify-center">
                          <Image src={eye} alt="not found" />
                          <Image src={cross} alt="not found" />
                          <Image src={dots} alt="not found" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination + Info */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-5 text-xs">
              {/* Showing info */}
              <span className="text-[#9E9E9E] mb-2 md:mb-0">
                {pageInfo && (
                  <>Showing {pageInfo.start + 1} to {pageInfo.end} of {pageInfo.recordsTotal} entries</>
                )}
              </span>

              {/* Pagination buttons */}
              <div className="flex gap-2 bg-white border border-[#D8D6DE] py-1">
                {/* Previous Button */}
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                  className='px-3 py-1 rounded disabled:opacity-50 '
                >
                  Previous
                </button>
                {(() => {
                  const maxVisible = 6;
                  let start = Math.max(0, currentPage - Math.floor(maxVisible / 2));
                  let end = Math.min(totalPages, start + maxVisible);

                  if (end - start < maxVisible) {
                    start = Math.max(0, end - maxVisible);
                  }

                  return Array.from({ length: end - start }).map((_, idx) => {
                    const page = start + idx;
                    return (
                      <button
                        key={page}
                        className={`px-3 py-[7.5px] mx-1 rounded  ${currentPage === page ? 'bg-[#ff9900] text-white' : 'opacity-50'}`}
                        onClick={() => goToPage(page)}
                      >
                        {page + 1}
                      </button>
                    );
                  });
                })()}

                {/* Next Button */}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages - 1}
                  className='px-3 py-1 rounded disabled:opacity-50 '
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}