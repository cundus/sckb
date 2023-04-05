import React from "react";
import AddressFooter from "../../components/AddressFooter";
import Model from "../../static/assets/images/model_about.png";
import { Helmet } from "react-helmet-async";

function About() {
   return (
      <>
         <Helmet>
            <title>Tentang Kami | SCKB</title>
            <meta
               name="description"
               content="SCKB adalah perusahaan yang bergerak di bidang Management Consultant, Financial Consultant, Information Technology dan Human Resources Management"
            />
            <meta name="keywords" content="SCKB, marketting, keyword3" />
            <meta name="author" content="sckb.co.id" />
         </Helmet>
         <div className="desktop-view">
            <section className=" w-full home-section bg-center relative pt-16 flex">
               <div style={{ flex: 1 }} className="relative">
                  <div className="absolute top-14 left-16 space-y-5 w-2/3">
                     <h1 className="font-extrabold lg:text-2xl xl:text-4xl text-[#FD1D26]">
                        Tentang SCKB
                     </h1>
                     <p className="lg:text-lg">
                        Pada awal pendirian tahun 2018 memiliki entitas bernama
                        SKDI yang kemudian bertransformasi menjadi SCKB diawal
                        tahun 2022
                     </p>
                     <p className="text-left lg:text-lg">
                        Kami bergerak dalam bidang Management Consultant,
                        Financial Consultant, Information Technology (IT), dan
                        Human Resources Management (HRM).
                     </p>
                  </div>

                  <div className="absolute bottom-10 left-16">
                     <AddressFooter color="text-gray-600" />
                  </div>
               </div>
               <div style={{ flex: 1 }} className="overflow-hidden relative">
                  <div className="absolute left-0 w-full h-full">
                     <div className="relative w-full h-full">
                        <img
                           src={Model}
                           alt="model"
                           className="w-full  absolute bottom-[-5rem]"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <div className="mobile-view">
            <div className="relative flex flex-col h-screen w-full">
               <div className="ornament2 bottom-0 z-[1] w-full h-2/3 absolute overflow-hidden">
                  <div className="relative w-full h-full">
                     <img
                        src={Model}
                        alt="model1"
                        className="absolute bottom-[-4rem]  w-full  mt-20"
                     />
                  </div>
               </div>

               <div className="mt-32 px-5">
                  <h1 className="font-extrabold text-2xl text-[#FD1D26]">
                     Tentang SCKB
                  </h1>
                  <p className="font-semibold">
                     Pada awal pendirian tahun 2018 memiliki entitas bernama
                     SKDI yang kemudian bertransformasi menjadi SCKB diawal
                     tahun 2022.
                  </p>
                  <p className="text-left font-semibold">
                     Kami bergerak dalam bidang Management Consultant, Financial
                     Consultant, Information Technology (IT), dan Human
                     Resources Management (HRM).
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default About;
