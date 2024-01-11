import React from "react";
import "../components/layout.css";
import SidebarLayout from "../components/layouts/SidebarLayout";
import { metaTitle } from "../constants/metaTitle";
import SEO from "../components/general/SEO";
import ProjectItem from "../components/index/ProjectItem";
import { StaticQuery, graphql } from "gatsby";
import Post from "../components/Post";
import { Link } from "gatsby";

const Index: React.FC = (): JSX.Element => {
  return (
    <SidebarLayout highlighted_hero_link={"home"}>
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
      <div
        style={{ maxHeight: "100vh" }}
        className="h-screen max-h-screen w-full max-w-sm md:max-w-[500px] md:mr-auto space-y-6 "
      >
        <div className="mr-auto md:pl-2 mb-1">
          <h3 className="text-3xl antialiased font-bold text-gray-900 mb-1 text-center md:text-left tracking-tight">
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
        <div className="mr-auto mb-1 md:pl-2">
          <h3 className="text-3xl antialiased font-bold text-gray-900 mb-1 text-center md:text-left tracking-tight">
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
        <div className="w-full mb-8 md:mb-16 mr-auto md:pl-2">
          <h3 className="text-3xl  antialiased font-bold text-gray-900 mb-1 text-center md:text-left tracking-tight">
            Latest Post
          </h3>
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  limit: 1
                ) {
                  edges {
                    node {
                      id
                      excerpt(pruneLength: 250)
                      frontmatter {
                        date(formatString: "MM/DD/YYYY")
                        slug
                        title
                        thumbnail {
                          childImageSharp {
                            gatsbyImageData(width: 800)
                          }
                        }
                        tags
                      }
                    }
                  }
                }
              }
            `}
            render={(data) => {
              const posts = data.allMarkdownRemark.edges;
              return (
                <>
                  {posts.length > 0
                    ? posts.map((item: any) => {
                        let frontmatter = item.node.frontmatter;
                        return (
                          <Post
                            key={frontmatter.title}
                            title={frontmatter.title}
                            date={frontmatter.date}
                            slug={frontmatter.slug}
                            post_tags={frontmatter.tags.split(",")}
                            thumbnail={
                              frontmatter.thumbnail?.childImageSharp
                                ?.gatsbyImageData.images.fallback.src
                            }
                          />
                        );
                      })
                    : null}

                  <div className={"md:max-w-xl mx-auto mb-2 mt-4"}>
                    <Link
                      className="flex items-center justify-start mb-1"
                      to={"/blog"}
                    >
                      <h3
                        style={{ lineHeight: 1 }}
                        className={
                          "text-2xl mb-8 text-gray-900 text-left flex flex-wrap justify-start items-center font-semibold underline antialiased"
                        }
                      >
                        <span className="mr-2">More...</span>
                      </h3>
                    </Link>
                  </div>
                </>
              );
            }}
          />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Index;
