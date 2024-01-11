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
      <h1 className="mb-3 text-[45px] md:text-5xl antialiased font-bold leading-none tracking-tighter text-gray-900">
        Mike Ray Arriaga
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row flex-wrap justify-start items-center w-full space-x-2  mb-8">
          <a
            href="https://twitter.com/mike_ray_ux"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-white rounded-md border-2 border-black bg-[#364350] px-3 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            X
          </a>
          <a
            href="https://github.com/mikerayux"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-slate-900 rounded-md border-2 border-black bg-white px-3 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/mike-ray-26a874230/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-white rounded-md border-2 border-black bg-blue-600 px-3 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:m.arriaga.smb@gmail.com"
            target="_blank"
            className="flex flex-row justify-center items-center cursor-pointer text-sm text-gray-900 rounded-md border-2 border-black bg-sky-200 px-3 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            EMAIL
          </a>
        </div>
      </div>
      <div className="mb-4 flex flex-row justify-center items-center border-2 rounded-lg border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Link
            className={`${
              highlighted === "home"
                ? " text-white bg-slate-900 "
                : " text-slate-900  bg-[#8CD1CA]"
            } antialiased text-lg py-1 px-4 font-bold rounded-l-md`}
            to="/"
          >
            HOME
          </Link>
          <Link
            className={`${
              highlighted === "about"
                ? " text-white bg-slate-900 "
                : " text-slate-900  bg-[#8CD1CA]"
            } antialiased text-lg py-1 px-4 font-bold border-l-2 border-r-2 border-black`}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className={`${
              highlighted === "posts"
                ? " text-white bg-slate-900 "
                : " text-slate-900  bg-[#8CD1CA]"
            } antialiased text-lg py-1 px-4 font-bold rounded-r-md`}
            to="/blog"
          >
            POSTS
          </Link>
      </div>
      {/* <DarkModeToggler /> */}
    </div>
  );
};

export default HeroHeader;
