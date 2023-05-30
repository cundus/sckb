import React from "react";
import { Link } from "react-router-dom";
import Model1 from "../static/assets/images/model1.png";
import Model2 from "../static/assets/images/model2.png";
import ServiceIcon1 from "../static/assets/images/layanan1.svg";
import ServiceIcon2 from "../static/assets/images/layanan2.svg";
import ServiceIcon3 from "../static/assets/images/layanan3.svg";
import ServiceIcon4 from "../static/assets/images/layanan4.svg";
import {
   LogoBCA,
   LogoBankBanten,
   LogoBNI,
   LogoBankKalsel,
   LogoBPR,
   LogoBWS,
   LogoHeritage,
   LogoTaspen,
   LogoWorley,
   LogoAsabri,
   LogoAKBPI,
} from "../static/assets/images/logo-mitra";
import AddressFooter from "../components/AddressFooter";
import { Helmet } from "react-helmet-async";

const PARTNER = [
   LogoBNI,
   LogoBCA,
   LogoBWS,
   LogoBankBanten,
   LogoBankKalsel,
   LogoBPR,
   LogoHeritage,
   LogoTaspen,
   LogoWorley,
   LogoAsabri,
];

function Home() {
   return (
      <div className="">
         <>
            <Helmet>
               <title>Beranda | SCKB</title>
               <meta
                  name="description"
                  content="SCKB adalah perusahaan yang bergerak di bidang Management Consultant, Financial Consultant, Information Technology dan Human Resources Management"
               />
               <meta name="keywords" content="SCKB, marketting, keyword3" />
               <meta name="author" content="sckb.co.id" />
            </Helmet>
            <div className="desktop-view h-full wfull">
               <div className="h-[48rem] w-full home-section bg-center relative pt-16 ">
                  <div className="absolute left-8 md:left-14 md:bottom-[50%] lg:bottom-28 ">
                     <div>
                        <h1 className="text-2xl lg:text-6xl  font-extrabold text-[#FD1D26]">
                           Kami Solusi
                        </h1>
                        <h1 className="text-2xl lg:text-6xl  font-extrabold text-[#F79520]">
                           Bisnis Anda
                        </h1>
                        <p className="tagline">Management Consultant</p>
                        <p className="tagline">Financial Consultant</p>
                        <p className="tagline">Information Technology</p>
                        <p className="tagline">Human Resource Management</p>
                     </div>
                     <div
                        onClick={() => {
                           window.location.href =
                              "mailto:info.admin@sckb.co.id";
                        }}
                        className="bg-[#1E458A] font-bold flex justify-center  text-xs md:text-base md:w-40 py-2 p-4 rounded-md text-white mx-auto md:mt-20"
                     >
                        <Link to="#">Hubungi Kami</Link>
                     </div>
                  </div>
                  <img src={Model1} alt="model" className="image-model" />
               </div>
               {/* flex home-section2 p-5 flex-col justify-center items-center space-y-2 */}
               <div className="flex home-section2 p-5 flex-col justify-center items-center space-y-2">
                  <div className="">
                     <h1 className="text-center font-extrabold text-2xl">
                        Mitra Kami
                     </h1>
                     <div className="overflow-hidden  flex justify-between items-center space-x-10">
                        <div className="partner-logo">
                           <img
                              src={LogoBNI}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoBCA}
                              alt="partner"
                              className="w-full h-full object-cover "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoBWS}
                              alt="partner"
                              className="w-full h-full object-cover "
                           />
                        </div>
                        <div className="overflow-hidden w-[10rem] h-32  flex justify-center items-end">
                           <img
                              src={LogoBankBanten}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoBankKalsel}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                     </div>
                     <div className="overflow-hidden flex justify-between items-end space-x-10">
                        <div className="partner-logo">
                           <img
                              src={LogoBPR}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoHeritage}
                              alt="partner"
                              className="w-full h-full object-contaian "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoWorley}
                              alt="partner"
                              className="w-full h-full object-cover "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoTaspen}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo">
                           <img
                              src={LogoAsabri}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                     </div>
                  </div>
                  <div>
                     <h1 className="text-center font-extrabold text-2xl">
                        Keanggotaan
                     </h1>
                     <div className="flex justify-center mt-3">
                        <div className="partner-logo">
                           <img
                              src={LogoAKBPI}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                     </div>
                  </div>

                  <div className="w-full">
                     <h1 className="text-center font-extrabold text-2xl">
                        Layanan Kami
                     </h1>
                     <div className="overflow-hidden flex gap-5 justify-center w-full items-end ">
                        <div className="service-icon">
                           <img
                              src={ServiceIcon1}
                              alt="partner"
                              className="w-full h-full object-cover"
                           />
                           <p className="text-center font-bold w-2/3">
                              Management Consultant
                           </p>
                        </div>
                        <div className="service-icon">
                           <img
                              src={ServiceIcon2}
                              alt="partner"
                              className="w-full h-full object-cover"
                           />
                           <p className="text-center font-bold w-2/3">
                              Financial Consultant
                           </p>
                        </div>
                        <div className="service-icon">
                           <img
                              src={ServiceIcon3}
                              alt="partner"
                              className="w-full h-full object-cover"
                           />
                           <p className="text-center font-bold w-2/3">
                              Information Technology
                           </p>
                        </div>
                        <div className="service-icon">
                           <img
                              src={ServiceIcon4}
                              alt="partner"
                              className="w-full h-full object-cover"
                           />
                           <p className="text-center font-bold w-2/3">
                              Human Resource Management
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <section className="flex home-section3">
                  <div style={{ flex: 1 }} className="rotate-180 p-10 ">
                     <div className="p-10 ">
                        <h1 className="text-[#FD1D26] md:text-4xl xl:text-6xl font-extrabold text-right">
                           Sekarang juga
                        </h1>
                        <h1 className="text-[#FD1D26] md:text-4xl xl:text-6xl font-extrabold my-1 text-right">
                           Segera Ubah
                        </h1>
                        <h1 className="text-[#F79520] md:text-4xl xl:text-6xl font-extrabold my-1 text-right">
                           Pola Bisnis Anda
                        </h1>
                        <p className="text-xl font-bold text-right">
                           Kami siap membantu meningkatkan pertumbuhan bisnis
                        </p>
                     </div>
                     <div className="flex justify-center items-center">
                        <div
                           onClick={() => {
                              window.location.href =
                                 "mailto:info.admin@sckb.co.id";
                           }}
                           className="font-bold text-xl bg-[#1E458A] text-white px-4 py-2  text-center rounded-xl"
                        >
                           <Link to="#">Hubungi kami</Link>
                        </div>
                     </div>
                  </div>
                  <div style={{ flex: 1 }} className="relative rotate-180 ">
                     <div className="absolute w-full h-full bottom-0 overflow-hidden right-[-6.7rem]">
                        <div className="relative w-full h-full ">
                           <img
                              src={Model2}
                              alt="model2"
                              className="absolute w-full bottom-[-6rem] right-0"
                           />
                        </div>
                     </div>
                     <div className="absolute bottom-10 left-16">
                        <AddressFooter color="text-white" />
                     </div>
                  </div>
               </section>
            </div>
            <div className="mobile-view ">
               <section className="mobile-home-container flex flex-col relative ">
                  <div className="ornament bottom-0 z-[1] w-full h-1/2 absolute overflow-hidden">
                     <div className="w-full h-full relative">
                        <img
                           src={Model1}
                           alt="model1"
                           className="w-full h-full object-top object-cover absolute bottom-[-4rem]"
                        />
                     </div>
                  </div>
                  <div className="flex-[1] mt-36 self-center justify-self-center ">
                     <h1 className="text-4xl font-extrabold text-[#FD1D26]">
                        Kami Solusi
                     </h1>
                     <h1 className="text-3xl font-extrabold text-[#F79520]">
                        Bisnis Anda
                     </h1>
                     <p className="tagline">Management Consultant</p>
                     <p className="tagline">Financial Consultant</p>
                     <p className="tagline">Information Technology</p>
                     <p className="tagline">Human Resource Management</p>
                     <div
                        onClick={() => {
                           window.location.href =
                              "mailto:info.admin@sckb.co.id";
                        }}
                        className="bg-[#1E458A] font-bold flex justify-center text-xs py-2 w-1/2 rounded-md text-white mx-auto mt-20"
                     >
                        <Link to="#">Hubungi Kami</Link>
                     </div>
                  </div>
               </section>
               <section className="h-screen w-full">
                  <div className="w-full h-full py-5 flex flex-col justify-start items-center relative">
                     <div className="bg-diagonal bottom-0"></div>
                     <h1 className="text-xl font-bold">Mitra kami</h1>

                     <div className="overflow-hidden w-full flex justify-evenly items-center">
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoBNI}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoBCA}
                              alt="partner"
                              className="w-full h-full object-cover "
                           />
                        </div>
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoBWS}
                              alt="partner"
                              className="w-full h-full object-cover "
                           />
                        </div>
                     </div>

                     <div className="overflow-hidden w-full flex justify-evenly items-center">
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoBankBanten}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoBankKalsel}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoBPR}
                              alt="partner"
                              className="w-full h-full object-contain scale-50"
                           />
                        </div>
                     </div>
                     <div className="overflow-hidden w-full flex justify-evenly items-center">
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoHeritage}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoWorley}
                              alt="partner"
                              className="w-full h-full object-cover "
                           />
                        </div>
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoTaspen}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                     </div>
                     <div className="overflow-hidden w-full flex justify-evenly items-center">
                        <div className="partner-logo-mobile">
                           <img
                              src={LogoAsabri}
                              alt="partner"
                              className="w-full h-full object-contain "
                           />
                        </div>
                     </div>

                     <h1 className="text-xl font-bold mt-5">Keanggotaan</h1>
                     <div className="partner-logo-mobile mt-2">
                        <img
                           src={LogoAKBPI}
                           alt="partner"
                           className="w-full h-full object-contain "
                        />
                     </div>
                     <h1 className="text-xl font-bold mt-5">Layanan kami</h1>

                     <div className=" w-full my-5 flex justify-between space-x-5 items-center">
                        <div className="service-icon-mobile ">
                           <img
                              src={ServiceIcon1}
                              alt="partner"
                              className=" "
                           />
                           <p className="text-center font-bold w-2/3">
                              Management Consultant
                           </p>
                        </div>
                        <div className="service-icon-mobile ">
                           <img
                              src={ServiceIcon2}
                              alt="partner"
                              className=" "
                           />
                           <p className="text-center font-bold w-2/3">
                              Financial Consultant
                           </p>
                        </div>
                     </div>
                     <div className=" w-full flex items-center space-x-5">
                        <div className="service-icon-mobile ">
                           <img
                              src={ServiceIcon3}
                              alt="partner"
                              className=" "
                           />
                           <p className="text-center font-bold w-2/3">
                              Information Technology
                           </p>
                        </div>
                        <div className="service-icon-mobile ">
                           <img
                              src={ServiceIcon4}
                              alt="partner"
                              className=" "
                           />
                           <p className="text-center font-bold w-2/3">
                              Human Resource Management
                           </p>
                        </div>
                     </div>
                  </div>
               </section>
               <section className="h-screen w-full">
                  <div className="w-full h-full py-5 flex flex-col justify-start items-center relative">
                     <div className="bg-diagonal diagonal2 top-0"></div>
                     <div className="ornament bottom-0 z-[1] w-full h-1/3 absolute overflow-hidden">
                        <img src={Model2} alt="model1" className="flex-1" />
                     </div>
                     <div className="flex-[1] mt-36 self-center justify-self-center ">
                        <h1 className="text-4xl text-right font-extrabold text-[#FD1D26]">
                           Sekarang Juga
                        </h1>
                        <h1 className="text-4xl text-right font-extrabold text-[#FD1D26]">
                           Segera Ubah
                        </h1>
                        <h1 className="text-3xl text-right font-extrabold text-[#F79520]">
                           Pola Bisnis Anda
                        </h1>
                        <p className="tagline text-right">
                           Kami siap membantu meningkatkan
                        </p>
                        <p className="tagline text-right">
                           pertumbuhan bisnis anda
                        </p>

                        <div
                           onClick={() => {
                              window.location.href =
                                 "mailto:info.admin@sckb.co.id";
                           }}
                           className="bg-[#1E458A] font-bold flex justify-center text-xs py-2 w-1/2 rounded-md text-white mx-auto mt-20"
                        >
                           <Link to="#">Hubungi Kami</Link>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </>
      </div>
   );
}

export default Home;
