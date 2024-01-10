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
      <div style={{maxHeight: "100vh"}} className="h-screen max-h-screen w-full max-w-sm sm:max-w-full sm:mr-auto">
        <div className="mr-auto mb-1">
          <h3 className="text-3xl antialiased font-black mb-3 text-gray-900 text-center sm:text-left tracking-tight">
            Libraries & Tools
          </h3>

          <ProjectItem
            name="Stimulus Inline Input Validations"
            technologies={["StimulusJS", "Vanilla JS"]}
            to="https://github.com/MikeRayUX/stimulus-inline-input-validations"
            externalLink={true}
            latest={true}
          />
        </div>
        <div className="mr-auto mb-1">
          <h3 className="text-3xl antialiased font-black text-gray-900 mb-3 text-center sm:text-left tracking-tight">
            Apps
          </h3>

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
            name="Minty Snippets"
            technologies={["Rails", "React", "Electron", "Tailwind", "Docker"]}
            to="https://www.mintysnippets.com"
            externalLink={true}
          />

          <ProjectItem
            name="Prolific Daily Summed Submissions"
            technologies={["Chrome Manifest V3", "Tailwind", "Vanilla JS"]}
            to="https://chrome.google.com/webstore/detail/prolific-daily-summed-sub/jmcjelkbllmmeaeplopkdcbkpbffofpg?hl=en&authuser=1"
            externalLink={true}
          />

          <ProjectItem
            name="Zero Mileage Tracker"
            technologies={["React Native", "Tailwind"]}
            to="https://apps.apple.com/us/app/zero-mileage-tracker/id1668300293?platform=iphone"
            externalLink={true}
            latest={false}
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
      </div>
    </SidebarLayout>
  );
};

export default Index;
