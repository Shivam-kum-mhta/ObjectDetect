import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/upload");
  };
  return (
    <>
      <div className="bg-navColor w-full flex gap-4 text-white px-4 py-2 justify-between items-center h-[62px]">
        <div className="ml-4 font-bold text-xl">
          <span className="hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            Pixel Prodigies🚀
          </span>
        </div>
        <div className="flex gap-11 font-semibold text-lg">
          <Link to="/upload">
            <span className="hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              Product📦
            </span>
          </Link>
          <a href="#problemStatement">
            <span className="hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              Problem Statement🤔
            </span>
          </a>
          <a href="#solution">
            <span className="hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
              Solution🙂
            </span>
          </a>
        </div>
        <button
          className="mr-4 font-semibold text border px-4 py-2 rounded-lg border-buttonBorder hover:opacity-60 duration-300 ease-in-out"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
