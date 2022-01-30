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
            className={'w-64 mx-auto mb-4'}
            src={aboutimg}
            alt="not loaded"
          />
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            Mike is a <Bold>Product Engineer</Bold> and{' '}
            <Bold>Single Founder</Bold> Based in <Bold>Seattle Wa</Bold>. After
            hours, he's a Professional Multi-Instrumentalist{' '}
            <Bold>(Drumset, Bass, Guitar and Clarinet)</Bold>.
          </p>
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            Previously, Mike was{' '}
            <Bold>CTO and Co-Founder of Fresh And Tumble, an</Bold>{' '}
            <Link
              style={{ fontFamily: fonts.bold }}
              to="/projects/fresh_and_tumble"
              className="underline"
            >
              Uber-style Delivery App for Laundry
            </Link>
          </p>
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            Mike helps startups win with <Bold>user-centered design</Bold> and
            the ability to wear multiple hats in a product team.
          </p>
        </div>
      </SidebarLayout>
    );
  }
}

export default About;
