import React from "react";
import Image from "next/image";

function SideBySide() {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureWdc.png')" }}
        ></div>
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureXbox.png')" }}
        ></div>
      </div>
    </div>
  );
}

export default SideBySide;
