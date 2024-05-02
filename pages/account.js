import React from "react";
import Nav from "../components/admin/Nav";
import DynamicHeroIntro from "../components/landing-body/DynamicHeroIntro";
import SideBySide from "../components/landing-body/SideBySide";

function account() {
  return (
    <div>
      <Nav />
      <DynamicHeroIntro
        imgUrl="figureAll.png"
        style="text-black md:font-bold text-3xl"
        color="text-black"
      />
      <SideBySide />
    </div>
  );
}

export default account;
