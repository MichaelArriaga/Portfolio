import React from "react";
import mike_circle_logo from "../../../static/etc/images/icons/mike-circle-logo.png";
import "../layout.css";
import { Link } from "gatsby";
import DarkModeToggler from "../general/dark_mode_toggler/DarkModeToggler";

interface PropTypes {
  highlighted: string;
}

const HeroHeader = ({ highlighted }: PropTypes) => {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <img
        className="block"
        style={{ maxWidth: 75 }}
        src={mike_circle_logo}
        alt="mike logo"
      />
      <h1 className="my-2 text-3xl text-gray-900 leading-none tracking-tight font-black antialiased">
        Mike Ray
      </h1>
      <div className="">
        <Link
          className={
            highlighted === "home"
              ? "text-gray-900 font-black antialiased underline mr-3 text-lg sm:text-xl"
              : "text-gray-900 font-semibold antialiased mr-3 text-lg sm:text-xl"
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            highlighted === "about"
              ? "text-gray-900 font-black antialiased underline mr-3 text-lg sm:text-xl"
              : "text-gray-900 font-semibold antialiased mr-3 text-lg sm:text-xl"
          }
          to="/about"
        >
          About
        </Link>
        <Link
          className={
            highlighted === "posts"
              ? "text-gray-900 font-black antialiased underline mr-3 text-lg sm:text-xl"
              : "text-gray-900 font-semibold antialiased mr-3 text-lg sm:text-xl"
          }
          to="/blog"
        >
          Posts
        </Link>
      </div>
      {/* dark mode toggler start */}
      <DarkModeToggler />
    </div>
  );
};

export default HeroHeader;
