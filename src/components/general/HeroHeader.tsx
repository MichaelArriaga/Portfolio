import React from "react";
import header_image from "../../../static/etc/images/icons/mike-circle-portrait.png";
import "../layout.css";
import { Link } from "gatsby";

interface PropTypes {
  highlighted: string;
}

const HeroHeader = ({ highlighted }: PropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4 h-full">
      <img
        className="block"
        style={{ maxWidth: 175, borderRadius: "50%" }}
        src={header_image}
        alt="mike logo"
      />
      <h1 className="my-2 mb-4 text-4xl antialiased font-black leading-none tracking-tight text-gray-900">
        Mike Ray Arriaga
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row flex-wrap justify-start items-center w-full space-x-3 sm:space-x-4 mb-4">
          <a
            href="https://twitter.com/mike_ray_ux"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-white rounded-md border-2 border-black bg-[#364350] px-4 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            X
          </a>
          <a
            href="https://github.com/mikerayux"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-white rounded-md border-2 border-black bg-[#DD0317] px-4 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/mike-ray-26a874230/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-white rounded-md border-2 border-black bg-[#0066BF] px-4 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:m.arriaga.smb@gmail.com"
            target="_blank"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-gray-900 rounded-md border-2 border-black bg-white px-4 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            EMAIL
          </a>
        </div>
      </div>
      <div className="flex flex-row mb-4 justify-center items-center">
        <h3 className="mr-1 font-bold text-lg antialiased text-gray-900 flex flex-row justif-center items-center">
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mx-1"
          >
            <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
          </svg>
          in Akron, OH
        </h3>
      </div>
      <div className="mb-4 flex flex-row justify-center items-center space-x-4">
        <div className={"w-16"}>
          <Link
            className={`text-gray-900 ${
              highlighted === "home" ? "font-black underline" : "font-semibold"
            } antialiased text-2xl sm:text-2xl `}
            to="/"
          >
            Home
          </Link>
        </div>
        <div className={"w-16"}>
          <Link
            className={`text-gray-900 ${
              highlighted === "about" ? "font-black underline" : "font-semibold"
            } antialiased text-2xl sm:text-2xl `}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className={"w-16"}>
          <Link
            className={`text-gray-900 ${
              highlighted === "posts" ? "font-black underline" : "font-semibold"
            } antialiased text-2xl sm:text-2xl `}
            to="/blog"
          >
            Posts
          </Link>
        </div>
      </div>
      {/* <DarkModeToggler /> */}
    </div>
  );
};

export default HeroHeader;
