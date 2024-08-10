import React from "react";
import { GitHub, Target } from "react-feather";

const Footer = () => {
  return (
    <>
      <div className="bg-heroColor mt-9 h-[200px] text-white rounded-t-2xl relative">
        <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 opacity-10 text-8xl font-bold whitespace-nowrap">
          Pixel Prodigies
        </div>
        <div className="font-semibold text-xl pt-7 text-white text-center">
          Made with 💖 by developers
        </div>
      </div>
    </>
  );
};

export default Footer;
