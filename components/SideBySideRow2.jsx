import React from "react";

function SideBySideRow2() {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureLaptop.png')" }}
        ></div>
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureWatch.png')" }}
        ></div>
      </div>
    </div>
  );
}

export default SideBySideRow2;
