import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Post from "./Post";

const LatestPostList = () => {
  return (
    <div className="sm:max-w-xl mb-8 sm:mb-16 mr-auto">
      <h3 className="text-xl text-gray-900 mb-1 font-black antialiased tracking-tight">
        Latest Posts
      </h3>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 7
            ) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
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
                      />
                    );
                  })
                : null}
            </>
          );
        }}
      />
    </div>
  );
};

export default LatestPostList;
