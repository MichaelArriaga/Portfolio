import React, { useEffect, useState, useContext, useRef } from "react";
import {
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const EndAskBox = () => {
  return (
    <div className="w-full rounded p-4 rounded border border-gray-800 mb-6">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl text-gray-900 font-black text-center leading-none mb-4">
          Thanks for reading! 👋
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-900 font-bold text-center leading-none mb-4 sm:text-center">
          Find this article useful?
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <a
          style={{ backgroundColor: "#359BF0" }}
          href={"https://twitter.com/mike_ray_ux"}
          className="px-4 py-2 rounded-lg text-lg flex justify-center items-center text-white font-bold"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={24} className="text-white mr-2" />
          Follow me on Twitter
        </a>
      </div>
    </div>
  );
};
export default EndAskBox;
