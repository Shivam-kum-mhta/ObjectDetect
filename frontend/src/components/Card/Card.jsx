import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Card = ({ name, link }) => {
  return (
    <div className="border-2 border-red-200 rounded-lg px-4 py-2">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-xl">{name}</span>
          <span className="font-bold text-md opacity-60">NITK</span>
          <span className="font-bold text-md opacity-60">
            Information Technology
          </span>
        </div>
        <a href={link}>
          <FaGithubSquare className="w-[40px] h-[40px] hover:opacity-60 hover:cursor-pointer duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  );
};

export default Card;
