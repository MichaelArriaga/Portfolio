import React from 'react';

import twitter_icon from '../../static/etc/images/icons/logo-twitter.png';
import linkedin_icon from '../../static/etc/images/icons/logo-linkedin.png';
import github_icon from '../../static/etc/images/icons/logo-github.png';
import email_icon from '../../static/etc/images/icons/logo-email-envelope.png';
import fonts from '../constants/font_names';

const Footer = () => (
  <div className={'w-full mx-auto'}>
    <hr className={'w-full border-t border-gray-200'}></hr>

    <div
      className={'py-3 flex flex-col sm:flex-row justify-center items-center'}
    >
      <div className="flex flex-row mb-2 sm:mb-0 justify-center items-center">
        <h3 style={{ fontFamily: fonts.regular }} className="mr-1">
          Made with ♥ in Seattle, WA
        </h3>
      </div>

      <div className="pl-2 flex flex-row justify-start items-center">
        {/* <a
          style={{ width: 20 }}
          className={'mr-2'}
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter_icon} alt="not loaded" />
        </a> */}
        <a
          style={{ width: 20 }}
          className={'mr-2'}
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin_icon} alt="not loaded" />
        </a>
        <a
          style={{ width: 20 }}
          className={'mr-2'}
          href="https://github.com/MichaelArriaga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_icon} alt="not loaded" />
        </a>
        <a
          style={{ width: 20 }}
          className={'mr-3'}
          href="https://github.com/MichaelArriaga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email_icon} alt="not loaded" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
