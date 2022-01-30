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
        meta_title="Mike Arriaga Portfolio About"
        meta_description="Mike Arriaga Web Developer Portfolio About"
        highlighted_hero_link={'about'}
      >
        <div style={{ marginBottom: 150 }} className="">
          <img
            className={'w-64 mx-auto my-10'}
            src={aboutimg}
            alt="not loaded"
          />
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            Mike is a Product Engineer and Single Founder Based in Seattle Wa.
            After hours, he's a Professional Musician (Drumset and Bass Guitar).
          </p>
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
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
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
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
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            Mike helps startups win with user-centered design and the ability to
            wear multiple hats in a product team.
          </p>
        </div>
      </SidebarLayout>
    );
  }
}

export default About;
