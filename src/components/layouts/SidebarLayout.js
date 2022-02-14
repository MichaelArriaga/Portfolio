import React from 'react';
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
      <div
        style={{ minWidth: 300 }}
        className="w-full sm:flex sm:flex-row sm:justify-center items-start"
      >
        {/* left panel start */}
        <div
          style={{ width: 290 }}
          className="hidden sm:block w-64 h-screen h-max mr-4 border-r border-gray-100"
        >
          <div style={{ marginTop: 45 }}></div>
          <HeroHeader highlighted={highlighted_hero_link} />

          <div className="mb-4">
            <EmailListSignupForm />
            {/* socials start */}
            <div className="py-1 flex flex-row justify-start items-center">
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
            <div className="flex flex-row justify-start items-center">
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
            <div className="w-full mb-4"></div>
            {/* <div className="sm:max-w-screen-sm mx-auto my-2">
              <h3
                style={{ fontFamily: fonts.regular }}
                className="text-left text-sm mb-2"
              >
                Hey! <span className="pl-1"></span> 👋
              </h3>
              <h3
                style={{
                  fontFamily: fonts.regular,
                }}
                className="text-sm mb-2 text-gray-900"
              >
                I'm a Software Engineer and Single Founder based in Seattle
                Washington. I help startups win through user-centered design and
                the ability to wear multiple hats on a product team. On
                occasion, I write about my favorite tools for building software
                products: Ruby on Rails and React Native.
              </h3>
            </div> */}
          </div>
        </div>
        {/* left panel end */}

        {/* right panel content start */}
        <div
          style={{ maxWidth: 525 }}
          className="w-full min-w-min sm:max-w-screen-sm mb-3 mt-10 "
        >
          <div className="w-full sm:hidden">
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>
          {children}
        </div>
        {/* right panel content end */}
      </div>
      <Footer />
    </div>
  );
};

export default SidebarLayout;
