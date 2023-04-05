import React from "react";
import { Helmet } from "react-helmet-async";
import AddressFooter from "../components/AddressFooter";

const Artikel = () => {
   return (
      <>
         <Helmet>
            <title>Blog & Berita | SCKB</title>
            <meta
               name="description"
               content="SCKB adalah perusahaan yang bergerak di bidang Management Consultant, Financial Consultant, Information Technology dan Human Resources Management"
            />
            <meta name="keywords" content="SCKB, marketting, keyword3" />
            <meta name="author" content="sckb.co.id" />
         </Helmet>
         <div className="desktop-view">
            <section className=" w-full home-section bg-center relative pt-16 flex">
               <div style={{ flex: 1 }} className="relative px-16 mt-14">
                  <h1 className="font-extrabold lg:text-2xl xl:text-4xl text-[#FD1D26]">
                     Blog & Berita
                  </h1>
                  <div className="w-full min-h-[60%]  mt-2 bg-gray-200/70 p-5">
                     <h1 className="text-2xl font-extrabold">Lorem Ipsum</h1>
                     <p className="text-sm mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, itaque.
                     </p>
                  </div>

                  <div className="absolute bottom-10 left-16">
                     <AddressFooter color="text-gray-600" />
                  </div>
               </div>
            </section>
         </div>
         <div className="mobile-view w-full">
            <div className="relative flex flex-col h-screen w-full">
               {/* <div className="ornament2 top-[5rem] rotate-180 z-[-1] w-full h-1/3 absolute overflow-hidden"></div> */}
               <div className="ornament2 bottom-0 z-[-1] w-full h-1/3 absolute overflow-hidden"></div>

               <div className="mt-32 w-full space-y-2">
                  <h1 className="text-center text-[#FD1D26] text-2xl font-bold">
                     Blog & Berita
                  </h1>

                  <div className=" bg-gray-200/70 min-h-[15rem] p-5 m-5">
                     <h1 className="text-xl font-extrabold">Lorem Ipsum</h1>
                     <p className="text-xs mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, itaque.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Artikel;
