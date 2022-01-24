import React from 'react';
import mike_circle_logo from '../../../static/etc/images/icons/mike-circle-logo.png';
import fonts from '../../constants/font_names';
import font_names from '../../constants/font_names';
import '../layout.css';
import { Link } from 'gatsby';
const HeroHeader = ({ highlighted }) => {
  return (
    <div className="h-full mt-6 flex flex-col justify-center items-center mb-4">
      <img className="block" src={mike_circle_logo} alt="" />
      <h1
        style={{ fontFamily: font_names.semiBold }}
        className="mt-2 text-2xl leading-none tracking-tighter"
      >
        Mike Arriaga
      </h1>
      <div className="">
        <Link
          style={{
            fontFamily: highlighted == 'home' ? fonts.bold : fonts.semiBold,
          }}
          className="font-regular underline mr-4 text-lg"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            fontFamily: highlighted == 'about' ? fonts.bold : fonts.semiBold,
          }}
          className="font-regular underline mr-4 text-lg"
          to="/about"
        >
          About
        </Link>
        <Link
          style={{
            fontFamily: highlighted == 'posts' ? fonts.bold : fonts.semiBold,
          }}
          className="font-regular underline mr-4 text-lg"
          to="/blog"
        >
          Posts
        </Link>
        <Link
          style={{
            fontFamily: highlighted == 'contact' ? fonts.bold : fonts.semiBold,
          }}
          className={'font-regular underline mr-4 text-lg'}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
