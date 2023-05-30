import React from "react";
import { Helmet } from "react-helmet-async";
import AddressFooter from "../components/AddressFooter";
import Model from "../static/assets/images/model4.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Kontak = () => {
   return (
      <>
         <Helmet>
            <title>Kontak | SCKB</title>
            <meta name="description" content="SCKB adalah perusahaan yang bergerak di bidang Management Consultant, Financial Consultant, Information Technology dan Human Resources Management" />
            <meta name="keywords" content="SCKB, marketting, keyword3" />
            <meta name="author" content="sckb.co.id" />
         </Helmet>
         <div className="desktop-view">
            <section className=" w-full home-section bg-center relative pt-16 flex">
               <div style={{ flex: 1 }} className="relative">
                  <div className="absolute top-14 left-16 space-y-5 w-2/3">
                     <h1 className="font-extrabold lg:text-2xl xl:text-4xl text-[#FD1D26]">Kontak</h1>
                     <h3 className="font-extrabold text-lg">Alamat Kantor</h3>
                     <p className="text-left ">
                        Sampoerna Strategic Square <br /> North Tower 24 Floor
                        <br /> Jl. Jenderal Sudirman No.45 - 46
                        <br /> DKI Jakarta 12930
                     </p>

                     <p className="text-left ">
                        Telephone : 021-50958309 <br /> Handphone/Whatsapp : 085219493972
                     </p>
                     <p className="text-left font-bold">Pertanyaan & saran : info.admin@sckb.co.id</p>

                     <div
                        onClick={() => {
                           window.location.href = "mailto:info.admin@sckb.co.id";
                        }}
                        className="bg-[#1E458A] font-bold flex justify-center  text-xs md:text-base md:w-40 py-2 p-4 rounded-md text-white mx-auto md:mt-20"
                     >
                        <Link to="#">Hubungi Kami</Link>
                     </div>
                  </div>
               </div>
               <div style={{ flex: 1 }} className="overflow-hidden relative">
                  <div className="absolute left-0 w-full h-full">
                     <div className="relative w-full h-full">
                        <img src={Model} alt="model" className="w-full  absolute object-cover bottom-0" />
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <div className="mobile-view">
            <div className="relative flex flex-col h-screen w-full">
               <div className="ornament2 bottom-0 z-[-1] w-full h-2/3 absolute overflow-hidden">
                  <div className="relative w-full h-full">
                     <img src={Model} alt="model1" className="absolute bottom-0  w-full  mt-20" />
                  </div>
               </div>

               <div className="mt-28 px-5 space-y-5">
                  <h1 className="font-extrabold text-center text-2xl text-[#FD1D26]">Kontak</h1>
                  <h3 className="font-extrabold text-lg">Alamat Kantor</h3>
                  <p className="text-left ">
                     Sampoerna Strategic Square <br /> North Tower 24 Floor
                     <br /> Jl. Jenderal Sudirman No.45 - 46
                     <br /> DKI Jakarta 12930
                  </p>

                  <p className="text-left ">
                     Telephone : 021-50958309 <br /> Handphone/Whatsapp : 087780822273
                  </p>
                  <p className="text-left text-sm font-bold">Pertanyaan & saran : info.admin@sckb.co.id</p>
                  <div
                     onClick={() => {
                        window.location.href = "mailto:info.admin@sckb.co.id";
                     }}
                     className="bg-[#1E458A] w-1/2 font-bold flex justify-center  text-xs md:text-base md:w-40 py-2 p-4 rounded-md text-white mx-auto md:mt-20"
                  >
                     <Link to="#">Hubungi Kami</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Kontak;
