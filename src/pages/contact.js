import React from 'react';
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
