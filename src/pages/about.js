import aboutimg from '../../static/etc/images/pages/about/self-pic.png';
import { Link } from 'gatsby';
import React from 'react';
import fonts from '../constants/font_names';
import SidebarLayout from '../components/layouts/SidebarLayout';
import Bold from '../components/general/Bold';

class About extends React.Component {
  render() {
    return (
      <SidebarLayout
        meta_title="Mike Arriaga, Seattle Product Engineer - About"
        meta_description="Mike Arriaga, Seattle Product Engineer - About"
        highlighted_hero_link={'about'}
      >
        <div style={{ marginBottom: 150, marginTop: 20 }} className="">
          <img
            className={'w-64 mx-auto mb-10'}
            src={aboutimg}
            alt="not loaded"
          />
          <p
            style={{ fontFamily: fonts.regular, lineHeight: 1.4 }}
            className={'text-lg mb-2 text-gray-900'}
          >
            Mike is a Product Engineer and Single Founder Based in Seattle Wa.
            After hours, he's a Musician (Drumset and Bass Guitar).
          </p>
          <p
            style={{ fontFamily: fonts.regular, lineHeight: 1.4 }}
            className={'text-lg mb-2 text-gray-900'}
          >
            Previously, Mike was CTO and Co-Founder of{' '}
            <Link
              style={{ fontFamily: fonts.bold }}
              to="/projects/fresh_and_tumble"
              className="underline"
            >
              Fresh And Tumble
            </Link>
            , an Uber-style Delivery App for Laundry.
          </p>
          <p
            style={{ fontFamily: fonts.regular, lineHeight: 1.4 }}
            className={'text-lg mb-2 text-gray-900'}
          >
            In 2018, Mike gained some notoriety for creating{' '}
            <Link
              style={{ fontFamily: fonts.bold }}
              to="/projects/flex_mate"
              className="underline"
            >
              Flex Mate
            </Link>
            , A free open source tool for Amazon Flex Drivers to estimate often
            unaccounted for expenses.
          </p>
          <p
            style={{ fontFamily: fonts.regular, lineHeight: 1.4 }}
            className={'text-lg mb-2 text-gray-900'}
          >
            Mike helps startups win through user-centered design and the ability
            to wear multiple hats in a product team.
          </p>

          <p
            style={{ fontFamily: fonts.regular, lineHeight: 1.4 }}
            className={'text-lg mb-2 text-gray-900'}
          >
            Looking for help with your project?{' '}
            <a
              href="mailto:m.arriaga.smb@gmail.com"
              style={{ fontFamily: fonts.bold }}
              className="underline"
            >
              Send Mike an Email
            </a>
          </p>
        </div>
      </SidebarLayout>
    );
  }
}

export default About;
