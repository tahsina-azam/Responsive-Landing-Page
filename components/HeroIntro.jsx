import React from "react";

function HeroIntro(props) {
  return (
    <div>
      <div
        className="w-full h-[250px] bg-cover bg-center bg-no-repeat md:h-[550px]"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
    </div>
  );
}

export default HeroIntro;
