import React from "react";
import "../components/layout.css";
import LatestPostsLists from "../components/index/LatestPostsList";
import SidebarLayout from "../components/layouts/SidebarLayout";
import { metaTitle } from "../constants/metaTitle";
import SEO from "../components/general/SEO";
import ProjectItem from "../components/index/ProjectItem";

const Index: React.FC = (): JSX.Element => {
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
      <div className="mr-auto sm:max-w-screen-sm mb-2">
        <div className="flex flex-row items-center justify-start">
          <h3 className="mb-1 text-xl antialiased font-black text-gray-900 tracking-tight">
            My Apps
          </h3>
        </div>

        <ProjectItem
          name="Zero Mileage Tracker"
          technologies={["React Native", "Tailwind"]}
          to="http://Zero-Mileage-Tracker.com"
          externalLink={true}
          latest={true}
        />

        <ProjectItem
          name="Fresh And Tumble Laundry"
          technologies={[
            "Rails",
            "React",
            "React Native",
            "Tailwind",
            "Docker",
          ]}
          to="/projects/fresh_and_tumble"
          externalLink={false}
        />

        <ProjectItem
          name="Prolific Daily Summed Submissions"
          technologies={["Chrome Manifest V3", "Tailwind", "Vanilla JS"]}
          to="https://chrome.google.com/webstore/detail/prolific-daily-summed-sub/jmcjelkbllmmeaeplopkdcbkpbffofpg?hl=en&authuser=1"
          externalLink={true}
        />

        <ProjectItem
          name="Minty Snippets"
          technologies={["Rails", "React", "Electron", "Tailwind", "Docker"]}
          to="https://www.mintysnippets.com"
          externalLink={true}
        />

        <ProjectItem
          name="Flex Mate"
          technologies={["HTML", "CSS", "Vanilla JS"]}
          to="/projects/flex_mate"
          externalLink={false}
        />
      </div>
      {/* latest posts start */}
      <LatestPostsLists />

      {/* latest posts end */}
    </SidebarLayout>
  );
};

export default Index;
