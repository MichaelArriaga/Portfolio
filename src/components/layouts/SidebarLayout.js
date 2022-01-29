import React, { useEffect, useState, useContext, useRef } from 'react';
import SideBar from '../Sidebar';
import ReusableHelmet from '../ReusableHelmet';
import HeroHeader from '../general/HeroHeader';
import Footer from '../Footer';
import EmailListSignupForm from '../email_lists/EmailListSignupForm';
import twitter_icon from '../../../static/etc/images/icons/logo-twitter.png';
import linkedin_icon from '../../../static/etc/images/icons/logo-linkedin.png';
import github_icon from '../../../static/etc/images/icons/logo-github.png';
import email_icon from '../../../static/etc/images/icons/logo-email-envelope.png';
import fonts from '../../constants/font_names';

const SidebarLayout = ({
  meta_title,
  meta_description,
  highlighted_hero_link,
  children,
}) => {
  return (
    <div className="">
      <ReusableHelmet title={meta_title} description={meta_description} />
      <div className="w-full sm:flex sm:flex-row sm:justify-center items-start">
        {/* left panel start */}
        <div
          style={{ width: 290 }}
          className="hidden sm:block w-64 h-screen h-max mr-4 border-r border-gray-100"
        >
          <div style={{ marginTop: 150 }}></div>

          <div className="mb-4">
            <EmailListSignupForm />
            {/* socials start */}
            <div className="flex flex-row justify-start items-center">
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <img
                  src={twitter_icon}
                  alt=""
                  style={{ width: 25 }}
                  className="mr-2"
                />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <img
                  src={linkedin_icon}
                  alt=""
                  style={{ width: 25 }}
                  className="mr-2"
                />
              </a>
              <a
                href="https://github.com/MichaelArriaga"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github_icon}
                  alt=""
                  style={{ width: 25 }}
                  className="mr-2"
                />
              </a>
              <a href="mailto:m.arriaga.smb@gmail.com">
                <img
                  src={email_icon}
                  alt=""
                  style={{ width: 25 }}
                  className=""
                />
              </a>
            </div>
            {/* socials end */}
            <div className="py-2 flex flex-row justify-start items-center">
              <h3
                style={{ fontFamily: fonts.regular }}
                className="text-base mb-2 text-gray-900 mr-2"
              >
                Need help?{' '}
              </h3>

              <h3 className="pb-2">
                <a
                  href="mailto: m.arriaga.smb@gmail.com"
                  style={{ fontFamily: fonts.bold }}
                  className="text-gray-900 underline"
                >
                  Send me an email
                </a>{' '}
              </h3>
            </div>
          </div>
        </div>
        {/* left panel end */}

        {/* right panel content start */}
        <div className="w-full min-w-min sm:max-w-screen-sm mb-3">
          <HeroHeader highlighted={highlighted_hero_link} />
          {children}
        </div>
        {/* right panel content end */}
      </div>
      <Footer />
    </div>
  );
};

export default SidebarLayout;
