import React from "react";
import image from "../../../public/isometric-round-server.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };
  return (
    <div className="bg-heroColor flex justify-around h-screen pt-11 items-center">
      {/* left section  */}
      <div className="flex flex-col gap-y-9">
        <span className="text-7xl w-[500px] text-white font-bold">
          Object Detect
        </span>
        <span className="text-white text-lg w-[400px]">
          Leverage real-time object detection to identify and classify objects
          from a video feed or uploaded images⚡
        </span>
        {/* here goes the button  */}
        <button
          className="w-[200px] font-semibold text-white border px-4 py-2 rounded-lg border-buttonBorder hover:opacity-60 duration-300 ease-in-out"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
      {/* right section  */}
      <div>
        <img src={image} alt="databaseimage" className="w-[300px] h-[419px]" />
      </div>
    </div>
  );
};

export default Hero;
