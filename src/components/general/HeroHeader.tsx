import React from "react";
import mike_circle_logo from "../../../static/etc/images/icons/mike-circle-logo.png";
import "../layout.css";
import { Link } from "gatsby";

interface PropTypes {
  highlighted: string;
}

const HeroHeader = ({ highlighted }: PropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <img
        className="block"
        style={{ maxWidth: 75, borderRadius: "50%" }}
        src={mike_circle_logo}
        alt="mike logo"
      />
      <h1 className="my-2 text-3xl antialiased font-black leading-none tracking-tight text-gray-900">
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
          Blog
        </Link>
      </div>
      {/* <DarkModeToggler /> */}
    </div>
  );
};

export default HeroHeader;
