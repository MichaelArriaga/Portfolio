import React from "react";
import ReusableHelmet from "../../components/ReusableHelmet";
import ProjectPageTemplate from "../../components/projects/ProjectPageTemplate";
import Footer from "../../components/Footer";

// static assets
import mockupImg from "../../../static/etc/images/project_images/minty_snippets/mockup.gif";
import baseline_grid_img from "../../../static/etc/images/project_images/flex_mate/8px-grid.png";
import gutter_img from "../../../static/etc/images/project_images/flex_mate/16px-grid.png";
import vertical_rhythm_img from "../../../static/etc/images/project_images/flex_mate/48px-grid.png";
import typography_image from "../../../static/etc/images/project_images/flex_mate/typography-system.png";
// import flow_chart_small_screen_img from '../../../static/etc/images/project_images/flex_mate/flow-chart-small-screen.png';
// import flow_chart_large_screen_img from '../../../static/etc/images/project_images/flex_mate/flow-chart-large-screen.png';
// stylesheet
import "../index-css.module.css";

const CrowdMint = () => (
  <div className="w-full">
    <ReusableHelmet title={"Minty Snippets"} description={"Minty Snippets"} />{" "}
    <ProjectPageTemplate
      primary_color="#3661F2"
      mockupImg={mockupImg}
      title="Minty Snippets"
      project_date="2022 - Current"
      try_url={"https://minty-snippets.netlify.app/"}
      description={[
        "Minty Snippets is a browser extension that makes it easy to create, customize and paste reusable text snippets in the browser. Tired of copying/personalizing that cover letter endlessly on your job hunt? Minty Snippets makes personalizing text easier. Fun fact: 'Snippets' are nothing new, Programmers have been using Snippets for many years because they prevent having to write the same boilerplate code over and over. Minty Snippets takes the idea of Snippets and attempts to make it accessible to everyone, whether you are a coder or not. A new Hotkey powered workflow makes creating/customizing snippets faster and more convenient than ever before.",
      ]}
      scope_array={["Browser Extension", "Productivity"]}
      core_tech_array={["React.js", "Chrome Manifest V3"]}
      apps_used_array={["Adobe XD", "VIM"]}
      features_array={["Snippets", "Customization", "Hotkey Workflow"]}
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
          color: "#3661F2",
        },
        {
          label: "Flash",
          labelcolor: "white",
          color: "#FF0000",
        },
        {
          label: "Success",
          labelcolor: "black",
          color: "#00EA3F",
        },
        {
          label: "Text/BG",
          labelcolor: "white",
          color: "#1F1F1F",
        },
      ]}
      typography_image={typography_image}
      // flowchart_small_screen_img={flow_chart_small_screen_img}
      // flowchart_large_screen_img={flow_chart_large_screen_img}
    />
    <Footer />
  </div>
);

export default CrowdMint;
