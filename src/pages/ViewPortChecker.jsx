import React, { useState, useEffect } from "react";

function ViewportChecker() {
   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
   const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

   useEffect(() => {
      function handleResize() {
         setViewportWidth(window.innerWidth);
         setViewportHeight(window.innerHeight);
      }

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <div className="flex flex-col justify-center items-center w-full h-screen bg-green-300">
         Hello world
         <p className="text-2xl font-extrabold">
            Viewport width: {viewportWidth}px
         </p>
         <p className="text-2xl font-extrabold">
            Viewport height: {viewportHeight}px
         </p>
         <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-300">1</div>
            <div class="bg-gray-400">2</div>
            <div class="bg-gray-500">3</div>
            <div class="bg-gray-600">4</div>
            <div class="bg-gray-700">5</div>
            <div class="bg-gray-800">6</div>
         </div>
      </div>
   );
}

export default ViewportChecker;
