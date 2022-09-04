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
          <h3 className="mb-1 text-xl antialiased font-black text-gray-900 sm:text-2xl">
            My Apps
          </h3>
        </div>
        <a
          href="https://www.mintysnippets.com"
          // style={{ height: 144 }}
          className="block w-full ml-3 mr-2 text-xl antialiased font-bold text-left text-gray-900 border-gray-100 rounded-lg tracking-snug"
          target="_blank"
          rel="noreferrer"
        >
          Minty Snippets (2022 - Current)
        </a>
        <Link
          className="block w-full ml-3 mr-2 text-xl antialiased font-bold text-left text-gray-900 border-gray-100 rounded-lg tracking-snug"
          to="/projects/fresh_and_tumble"
        >
          Fresh And Tumble (2019 - 2021)
        </Link>

        <Link
          className="block w-full ml-3 mr-2 text-xl antialiased font-bold text-left text-gray-900 border-gray-100 rounded-lg tracking-snug"
          to="/projects/flex_mate"
        >
          Flex Mate (2018)
        </Link>
      </div>
      {/* latest posts start */}
      <LatestPostsLists />
      {/* latest posts end */}
    </SidebarLayout>
  );
};

export default Index;
