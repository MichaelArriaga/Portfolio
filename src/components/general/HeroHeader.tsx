import React from "react";
import header_image from "../../../static/etc/images/icons/mike-circle-portrait.png";
import "../layout.css";
import { Link } from "gatsby";

interface PropTypes {
  highlighted: string;
}

const HeroHeader = ({ highlighted }: PropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <img
        className="block"
        style={{ maxWidth: 175, borderRadius: "50%" }}
        src={header_image}
        alt="mike logo"
      />
      <h1 className="my-2 text-4xl antialiased font-black leading-none tracking-tight text-gray-900">
        Mike Ray Arriaga
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
      {/* <DarkModeToggler /> */}
    </div>
  );
};

export default HeroHeader;
