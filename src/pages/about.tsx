import aboutimg from "../../static/etc/images/pages/about/self-pic.png";
import { Link } from "gatsby";
import React from "react";
import SidebarLayout from "../components/layouts/SidebarLayout";
import { metaTitle } from "../constants/metaTitle";
import SEO from "../components/general/SEO";

class About extends React.Component {
  render() {
    return (
      <SidebarLayout highlighted_hero_link={"about"}>
        <SEO
          path={"/about"}
          title={`${metaTitle} - About`}
          description={metaTitle}
          thumbnail={false}
          readtime={null}
          tags={null}
          article={false}
        />
        <div style={{ marginBottom: 150 }} className="">
          <h3 className="mb-2 text-3xl font-black">Bio</h3>

          <p className={"text-lg mb-3 text-gray-900 font-medium antialiased"}>
            Mike is an indie Rails Developer based in Seattle WA. After hours, he's a Musician (Drums & Bass Guitar).
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-medium antialiased"}>
            Previously, Mike was Founder, CTO and Principal Engineer at{" "}
            <Link
              to="/projects/fresh_and_tumble"
              className="antialiased font-bold underline"
            >
              Fresh And Tumble,
            </Link>{" "}
            an Uber-of Delivery App which consisted of 2 React Native Apps:
            (Customer/Driver) & Web App/API powered by a Rails 6 Monolith.
          </p>
          <p
            className={"text-lg mb-3 text-gray-900 font-medium antialiased"}
          ></p>
          <p className={"text-lg mb-3 text-gray-900 font-medium antialiased"}>
            Mike's latest product{" "}
            <a
              href="https://mintysnippets.com"
              className="antialiased font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              Minty Snippets
            </a>{" "}
            achieved 7th place on{" "}
            <a
              href="https://www.producthunt.com/posts/minty-snippets"
              className="antialiased font-bold underline"
              target="_blank"
              rel="noreferrer"
            >
              Product Hunt at Launch Day (3/13/2022) 🎉
            </a>{" "}
          </p>

          <p className={"text-lg mb-3 text-gray-900 font-medium antialiased"}>
            With over 10 years experience in Web Development and 6 years
            experience building Web Apps and RESTful APIs with Rails, Mike has a
            strong understanding of both Web Development and Rails best practices.
          </p>
          <p className={"text-lg mb-3 text-gray-900 font-medium antialiased"}>
            Need help with your team or project?{" "}
            <a
              href="mailto:m.arriaga.smb@gmail.com"
              className="antialiased font-bold underline"
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
