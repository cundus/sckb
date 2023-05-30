import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs/About";
import { Fab } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import VisiMisi from "./pages/AboutUs/VisiMisi";
import Manajemen from "./pages/AboutUs/Manajemen";
import Group from "./pages/AboutUs/Group";
import Layanan from "./pages/Layanan";
import Artikel from "./pages/Artikel";
import Kontak from "./pages/Kontak";
import ViewportChecker from "./pages/ViewPortChecker";

function App() {
   return (
      <Router>
         <div className="relative">
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/tentangkami" element={<About />} />
               <Route path="/visimisi" element={<VisiMisi />} />
               <Route path="/manajemen" element={<Manajemen />} />
               <Route path="/group" element={<Group />} />
               <Route path="/layanan" element={<Layanan />} />
               <Route path="/artikel" element={<Artikel />} />
               <Route path="/kontak" element={<Kontak />} />
               <Route path="/vpc" element={<ViewportChecker />} />
            </Routes>
            <div className="fixed right-10 bottom-10 z-50" title="Whatsapp Kami">
               <Fab variant="circular" size="large" color="success" aria-label="add" onClick={() => window.open("https://wa.me/+6285219493972", "_blank")}>
                  <WhatsApp style={{ fontSize: 35, color: "white" }} />
               </Fab>
            </div>
         </div>
      </Router>
   );
}

export default App;
