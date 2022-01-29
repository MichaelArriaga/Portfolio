import React from 'react';
// global components
import TypeformButton from '../components/TypeformButton';
// page components
import Footer from '../components/Footer';
// styling
import * as styles from './contact-css.module.css';
// static assets
import envelopeImage from '../../static/etc/images/pages/contact/envelope.svg';
import HeroHeader from '../components/general/HeroHeader';
import ReusableHelmet from '../components/ReusableHelmet';
import SideBar from '../components/Sidebar';
import fonts from '../constants/font_names';
const Contact = () => {
  return (
    <div className="">
      <ReusableHelmet
        title="Mike Arriaga About Me"
        description="Mike Arriaga About Me"
      />
      <div className="w-full sm:flex sm:flex-row sm:justify-center items-start">
        {/* sidebar start */}
        <div
          style={{ width: 290 }}
          className="hidden sm:block w-64 h-screen h-max mr-4 border-r border-gray-100"
        >
          <div style={{ marginTop: 150 }}></div>
          <SideBar />
        </div>
        {/* sidebar end */}

        {/* right panel start */}
        <div className="w-full sm:max-w-screen-sm mb-3">
          <HeroHeader highlighted="contact" />
          <div style={{ marginBottom: 150 }} className="">
            <h2
              style={{ fontFamily: fonts.bold }}
              className={'text-xl font-bold mb-2'}
            >
              /Contact
            </h2>

            <p
              style={{ fontFamily: fonts.regular }}
              className={'text-lg sm:text-xl mb-2 text-gray-900'}
            >
              Contact me
            </p>
          </div>
        </div>
        {/* right panel end */}
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
