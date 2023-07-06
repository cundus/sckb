import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import LogoSCKB from "../static/assets/images/logoSCKB.svg";
import logoIG from "../static/assets/images/logo-socmed/logo_ig.svg";
import logoLink from "../static/assets/images/logo-socmed/logo_li.svg";
// import LogoSCKB from "../static/assets/images/logoSCKB.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography, Button } from "antd";

const sosmed = {
   ig: "https://www.instagram.com/sckbgroup/",
   linkedin: "https://www.linkedin.com/in/sinergi-cipta-kreasi-bersama-1b7306271/",
};

const route = [
   {
      to: "/",
      title: "Beranda",
      menu: false,
   },
   {
      to: "#",
      title: "Tentang Kami",
      menu: true,
   },
   {
      to: "layanan",
      title: "Layanan",
      menu: false,
   },
   {
      to: "artikel",
      title: "Artikel",
      menu: false,
   },
   {
      to: "kontak",
      title: "Kontak",
      menu: false,
   },
   {
      to: "#",
      title: "Karir",
      menu: true,
   },
];
const subKarir = [
   {
      label: (
         <Link to="#" onClick={() => {}}>
            <Typography
               style={{
                  textAlign: "center",
                  fontWeight: "bold",
               }}
            >
               Isi CV
            </Typography>
         </Link>
      ),
      key: "0",
   },
];
const subRoute = [
   {
      label: (
         <Link to="tentangkami">
            <Typography
               style={{
                  textAlign: "center",
                  fontWeight: "bold",
               }}
            >
               Tentang SCKB
            </Typography>
         </Link>
      ),
      key: "0",
   },
   {
      label: (
         <Link to="visimisi">
            <Typography
               style={{
                  textAlign: "center",
                  fontWeight: "bold",
               }}
            >
               Visi & Misi
            </Typography>
         </Link>
      ),
      key: "1",
   },
   {
      label: (
         <Link to="manajemen">
            <Typography
               style={{
                  textAlign: "center",
                  fontWeight: "bold",
               }}
            >
               Manajemen
            </Typography>
         </Link>
      ),
      key: "2",
   },
   {
      label: (
         <Link to="group">
            <Typography
               style={{
                  textAlign: "center",
                  fontWeight: "bold",
               }}
            >
               SCKB Group
            </Typography>
         </Link>
      ),
      key: "3",
   },
];

function Navbar() {
   const loc = useLocation();
   const [isOpen, setIsOpen] = useState(false);
   const slideInEffect = isOpen ? "translate-y-0" : "translate-y-[-105%]";
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      setIsOpen(false);
   }, [loc]);

   return (
      <>
         <div className="mx-auto hidden lg:block absolute z-50 left-0 right-0 top-5 px-16 w-full bg-transparent">
            <nav className="items-center container mx-auto h-full justify-between  flex">
               <Link to="/">
                  <img src={LogoSCKB} alt="logo" className="w-12 md:w-40" />
               </Link>
               <div className=" space-x-5 hidden md:flex">
                  <Link to={{ pathname: sosmed.ig }} target="_blank">
                     <div onClick={() => window.open(sosmed.ig, "_blank")} title="Instagram SCKB" className="w-14 h-14 flex justify-center items-center overflow-hidden">
                        <img src={logoIG} alt="ig" className="w-24 h-24 object-cover" />
                     </div>
                  </Link>
                  <Link to="#">
                     <div onClick={() => window.open(sosmed.linkedin, "_blank")} title="LinkedIn SCKB" className="w-14 h-14 flex justify-center items-center overflow-hidden">
                        <img src={logoLink} alt="li" className="w-24 h-24 object-cover" />
                     </div>
                  </Link>
               </div>
               <div className="hidden md:block">
                  <ul className="flex items-center  lg:text-sm xl:text-base font-bold md:space-x-7 xl:space-x-10 ">
                     {route.map((item) => (
                        <li key={item.title} className="cursor-pointer">
                           {item.menu ? (
                              <Dropdown
                                 menu={{
                                    items: item.title == "Karir" ? subKarir : subRoute,
                                 }}
                                 placement="bottomLeft"
                                 trigger={["click"]}
                                 dropdownRender={(menu) => <div className="">{menu}</div>}
                              >
                                 <div className="flex space-x-2 items-baseline  text-white hover:text-gray-600 cursor-pointer">
                                    <a onClick={(e) => e.preventDefault()} className=" lg:text-sm xl:text-base font-bold cursor-pointer">
                                       {item.title}
                                    </a>
                                    <DownOutlined
                                       style={{
                                          fontSize: ".8rem",
                                          color: "white",
                                          fontWeight: "bold",
                                       }}
                                    />
                                 </div>
                              </Dropdown>
                           ) : (
                              <Link to={item.to} className="text-white hover:text-gray-600">
                                 {item.title}
                              </Link>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </nav>
         </div>
         <div className=" mx-auto bg-transparent absolute left-0 right-0 top-0 z-50 lg:hidden">
            <nav className="mx-auto px-5 flex justify-between items-center h-20 relative shadow-md">
               <Link to="/">
                  <img src={LogoSCKB} alt="logo" className="w-24 md:w-40" />
               </Link>
               <div className="h-full  flex items-center ">
                  <Button type="text" block onClick={toggleMenu}>
                     {isOpen ? (
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                           <path
                              fill="#FD1D26"
                              d="M18.364 5.636a1 1 0 0 0-1.414 0L12 10.586l-4.95-4.95a1 1 0 0 0-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 0 0 1.414 1.414L12 13.414l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 12l4.95-4.95a1 1 0 0 0 0-1.414z"
                           />
                        </svg>
                     ) : (
                        <svg viewBox="0 0 24 24" width="25" height="25">
                           <path fill="#FD1D26" d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z" />
                        </svg>
                     )}
                  </Button>
               </div>
            </nav>
            <div className="relative overflow-hidden">
               <ul className={`mobile-menu flex flex-col justify-center  items-center  font-bold shadow-xl p-10 transition  ${slideInEffect} duration-500`}>
                  {route.map((item) => (
                     <li key={item.title} className="cursor-pointer">
                        {item.menu ? (
                           <Dropdown
                              menu={{
                                 items: item.title == "Karir" ? subKarir : subRoute,
                              }}
                              placement="bottomLeft"
                              trigger={["click"]}
                              dropdownRender={(menu) => <div className="">{menu}</div>}
                           >
                              <div className="flex space-x-2 items-baseline  text-white hover:text-gray-600 cursor-pointer">
                                 <a onClick={(e) => e.preventDefault()} className=" lg:text-sm xl:text-base font-bold cursor-pointer">
                                    {item.title}
                                 </a>
                                 <DownOutlined
                                    style={{
                                       fontSize: ".8rem",
                                       color: "white",
                                       fontWeight: "bold",
                                    }}
                                 />
                              </div>
                           </Dropdown>
                        ) : (
                           <Link to={item.to} className="text-white hover:text-gray-600">
                              {item.title}
                           </Link>
                        )}
                     </li>
                  ))}

                  <li className="space-x-5 flex">
                     <Link to="#">
                        <div onClick={() => window.open(sosmed.ig, "_blank")} title="Instagram SCKB" className="w-14 h-14 flex justify-center items-center overflow-hidden">
                           <img src={logoIG} alt="ig" className="w-24 h-24 object-cover" />
                        </div>
                     </Link>
                     <Link to="#">
                        <div onClick={() => window.open(sosmed.linkedin, "_blank")} title="LinkedIn SCKB" className="w-14 h-14 flex justify-center items-center overflow-hidden">
                           <img src={logoLink} alt="li" className="w-24 h-24 object-cover" />
                        </div>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default Navbar;
