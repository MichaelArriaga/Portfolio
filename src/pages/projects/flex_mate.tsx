import React from "react";

import ReusableHelmet from "../../components/ReusableHelmet";
import ProjectPageTemplate from "../../components/projects/ProjectPageTemplate";
import Footer from "../../components/Footer";

// static assets
import mockupImg from "../../../static/etc/images/project_images/flex_mate/phone-mockup.png";
import baseline_grid_img from "../../../static/etc/images/project_images/flex_mate/8px-grid.png";
import gutter_img from "../../../static/etc/images/project_images/flex_mate/16px-grid.png";
import vertical_rhythm_img from "../../../static/etc/images/project_images/flex_mate/48px-grid.png";
import typography_image from "../../../static/etc/images/project_images/flex_mate/typography-system.png";
import flow_chart_small_screen_img from "../../../static/etc/images/project_images/flex_mate/flow-chart-small-screen.png";
import flow_chart_large_screen_img from "../../../static/etc/images/project_images/flex_mate/flow-chart-large-screen.png";
// stylesheet
import "../index-css.module.css";
// import HeroHeader from '../../components/general/HeroHeader';

const FlexMate = () => (
  <div className="w-full">
    <ReusableHelmet title={"Flex Mate App"} description={"Flex Mate App"} />
    <ProjectPageTemplate
      primary_color="#FE8B10"
      mockupImg={mockupImg}
      title="FLEX MATE"
      project_date="November 2018"
      try_url={""}
      description={[
        "A tool that helps Amazon Flex Drivers estimate often unaccounted for fuel expenses. This app shows the user a list of available delivery stations based on their preferred region, and renders an estimate of fuel cost for travel based on the user provided average cost per gallon (cpg) as well as their vehicle average miles per gallon (mpg).",
      ]}
      scope_array={["Website", "CostAnalysis"]}
      core_tech_array={["React.js", "Google Distance Matrix API"]}
      apps_used_array={["Adobe XD", "VSCode"]}
      features_array={[
        "Fuel cost estimation",
        "Real-Time travel time estimatinos",
        "Show job types by station",
        "Multiple region coverage",
      ]}
      metrics={{
        baseline_grid: "8px",
        baseline_grid_img: baseline_grid_img,
        gutter: "16px",
        gutter_img: gutter_img,
        vertical_rhythm: "48px",
        vertical_rhythm_img: vertical_rhythm_img,
      }}
      colors_array={[
        {
          label: "Primary",
          labelcolor: "white",
          color: "#FE8B10",
        },
        {
          label: "Flash",
          labelcolor: "white",
          color: "#FF0000",
        },
        {
          label: "Text/BG",
          labelcolor: "white",
          color: "#000000",
        },
      ]}
      typography_image={typography_image}
      flowchart_small_screen_img={flow_chart_small_screen_img}
      flowchart_large_screen_img={flow_chart_large_screen_img}
    />
    <Footer />
  </div>
);

export default FlexMate;
