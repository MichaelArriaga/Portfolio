import React from 'react';
import '../components/layout.css';
import fonts from '../constants/font_names';
import ProjectItem from '../components/index/ProjectItem';
import LatestPostsLists from '../components/index/LatestPostsList';
import SidebarLayout from '../components/layouts/SidebarLayout';

const Index = () => {
  return (
    <SidebarLayout
      meta_title="Mike Arriaga Portfolio Home"
      meta_description="Mike Arriaga Web Developer Portfolio Home"
      highlighted_hero_link={'home'}
    >
      <div className="sm:max-w-screen-sm mx-auto">
        <h3
          style={{ fontFamily: fonts.regular }}
          className="text-left text-lg sm:text-xl mb-2"
        >
          Hey! <span className="pl-1"></span> 👋
        </h3>
        <h3
          style={{
            fontFamily: fonts.regular,
          }}
          className="text-lg sm:text-xl mb-2 text-gray-900"
        >
          I'm a Software Engineer and Single Founder based in Seattle
          Washington. I help startups win through user-centered design and the
          ability to wear multiple hats on a product team. On occasion, I write
          about my favorite tools for building software products: Ruby on Rails
          and React Native.
        </h3>
      </div>
      {/* apps start */}
      <div className="sm:max-w-screen-sm mx-auto">
        <h3
          style={{ fontFamily: fonts.bold }}
          className="text-lg text-gray-900 mb-3 sm:mb-5"
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
          route="/projects/crowd_mint"
        />
        <ProjectItem
          title="Fresh And Tumble"
          underline_color="#D70CF5"
          underline_width={200}
          time_range="2019 - 2021"
          description="Uber for Laundry"
          route="/projects/fresh_and_tumble"
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
      <LatestPostsLists />
      {/* latest posts end */}
    </SidebarLayout>
  );
};

export default Index;
