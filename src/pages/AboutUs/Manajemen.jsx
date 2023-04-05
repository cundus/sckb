import React from "react";
import AddressFooter from "../../components/AddressFooter";
import { Helmet } from "react-helmet-async";
import D1 from "../../static/assets/images/manajemen/d1.svg";
import D2 from "../../static/assets/images/manajemen/d2.svg";
import D3 from "../../static/assets/images/manajemen/d3.svg";
import D4 from "../../static/assets/images/manajemen/d4.svg";

const DATA = [
   {
      foto: D1,
      nama: "Setiawan Darmaji",
      jabatan: "Komisaris Utama",
      exp: "Berpengalaman dalam mengembangkan skema pembiayaan untuk Bisnis Mikro berdasarkan pendekatan Business to Business (B2B), Business to Customer (B2C), dan Risk Management.",
   },
   {
      foto: D2,
      nama: "Zulfikar Kesuma",
      jabatan: "Komisaris",
      exp: "Berpengalaman di Industri Perbankan, khususnya Business Development, Corporate Lending, Micro Business dan Risk Management.",
   },
   {
      foto: D3,
      nama: "Anggi Andriansyah",
      jabatan: "Direktur Utama",
      exp: "Berpengalaman di Bisnis Pensiunan, Konsumer serta memiliki hubungan dengan berbagai mitra seperti Taspen dan Asabri.",
   },
   {
      foto: D4,
      nama: "Indra Sagita",
      jabatan: "Direktur",
      exp: "Berpengalaman di berbagai Bank Konvensional serta berpengalaman di dalam operasional, dan administrasi perusahaan.",
   },
];

const Manajemen = () => {
   return (
      <>
         <Helmet>
            <title>Manajemen | SCKB</title>
            <meta
               name="description"
               content="SCKB adalah perusahaan yang bergerak di bidang Management Consultant, Financial Consultant, Information Technology dan Human Resources Management"
            />
            <meta name="keywords" content="SCKB, marketting, keyword3" />
            <meta name="author" content="sckb.co.id" />
         </Helmet>
         <div className="desktop-view">
            <section className="w-full home-section-manajemen bg-center relative pt-16 flex">
               <div style={{ flex: 1 }} className="relative px-16 mt-14">
                  <h1 className="font-extrabold lg:text-2xl xl:text-4xl text-[#FD1D26]">
                     Manajemen
                  </h1>
                  <div className="flex justify-evenly items-start">
                     {DATA.map((item) => (
                        <div className="foto-manajemen-desktop" key={item.nama}>
                           <img src={item.foto} alt="manajemen" />
                           <div className="caption">
                              <h3>{item.nama}</h3>
                              <h5>{item.jabatan}</h5>
                              <p>{item.exp}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="absolute bottom-10 left-16">
                     <AddressFooter color="text-gray-600" />
                  </div>
               </div>
            </section>
         </div>
         <div className="mobile-view">
            <div className="relative flex flex-col h-screen w-full">
               {/* <div className="ornament2 top-[5rem] rotate-180 z-[-1] w-full h-1/3 absolute overflow-hidden"></div> */}

               <div className="mt-32  space-y-2">
                  <h1 className="text-center  text-[#FD1D26] text-2xl font-bold">
                     Manajemen
                  </h1>

                  <div className="flex flex-col relative w-full pb-20 justify-center items-center">
                     <div className="ornament2 bottom-[-2rem] z-[-1] w-full h-1/3 absolute overflow-hidden"></div>

                     {DATA.map((item) => (
                        <div className="foto-manajemen-mobile" key={item.nama}>
                           <img src={item.foto} alt="manajemen" />
                           <div className="caption">
                              <h3>{item.nama}</h3>
                              <h5>{item.jabatan}</h5>
                              <p>{item.exp}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Manajemen;
