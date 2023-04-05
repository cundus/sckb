import React from "react";

const AddressFooter = ({ color }) => {
   return (
      <>
         <p className={"footer-text " + color}>Sampoerna Strategic Square</p>
         <p className={"footer-text " + color}>North Tower 24th Floor</p>
         <p className={"footer-text " + color}>
            Jl. Jendral Sudirman No.46 - 46
         </p>
         <p className={"footer-text " + color}>DKI Jakarta 12930</p>
      </>
   );
};

export default AddressFooter;
