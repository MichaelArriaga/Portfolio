import React from "react";
import {
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => (
  <div className={"w-full mx-auto"}>
    <hr className={"w-full border-t border-gray-200"}></hr>

    <div
      className={"py-3 flex flex-col sm:flex-row justify-center items-center"}
    >
      <div className="flex flex-row mb-2 sm:mb-0 justify-center items-center">
        <h3 className="mr-1 font-normal text-lg antialiased">
          Made with ❤️ in Seattle, WA
        </h3>
      </div>

      <div className="pl-2 flex flex-row justify-start items-center">
        <a
          href="https://twitter.com/mike_ray_ux"
          className="mr-2 text-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={22} className="text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/mike-ray-26a874230/"
          className="mr-2 text-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={22} className="text-gray-900" />
        </a>
        <a
          href="https://github.com/mikerayux"
          className="mr-2 text-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={22} className="text-gray-900" />
        </a>
        <a
          href="mailto:m.arriaga.smb@gmail.com"
          className="mr-2 text-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelopeSquare size={22} className="text-gray-900" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
