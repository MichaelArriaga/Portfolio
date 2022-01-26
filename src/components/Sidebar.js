import React from 'react';
import fonts from '../constants/font_names';
import twitter_icon from '../../static/etc/images/icons/logo-twitter.png';
import linkedin_icon from '../../static/etc/images/icons/logo-linkedin.png';
import github_icon from '../../static/etc/images/icons/logo-github.png';
import email_icon from '../../static/etc/images/icons/logo-email-envelope.png';
import EmailListSignupForm from './email_lists/EmailListSignupForm';

const SideBar = ({ hide_socials }) => {
  return (
    <div className="mb-4">
      <EmailListSignupForm />
      {/* socials start */}
      {hide_socials ? null : (
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
            <img src={email_icon} alt="" style={{ width: 25 }} className="" />
          </a>
        </div>
      )}
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
  );
};
export default SideBar;
