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
        path={"/"}
        title={`${metaTitle} - Home`}
        description={metaTitle}
        thumbnail={false}
        readtime={null}
        tags={null}
        article={false}
      />
      <div className="sm:max-w-screen-sm mx-auto">
        <div className="flex flex-row justify-start items-center">
          <h3 className="text-xl text-gray-900 mb-2 font-black mr-2 antialiased">
            My Apps
          </h3>
        </div>
        <div>
          <Link
            to={"https://minty-snippets.netlify.app/"}
            // style={{ height: 144 }}
            className={
              "block w-full mb-2 ml-3 rounded-lg border-gray-100 text-gray-900"
            }
            target={"_blank"}
          >
            <div className="">
              <div className="flex flex-wrap justify-start items-center">
                <h1
                  className={
                    "text-xl text-gray-900 text-left tracking-snug antialiased mr-2 underline font-bold antialiased"
                  }
                >
                  Minty Snippets
                </h1>
                <h3
                  style={{ marginBottom: 0 }}
                  className={
                    "text-lg text-gray-900 text-left leading-none tracking-snug font-semibold antialiased"
                  }
                >
                  (2022)
                </h3>
              </div>
              <p
                style={{ color: "#EA522A" }}
                className="mt-0 text-lg text-gray-500 font-bold text-left leading-none antialiased"
              >
                <span className="text-base mr-1">🎉 </span>
                #7 on Product Hunt (3/13/2022){" "}
              </p>
            </div>
            <p className="text-lg text-gray-900 leading-tight font-normal antialiased">
              Make your job search less repetitive.
            </p>
          </Link>
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
