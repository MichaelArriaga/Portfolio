import React from 'react';
import mike_circle_logo from '../../../static/etc/images/icons/mike-circle-logo.png';
import fonts from '../../constants/font_names';
import font_names from '../../constants/font_names';
import '../layout.css';
import { Link } from 'gatsby';
const HeroHeader = ({ highlighted }) => {
  return (
    <div className="h-full mt-6 flex flex-col justify-center items-center mb-4">
      <img
        className="block"
        style={{ maxWidth: 75 }}
        src={mike_circle_logo}
        alt="mike logo"
      />
      <h1
        style={{ fontFamily: font_names.regular }}
        className="my-2 text-2xl leading-none tracking-tighter"
      >
        Mike Arriaga
      </h1>
      <div className="">
        <Link
          style={{
            fontFamily: highlighted === 'home' ? fonts.bold : fonts.regular,
          }}
          className="font-regular underline mr-4 text-lg sm:text-base"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            fontFamily: highlighted === 'about' ? fonts.bold : fonts.regular,
          }}
          className="font-regular underline mr-4 text-lg sm:text-base"
          to="/about"
        >
          About
        </Link>
        <Link
          style={{
            fontFamily: highlighted === 'posts' ? fonts.bold : fonts.regular,
          }}
          className="font-regular underline mr-4 text-lg sm:text-base"
          to="/blog"
        >
          Posts
        </Link>
        <Link
          style={{
            fontFamily: highlighted === 'contact' ? fonts.bold : fonts.regular,
          }}
          className={'font-regular underline mr-4 text-lg sm:text-base'}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
