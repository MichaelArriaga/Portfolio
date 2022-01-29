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
import SidebarLayout from '../components/layouts/SidebarLayout';
const Contact = () => {
  return (
    <SidebarLayout
      meta_title="Mike Arriaga Contact"
      meta_description="Mike Arriaga Contact"
      highlighted_hero_link="contact"
    >
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
    </SidebarLayout>
  );
};
export default Contact;
