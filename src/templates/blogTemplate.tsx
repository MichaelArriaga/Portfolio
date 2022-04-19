import React from "react";
import { graphql } from "gatsby";
import HeroHeader from "../components/general/HeroHeader";
import Footer from "../components/Footer";
import "./blog-template-css.css";
import "./copy-code-btn-css.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
  location,
}: any) {
  const post = data.markdownRemark;
  //const siteTitle = data.site.siteMetadata.title;
  //const { previous, next } = pageContext;
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  //const thumbnail = post.frontmatter.thumbnail;
  return (
    <div className="mt-10">
      <HeroHeader highlighted="posts" />
      <div className="max-w-screen-md mx-auto pt-12 py-2">
        <div className="">
          <h1 className="text-3xl text-left leading-none mb-1 font-bold antialiased">
            {frontmatter.title}
          </h1>
          <h2 className="text-base text-left mb-4 font-normal antialiased">
            {frontmatter.date} /{" "}
            <span className="readTime font-bold antialiased">
              {frontmatter.readtime}
            </span>
          </h2>
          <hr className="h-px border-t border-gray-200 my-2" />
          <div
            className="blog-post-container"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        readtime
        tags
      }
    }
  }
`;

//thumbnail {
//childImageSharp {
//sizes(maxWidth: 600) {
//...GatsbyImageSharpSizes
//}
//}
//}
