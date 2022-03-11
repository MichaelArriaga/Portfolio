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
            After hours, he's a Musician (Drumset and Bass Guitar).
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Previously, Mike was CTO and Co-Founder of{" "}
            <Link
              to="/projects/fresh_and_tumble"
              className="underline font-bold antialiased"
            >
              Fresh And Tumble
            </Link>
            , an Uber-style Delivery App for Laundry.
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            In 2018, Mike gained some notoriety for creating{" "}
            <Link
              to="/projects/flex_mate"
              className="underline font-bold antialiased"
            >
              Flex Mate
            </Link>
            , A free open source tool for Amazon Flex Drivers to estimate often
            unaccounted for expenses.
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Mike helps startups win through user-centered design and the ability
            to wear multiple hats in a product team.
          </p>

          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Looking for help with your project?{" "}
            <a
              href="mailto:m.arriaga.smb@gmail.com"
              className="underline font-bold antialiased"
            >
              Send Mike an Email
            </a>
          </p>
        </div>
      </SidebarLayout>
    );
  }
}

export default About;
