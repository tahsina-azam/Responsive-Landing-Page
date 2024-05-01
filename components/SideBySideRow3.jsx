import React from "react";

function SideBySideRow3() {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureCard.png')" }}
        ></div>
        <div
          className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
          style={{ backgroundImage: "url('figureMobiles.png')" }}
        ></div>
      </div>
    </div>
  );
}

export default SideBySideRow3;
