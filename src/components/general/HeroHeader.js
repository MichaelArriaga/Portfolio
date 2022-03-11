import React from "react";
import mike_circle_logo from "../../../static/etc/images/icons/mike-circle-logo.png";
import "../layout.css";
import { Link } from "gatsby";

const HeroHeader = ({ highlighted }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <img
        className="block"
        style={{ maxWidth: 75 }}
        src={mike_circle_logo}
        alt="mike logo"
      />
      <h1 className="my-2 text-2xl leading-none tracking-tight font-bold antialiased">
        Mike Ray (Arriaga)
      </h1>
      <div className="">
        <Link
          className={
            highlighted === "home"
              ? "font-bold antialiased underline mr-3 text-lg sm:text-base"
              : "font-regular antialiased underline mr-3 text-lg sm:text-base"
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            highlighted === "about"
              ? "font-bold antialiased underline mr-3 text-lg sm:text-base"
              : "font-regular antialiased underline mr-3 text-lg sm:text-base"
          }
          to="/about"
        >
          About
        </Link>
        <Link
          className={
            highlighted === "posts"
              ? "font-bold antialiased underline mr-3 text-lg sm:text-base"
              : "font-regular antialiased underline mr-3 text-lg sm:text-base"
          }
          to="/blog"
        >
          Posts
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
