import React from 'react';
import mike_circle_logo from '../../../static/etc/images/mike-circle-logo.png';
import font_names from '../../constants/font_names';
const HeroHeader = ({ navigation }) => {
  return (
    <div className="h-full mt-4 flex flex-col justify-center items-center mb-8">
      <img className="block" src={mike_circle_logo} alt="" />
      <h1
        style={{ fontFamily: font_names.regular }}
        className="mt-2 font-light text-2xl leading-none"
      >
        Mike Arriaga
      </h1>
      <div className="mt-2">
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
          Blog
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
