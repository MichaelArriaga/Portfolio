import React from 'react';
import '../components/layout.css';
import Footer from '../components/Footer';
import ReusableHelmet from '../components/ReusableHelmet';
import { Link } from 'gatsby';
import SideBar from '../components/Sidebar';

import HeroHeader from '../components/general/HeroHeader';
import fonts from '../constants/font_names';
import ProjectItem from '../components/index/ProjectItem';
import Post from '../components/index/Post';
const Index = () => {
  return (
    <div className="">
      <ReusableHelmet
        title="Mike Arriaga Portfolio Home"
        description="Mike Arriaga Web Developer Portfolio Home"
      />
      <div className="w-full sm:flex sm:flex-row sm:justify-center items-start">
        {/* sidebar start */}
        <div
          style={{ width: 290 }}
          className="hidden sm:block w-64 h-screen h-max mr-4 border-r border-gray-100"
        >
          <div style={{ marginTop: 170 }}></div>
          <SideBar />
        </div>
        {/* sidebar end */}

        {/* right panel start */}
        <div className="">
          <HeroHeader highlighted={'home'} />
          {/* hero start */}
          <div className="sm:max-w-xl mx-auto mb-3">
            <h3
              style={{ fontFamily: fonts.regular }}
              className="text-base mb-2"
            >
              Howdy 👋
            </h3>
            <h3
              style={{ fontFamily: fonts.regular, lineHeight: 1.3 }}
              className="text-base mb-2 text-gray-900"
            >
              I’m a{' '}
              <Link
                to="/blog/understanding-redux"
                style={{ color: '#C60212', fontFamily: fonts.semiBold }}
                className="font-semibold"
              >
                Ruby on Rails
              </Link>{' '}
              and{' '}
              <Link
                to="/blog/understanding-redux"
                style={{ color: '#00A0CC', fontFamily: fonts.semiBold }}
                className=""
              >
                React Native
              </Link>{' '}
              developer based in Seattle Washington. With over 7 years industry
              experience, I help startups win through user-centered design and
              the ability to wear multiple hats on a product team.
            </h3>

            <h3
              style={{ fontFamily: fonts.regular }}
              className="text-base mb-2 text-gray-900"
            >
              Need help?{' '}
              <a
                href="mailto: m.arriaga.smb@gmail.com"
                style={{ fontFamily: fonts.bold }}
                className="text-gray-900 underline"
              >
                Send me an email
              </a>{' '}
            </h3>
          </div>
          {/* hero end */}
          {/* apps start */}
          <div className="sm:max-w-xl mx-auto">
            <h3
              style={{ fontFamily: fonts.bold }}
              className="text-lg text-gray-900 sm:text-base mb-3 sm:mb-5"
            >
              My Apps
            </h3>
            <ProjectItem
              title="CrowdMint"
              underline_color="#3661F2"
              underline_width={125}
              time_range="2022"
              description="Track your Crowdsource earnings goals from multiple sources
      automatically."
              route="/projects/flex_mate"
            />
            <ProjectItem
              title="Fresh And Tumble"
              underline_color="#D70CF5"
              underline_width={200}
              time_range="2018 - 2021"
              description="Uber for Laundry"
              route="/projects/flex_mate"
            />
            <ProjectItem
              title="Flex Mate"
              underline_color="#FE8B28"
              underline_width={110}
              time_range="2018"
              description="Help Amazon Flex Drivers estimate often unaccounted for fuel expenses. "
              route="/projects/flex_mate"
            />
          </div>
          {/* apps end */}
          {/* latest posts start */}
          <div className="sm:max-w-xl mx-auto mb-4">
            <h3
              style={{ fontFamily: fonts.bold }}
              className="text-lg sm:text-base mb-3 sm:mb-5"
            >
              Latest Posts
            </h3>
            <Post
              title="Understanding Redux in 4 Steps"
              date="Jan 18, 2019"
              post_tags={['React', 'Redux']}
            />
            <Post
              title="How to return a 404 error in getServerSide.js"
              date="Sept 26, 2021"
              post_tags={['React', 'React Native']}
            />
          </div>
          {/* latest posts end */}
          {/* <Footer /> */}
          <div className="sm:hidden">
            <SideBar hide_socials={true} />
          </div>
        </div>
        {/* right panel end */}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
