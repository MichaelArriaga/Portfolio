import React from 'react';
import mike_circle_logo from '../../../static/etc/images/icons/mike-circle-logo.png';
import font_names from '../../constants/font_names';
const HeroHeader = ({ navigation }) => {
  return (
    <div className="h-full mt-4 flex flex-col justify-center items-center mb-4">
      <img className="block" src={mike_circle_logo} alt="" />
      <h1
        style={{ fontFamily: font_names.semiBold }}
        className="mt-2 text-2xl leading-none tracking-tighter"
      >
        Mike Arriaga
      </h1>
      <div className="">
        <a
          style={{ fontFamily: font_names.semiBold }}
          className="font-regular underline mr-4 text-lg"
          href="/about"
        >
          About
        </a>
        <a
          style={{ fontFamily: font_names.semiBold }}
          className="font-regular underline mr-4 text-lg"
          href="/blog"
        >
          Posts
        </a>
        <a
          style={{ fontFamily: font_names.semiBold }}
          className="font-regular underline mr-4 text-lg"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
