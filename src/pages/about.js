import aboutimg from "../../static/etc/images/pages/about/self-pic.png";
import { Link } from "gatsby";
import React from "react";
import SidebarLayout from "../components/layouts/SidebarLayout";

//
//
//
// Looking for help with your project or team? Let's chat.

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
            Mike is a Product Engineer and Rails Enthusiast based in Seattle WA.
            After hours, he's a Musician (Drums & Bass Guitar).
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Previously, Mike was Founder, CTO and Principal Engineer at{" "}
            <Link
              to="/projects/fresh_and_tumble"
              className="underline font-bold antialiased"
            >
              Fresh And Tumble,
            </Link>{" "}
            an Uber-of Delivery App which consisted of 2 React Native Apps:
            (Customer/Driver) & Web App/API powered by a Rails 6 Monolith.
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
            </a>{" "}
            achieved 7th place on{" "}
            <a
              href="https://www.producthunt.com/posts/minty-snippets"
              className="underline font-bold antialiased"
              target="_blank"
              rel="noreferrer"
            >
              Product Hunt at Launch Day (3/13/2022) 🎉
            </a>{" "}
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            With over 10 years experience in Web Development and 8 years
            experience building Web Apps and RESTful APIs with Rails, Mike has a
            strong understanding of both Web Development best practices and how
            to architect Rails apps that scale.
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-normal antialiased"}>
            Need help with your team or project?{" "}
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
