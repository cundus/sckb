import React from "react";
import { Helmet } from "react-helmet-async";
import AddressFooter from "../components/AddressFooter";
import ServiceIcon1 from "../static/assets/images/layanan1.svg";
import ServiceIcon2 from "../static/assets/images/layanan2.svg";
import ServiceIcon3 from "../static/assets/images/layanan3.svg";
import ServiceIcon4 from "../static/assets/images/layanan4.svg";

const DATA = [
   {
      icon: ServiceIcon1,
      desc: `Kami memberikan layanan konsultasi & memberikan solusi kepada client untuk meningkatkan kinerja & mencapai tujuan client, baik itu individu atau organisasi/korporasi.`,
      nama: "Management Consultant",
   },
   {
      icon: ServiceIcon2,
      desc: `Kami memberi layanan konsultasi, nasihat dan solusi finansial, serta merencanakan dan menetapkan tujuan finansial kepada client baik baik itu individu atau organisasi/korporasi.`,
      nama: "Financial Consultant",
   },
   {
      icon: ServiceIcon3,
      desc: `Kami memberi layanan penyediaan jasa teknologi informasi atau IT berupa perangkat keras (hardware), perangkat lunak (software), atau jasa layanan IT lainnya.`,
      nama: "Information Technology",
   },
   {
      icon: ServiceIcon4,
      desc: `Kami memberi layanan untuk mengelola karyawan agar dapat memiliki performa yang lebih baik. Kami menyediakan tools, training & pelatihan, proses administrasi, hingga manajemen skill karyawan.`,
      nama: "Human Resource Management",
   },
];

const Layanan = () => {
   return (
      <>
         <Helmet>
            <title>Layanan | SCKB</title>
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
                     Layanan
                  </h1>
                  <div className="flex justify-evenly gap-5 items-start xl:mt-5">
                     {DATA.map((item) => (
                        <div className="layanan-desktop" key={item.nama}>
                           <div className="w-[10rem] flex flex-col justify-center items-center">
                              <img src={item.icon} alt="layanan" />
                              <p className="text-center font-bold w-2/3">
                                 {item.nama}
                              </p>
                           </div>
                           <div className="caption">
                              <p>{item.desc}</p>
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
                  <h1 className="text-center  text-[#FD1D26] text-2xl font-extrabold">
                     Layanan
                  </h1>

                  <div className="flex flex-col relative w-full pb-20 justify-center items-center">
                     <div className="ornament2 bottom-[-2rem] z-[-1] w-full h-1/3 absolute overflow-hidden"></div>

                     <div className="flex flex-wrap justify-center gap-5 xl:mt-5">
                        {DATA.map((item) => (
                           <div
                              className="layanan-mobile space-y-2"
                              key={item.nama}
                           >
                              <div className="w-1/2 flex flex-col justify-center items-center">
                                 <img src={item.icon} alt="layanan" />
                                 <p className="text-center font-bold">
                                    {item.nama}
                                 </p>
                              </div>
                              <div className="caption">
                                 <p>{item.desc}</p>
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

export default Layanan;
