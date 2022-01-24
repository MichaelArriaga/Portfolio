import aboutimg from '../../static/etc/images/pages/about/self-pic.png';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import React from 'react';
// import TypeformButton from '../components/TypeformButton';
import HeroHeader from '../components/general/HeroHeader';
import ReusableHelmet from '../components/ReusableHelmet';
import fonts from '../constants/font_names';
class About extends React.Component {
  render() {
    return (
      <div>
        <ReusableHelmet
          title="Mike Arriaga About Me"
          description="Mike Arriaga About Me"
        />
        <HeroHeader highlighted="about" />
        <div className={'w-full h-full max-w-screen-sm mx-auto px-2'}>
          <img
            className={'w-64 mx-auto mb-4'}
            src={aboutimg}
            alt="not loaded"
          />

          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-base text-left w-full mb-4 text-gray-900'}
          >
            <span
              style={{ fontFamily: fonts.bold }}
              className={'font-bold text-gray-900'}
            >
              Mike
            </span>{' '}
            is a professional career musician and drum performance instructor
            turned product engineer, entrepreneur and design thinker.{' '}
          </p>

          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-base text-left w-full mb-4'}
          >
            <span
              style={{ fontFamily: fonts.bold }}
              className={'font-bold text-gray-900'}
            >
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
            className={'text-base text-left w-full mb-4'}
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

          <h2 style={{ fontFamily: fonts.bold }} className="mb-8">
            Let’s talk about what I can do for your project!
          </h2>

          {/* <div style={{ width: '300px', margin: 'auto' }}>
            <TypeformButton />
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
