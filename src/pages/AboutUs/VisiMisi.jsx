import React from "react";
import { Helmet } from "react-helmet-async";
import AddressFooter from "../../components/AddressFooter";
import Model from "../../static/assets/images/model3.png";

const VisiMisi = () => {
   return (
      <>
         <Helmet>
            <title>Visi & Misi | SCKB</title>
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
                  <div className="absolute top-14 left-16 space-y-3 w-2/3">
                     <h1 className="font-extrabold lg:text-2xl xl:text-4xl text-[#FD1D26]">
                        Visi & Misi
                     </h1>
                     <h4 className="lg:text-xl xl:text-2xl font-bold">Visi</h4>
                     <p className="">
                        Menjadi perusahaan yang berperan aktif dalam melibatkan
                        aktifitas produktif para masyarakat yang bertujuan dapat
                        meningkatkan taraf hidup, kemampuan berinovasi dan daya
                        saing, serta memberikan dampak positif yang menular.
                     </p>
                     <h4 className="lg:text-xl xl:text-2xl font-bold">Misi</h4>
                     <p className="text-left ">
                        Membangun jiwa wirausaha yang kuat, berakhlak tinggi,
                        serta mampu memberdayakan keunggulan di daerah
                        masing-masing dan berkontribusi dalam meningkatkan taraf
                        hidup masyarakat di sekitarnya.
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
                           className="w-full h-full absolute object-cover bottom-[-4.6rem]"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <div className="mobile-view">
            <div className="relative flex flex-col h-screen w-full">
               <div className="ornament2 bottom-0 z-[1] w-full h-1/3 absolute overflow-hidden">
                  <div className="relative w-full h-full">
                     <img
                        src={Model}
                        alt="model1"
                        className="absolute object-contain scale-[1.3] md:scale-[1.5]   h-full w-full bottom- "
                     />
                  </div>
               </div>

               <div className="mt-32 px-5 space-y-2">
                  <h1 className="font-extrabold text-2xl text-[#FD1D26]">
                     Visi & Misi
                  </h1>
                  <h4 className="lg:text-xl xl:text-2xl font-bold">Visi</h4>

                  <p className="font-semibold">
                     Menjadi perusahaan yang berperan aktif dalam melibatkan
                     aktifitas produktif para masyarakat yang bertujuan dapat
                     meningkatkan taraf hidup, kemampuan berinovasi dan daya
                     saing, serta memberikan dampak positif yang menular.
                  </p>
                  <h4 className="lg:text-xl xl:text-2xl font-bold">Misi</h4>

                  <p className="text-left font-semibold">
                     Membangun jiwa wirausaha yang kuat, berakhlak tinggi, serta
                     mampu memberdayakan keunggulan di daerah masing-masing dan
                     berkontribusi dalam meningkatkan taraf hidup masyarakat di
                     sekitarnya.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default VisiMisi;
