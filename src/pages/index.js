import React from "react";
import "../components/layout.css";
import ProjectItem from "../components/index/ProjectItem";
import LatestPostsLists from "../components/index/LatestPostsList";
import SidebarLayout from "../components/layouts/SidebarLayout";

const Index = () => {
  return (
    <SidebarLayout
      meta_title="Mike Ray, Seattle Product Engineer - Home"
      meta_description="Mike Ray, Seattle Product Engineer Web Developer - Home"
      highlighted_hero_link={"home"}
    >
      {/* apps start */}
      <div className="sm:max-w-screen-sm mx-auto">
        <div className="flex flex-row justify-start items-center">
          <h3 className="text-xl text-gray-900 mb-2 font-bold mr-2 antialiased">
            My Apps
          </h3>
        </div>
        {/* https://minty-snippets.netlify.app/ */}

        <ProjectItem
          title="Minty Snippets"
          underline_color="#3661F2"
          underline_width={190}
          time_range="2022"
          description="Make your job search less repetitive."
          route="https://minty-snippets.netlify.app/"
          open_in_new_tab={true}
        />
        <ProjectItem
          title="Fresh And Tumble"
          underline_color="#D70CF5"
          underline_width={271}
          time_range="2019 - 2021"
          description="Uber for Laundry"
          route="/projects/fresh_and_tumble"
        />
        <ProjectItem
          title="Flex Mate"
          underline_color="#FE8B28"
          underline_width={144}
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
