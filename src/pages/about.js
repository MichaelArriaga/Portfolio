import aboutimg from '../../static/etc/images/pages/about/self-pic.png';
import { Link } from 'gatsby';
import React from 'react';
import fonts from '../constants/font_names';
import SidebarLayout from '../components/layouts/SidebarLayout';

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
            <span style={{ fontFamily: fonts.bold }} className={'font-bold'}>
              Mike
            </span>{' '}
            is a professional career musician and drum performance instructor
            turned product engineer, entrepreneur and design thinker.{' '}
          </p>

          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            <span style={{ fontFamily: fonts.bold }} className={'font-bold'}>
              In 2014
            </span>
            , Mike decided to switch his focus from music to designing and
            building{' '}
            <span
              style={{ fontFamily: fonts.bold }}
              className={'font-bold text-gray-900'}
            >
              meaningful
            </span>{' '}
            software, and visual designs to pursue as a{' '}
            <span
              style={{ fontFamily: fonts.bold }}
              className={'font-bold text-gray-900'}
            >
              career
            </span>{' '}
            Since then, he has aimed to build{' '}
            <span
              style={{ fontFamily: fonts.bold }}
              className={'font-bold text-gray-900'}
            >
              projects that benefit every day people
            </span>{' '}
            with his latest project being a tool that helps{' '}
            <span
              style={{ fontFamily: fonts.bold }}
              className={'font-bold text-gray-900'}
            >
              Amazon Flex workers
            </span>{' '}
            visualize their out of pocket expenses.{' '}
            <Link
              className={'font-bold text-gray-900 underline'}
              to="/projects/flex_mate"
            >
              <span style={{ fontFamily: fonts.bold }} className={'font-bold'}>
                CHECK IT OUT HERE
              </span>
            </Link>
          </p>

          <h2
            style={{ fontFamily: fonts.bold }}
            className={'text-xl font-bold mb-2'}
          >
            /Technology Agnostic
          </h2>

          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            I am{' '}
            <span style={{ fontFamily: fonts.bold }} className={'font-bold'}>
              technology agnostic
            </span>
            , meaning that I do not pledge allegiance to any one design tool or
            tech stack. Instead, I am hyper-focused on{' '}
            <span style={{ fontFamily: fonts.bold }} className={'font-bold'}>
              rapid learning and adapting
            </span>{' '}
            to many different frameworks, design tools, workflows and situations
            using optimal learning strategies and{' '}
            <span style={{ fontFamily: fonts.bold }} className={'font-bold'}>
              intense study regimen
            </span>
            .
          </p>

          <h2
            style={{ fontFamily: fonts.bold }}
            className="text-lg sm:text-xl mb-2 text-gray-900"
          >
            Let’s talk about what I can do for your project!
          </h2>
        </div>
      </SidebarLayout>
    );
  }
}

export default About;
