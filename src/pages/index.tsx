import React from "react";
import "../components/layout.css";
import ProjectItem from "../components/index/ProjectItem";
import LatestPostsLists from "../components/index/LatestPostsList";
import SidebarLayout from "../components/layouts/SidebarLayout";
import { Link } from "gatsby";
import { metaTitle } from "../constants/metaTitle";
import SEO from "../components/general/SEO";

const Index = () => {
  return (
    <SidebarLayout highlighted_hero_link={"home"}>
      {/* apps start */}
      <SEO
        title={`${metaTitle} - Home`}
        description={metaTitle}
        path={"/"}
        date={null}
        thumbnail={false}
        readtime={null}
        tags={null}
        article={false}
      />
      <div className="mr-auto sm:max-w-screen-sm">
        <div className="flex flex-row items-center justify-start">
          <h3 className="mb-2 text-xl antialiased font-black text-gray-900 sm:text-2xl">
            My Apps
          </h3>
        </div>
        <div>
          <a
            href="https://www.mintysnippets.com"
            // style={{ height: 144 }}
            className="block w-full mb-1 ml-3 text-gray-900 border-gray-100 rounded-lg"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <div className="flex flex-wrap items-center justify-start">
                <h1
                  className={
                    "text-xl text-gray-900 text-left tracking-snug antialiased mr-2 font-bold antialiased"
                  }
                >
                  Minty Snippets
                </h1>
                <h3
                  style={{ marginBottom: 0 }}
                  className={
                    "text-lg text-gray-900 text-left leading-none tracking-snug font-bold antialiased"
                  }
                >
                  (2022 - Current)
                </h3>
              </div>
            </div>
          </a>
        </div>

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
