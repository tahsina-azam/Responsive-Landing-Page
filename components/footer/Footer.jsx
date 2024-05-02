import React from "react";
import { mainFooterText } from "./const";
import FooterLinks from "./FooterLinks";
import FooterHelp from "./FooterHelp";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="flex justify-center  h-screen">
      <div className="w-3/4">
        <footer className="bg-base-200 p-10 text-center lg:text-left text-sm">
          {mainFooterText.map((text, index) => (
            <p key={index} className="text-gray-600 mb-2">
              {text}
            </p>
          ))}
        </footer>
        <hr></hr>
        <FooterLinks />
        <FooterHelp />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
