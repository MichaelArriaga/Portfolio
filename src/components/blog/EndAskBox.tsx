import React, { useEffect, useState, useContext, useRef } from "react";
import { FaTwitter } from "react-icons/fa";

const EndAskBox = () => {
  return (
    <div className="w-full rounded p-4 mb-4">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl text-gray-900 font-black text-center leading-none mb-4 antialiased">
          Thanks for reading! 👋
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-900 font-bold text-center leading-none mb-4 sm:text-center antialiased">
          Did you find this article useful?
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <a
          style={{ backgroundColor: "#359BF0" }}
          href="https://twitter.com/mike_ray_ux?ref_src=twsrc%5Etfw"
          className="px-4 py-2 rounded-lg text-lg flex justify-center items-center text-white font-bold antialiased"
          data-show-count="false"
          target="_blank"
          rel="noreferrer"
        >
          Follow me on Twitter
          <FaTwitter size={24} className="text-white ml-2" />
        </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
      </div>
    </div>
  );
};
export default EndAskBox;
