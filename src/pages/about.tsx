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
          <h3 className="mb-2 text-3xl font-bold">About Mike</h3>

          <p className={"text-xl mb-3 text-gray-900 font-medium antialiased"}>
            Mike is an indie Rails Developer based in Akron OH. After hours,
            he's a Musician (Drums & Bass Guitar).
          </p>
          <p className={"text-xl mb-3 text-gray-900 font-medium antialiased"}>
            Previously, Mike was the Founder, CTO, and Principal Engineer of{" "}
            <Link
              to="/projects/fresh_and_tumble"
              className="antialiased font-bold underline"
            >
              Fresh And Tumble,
            </Link>{" "}
            an Uber-like delivery app that included 2 React Native apps
            (Customer and Driver) and a Rails 6 Monolith-powered Web App/API.
          </p>
          <p className={"text-xl mb-3 text-gray-900 font-medium antialiased"}>
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

          <p className={"text-xl mb-3 text-gray-900 font-medium antialiased"}>
            Mike has over 10 years of experience in web development, with a
            specific focus on building web apps and RESTful APIs using Rails for
            over 6 years.
          </p>

          <p className={"text-xl mb-3 text-gray-900 font-medium antialiased"}>
            Mike has gained a deep understanding of how to architect Rails
            applications that are scalable, while taking careful considerations
            for building maintainable business logic.
          </p>

          <p className={"text-xl mb-3 text-gray-900 font-medium antialiased"}>
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
