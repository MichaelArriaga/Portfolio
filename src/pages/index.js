import React from 'react';
// import Header from '../components/Header';
// import ResponsiveHeader from '../components/ResponsiveHeader';
// import ProjectItem from '../components/ProjectItem';
// import Footer from '../components/Footer';
// import category_tags from '../constants/category_tags';
import ReusableHelmet from '../components/ReusableHelmet';

// styling
// import Layout from '../components/Layout';
// import * as styles from './index-css.module.css';

// static assets
// import flexmatepreview from '../../static/etc/images/project-images/flex-mate/flex-mate-preview.png';
import HeroHeader from '../components/general/HeroHeader';
import fonts from '../constants/font_names';
import ProjectItem from '../components/index/ProjectItem';
import Post from '../components/index/Post';

const Index = () => (
  <div className="w-full">
    <ReusableHelmet
      title="Mike Arriaga Portfolio Home"
      description="Mike Arriaga Web Developer Portfolio Home"
    />
    <HeroHeader />
    {/* hero start */}
    <div className="sm:max-w-xl mx-auto pb-4 mb-3">
      <h3
        style={{ fontFamily: fonts.regular }}
        className="text-lg sm:text-xl mb-2"
      >
        Howdy 👋
      </h3>
      <h3
        style={{ fontFamily: fonts.regular, lineHeight: 1.3 }}
        className="text-lg sm:text-xl"
      >
        I help startups win through user-centered design and the ability to wear
        multiple hats on a product team. These days you’ll find me performant
        Web Apps and RESTful APIs with Ruby on Rails and native Apps with React
        Native.
      </h3>
    </div>
    {/* hero end */}
    {/* apps start */}
    <div className="sm:max-w-xl mx-auto">
      <h3
        style={{ fontFamily: fonts.bold }}
        className="text-lg sm:text-xl mb-3 sm:mb-5"
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
        route="/projects/flex-mate"
      />
      <ProjectItem
        title="Fresh And Tumble"
        underline_color="#D70CF5"
        underline_width={200}
        time_range="2018 - 2021"
        description="Uber for Laundry"
        route="/projects/flex-mate"
      />
      <ProjectItem
        title="Flex Mate"
        underline_color="#FE8B28"
        underline_width={110}
        time_range="2018"
        description="Help Amazon Flex Drivers estimate often unaccounted for fuel expenses. "
        route="/projects/flex-mate"
      />
    </div>
    {/* apps end */}
    {/* latest posts start */}
    <div className="sm:max-w-xl mx-auto">
      <h3
        style={{ fontFamily: fonts.bold }}
        className="text-lg sm:text-xl mb-3 sm:mb-5"
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
  </div>
);

export default Index;

// <Header />
// <ResponsiveHeader />
// <div className={'w-full mx-auto px-4 flex justify-center items-center'}>
//   <ProjectItem
//     path="/projects/flex-mate"
//     title="Flex Mate"
//     // 11 words max to avoid breaking style
//     headline="Help Amazon flex workers better visualize their out of pocket expenses."
//     tags={[category_tags.new, category_tags.design, category_tags.code]}
//     primarycolor="white"
//     previewimg={flexmatepreview}
//   />
// </div>
