import React from "react";
import AddressFooter from "../../components/AddressFooter";
import { Helmet } from "react-helmet-async";
import {
   LogoSCKB,
   LogoARM,
   LogoSYAP,
   LogoPCN,
   LogoPostra,
   LogoMIB,
} from "../../static/assets/images/logo-mitra";
import Model from "../../static/assets/images/model5.svg";
const DATA = [
   {
      nama: "Koperasi Madani Insan Bersyukur",
      logo: LogoMIB,
   },
   {
      nama: "PT. Padi Citra Nusantara",
      logo: LogoPCN,
   },
   {
      nama: "Koperasi Athaya Raya Madani",
      logo: LogoARM,
   },
   {
      nama: "PT. Syiva Anugerah Pratama",
      logo: LogoSYAP,
   },
   {
      nama: "Koperasi Serba Usaha(KSU) Postra",
      logo: LogoPostra,
   },
];

const Group = () => {
   return (
      <>
         <Helmet>
            <title>SCKB Group | SCKB</title>
            <meta
               name="description"
               content="SCKB adalah perusahaan yang bergerak di bidang Management Consultant, Financial Consultant, Information Technology dan Human Resources Management"
            />
            <meta name="keywords" content="SCKB, marketting, keyword3" />
            <meta name="author" content="sckb.co.id" />
         </Helmet>
         <div className="desktop-view">
            <section className=" w-full home-section bg-center relative pt-16 flex">
               <div style={{ flex: 1 }} className="relative px-16 mt-14 ">
                  <h1 className="font-extrabold lg:text-2xl xl:text-4xl text-[#FD1D26]">
                     SCKB Group
                  </h1>
                  <div className="flex justify-start items-start flex-wrap  xl:mt-2">
                     {DATA.map((item) => (
                        <div className="logo-group-desktop" key={item.nama}>
                           <img src={item.logo} alt="manajemen" />
                           <div className="caption">
                              <p>{item.nama}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="absolute bottom-10 left-16">
                     <AddressFooter color="text-gray-600" />
                  </div>
               </div>
               <div className="flex-[1.5] ">
                  <div className="relative w-full h-full bottom-0 ">
                     <img
                        src={Model}
                        alt="model"
                        className="absolute object-contain  w-full h-full right-[-10rem] model"
                     />
                  </div>
               </div>
            </section>
         </div>
         <div className="mobile-view">
            <div className="relative flex flex-col h-screen w-full">
               {/* <div className="ornament2 top-[5rem] rotate-180 z-[-1] w-full h-1/3 absolute overflow-hidden"></div> */}

               <div className="mt-32  space-y-2">
                  <h1 className="text-center  text-[#FD1D26] text-2xl font-bold">
                     SCKB Group
                  </h1>
                  <div className="ornament2 bottom-0 z-[-1] w-full h-1/3 absolute overflow-hidden"></div>

                  <div className="flex flex-col relative w-full  justify-center  items-center">
                     <div className="flex justify-evenly items-start flex-wrap gap-5 xl:mt-2">
                        {DATA.map((item) => (
                           <div className="logo-group-mobile" key={item.nama}>
                              <img src={item.logo} alt="manajemen" />
                              <div className="caption">
                                 <p>{item.nama}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Group;
