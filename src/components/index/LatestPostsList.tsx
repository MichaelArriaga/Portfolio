import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Post from "./Post";

const LatestPostList = () => {
  return (
    <div className="w-full mb-8 sm:mb-16 mr-auto">
      <h3 className="text-3xl text-center sm:text-left text-gray-900 mb-1 font-bold antialiased tracking-tight">
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

              <div className={"sm:max-w-xl mx-auto mb-2 mt-4"}>
                <Link
                  className="flex items-center justify-start mb-1"
                  to={"/blog"}
                >
                  <h3
                    style={{ lineHeight: 1 }}
                    className={
                      "text-2xl text-gray-900 text-left flex flex-wrap justify-start items-center font-semibold underline antialiased"
                    }
                  >
                    <span className="mr-2">More...</span>{" "}
                  </h3>
                </Link>
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default LatestPostList;
