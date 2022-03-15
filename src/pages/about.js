import aboutimg from "../../static/etc/images/pages/about/self-pic.png";
import { Link } from "gatsby";
import React from "react";
import SidebarLayout from "../components/layouts/SidebarLayout";

class About extends React.Component {
  render() {
    return (
      <SidebarLayout
        meta_title="Mike Ray, Seattle Product Engineer - About"
        meta_description="Mike Ray, Seattle Product Engineer - About"
        highlighted_hero_link={"about"}
      >
        <div style={{ marginBottom: 150 }} className="">
          <img
            className={"hidden sm:block w-64 mx-auto "}
            src={aboutimg}
            alt="not loaded"
          />
          <h3 className="font-bold text-3xl my-2">Bio</h3>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Mike is a Product Engineer and Single Founder Based in Seattle Wa.
            After hours, he's a Musician (Drumset and Bass Guitar). Previously,
            Mike was{" "}
            <Link
              to="/projects/fresh_and_tumble"
              className="underline font-bold antialiased"
            >
              Founder and CTO of Fresh And Tumble
            </Link>
            , an Uber-style Delivery App for Laundry.
          </p>
          <p
            className={"text-lg mb-3 text-gray-900 font-normal antialiased"}
          ></p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Mike's latest product{" "}
            <a
              href="https://minty-snippets.netlify.app/"
              className="underline font-bold antialiased"
              target="_blank"
              rel="noreferrer"
            >
              Minty Snippets
            </a>
            , achieved 7th place on{" "}
            <a
              href="https://www.producthunt.com/posts/minty-snippets"
              className="underline font-bold antialiased"
              target="_blank"
              rel="noreferrer"
            >
              Product Hunt at Launch Day
            </a>{" "}
            🎉
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Mike believes that Single Technical Founders (STF) can win through a
            strong combination of user-centered design and the ability to wear
            multiple hats. Looking for help with your project or team?{" "}
            <a
              href="mailto:m.arriaga.smb@gmail.com"
              className="underline font-bold antialiased"
            >
              Email Mike
            </a>
          </p>
        </div>
      </SidebarLayout>
    );
  }
}

export default About;
