import React from "react";
import { graphql, Link } from "gatsby";
import HeroHeader from "../components/general/HeroHeader";
import Footer from "../components/Footer";
import "./blog-template-css.css";
import SEO from "../components/general/SEO";

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
  //console.log("frontmatter:", frontmatter);
  const thumbnail = post.frontmatter.thumbnail || null;
  return (
    <div id="innerBody" className="bg-gray-200">
      <div className="pt-10 px-4">
        <SEO
          path={frontmatter.path}
          date={frontmatter.date}
          title={frontmatter.title}
          description={frontmatter.description}
          thumbnail={thumbnail}
          readtime={frontmatter.readtime}
          tags={frontmatter.tags}
          article={true}
        />
        <HeroHeader highlighted="posts" />
        <div className="max-w-4xl pt-12 py-2 mx-auto">
          <div className="">
            <h1 className="text-3xl sm:text-5xl text-left leading-none mb-1 font-black antialiased">
              {frontmatter.title}
            </h1>
            <h2 className="text-base text-left mb-2 font-normal antialiased">
              {frontmatter.date} /{" "}
              <span className="readTime font-bold antialiased">
                {frontmatter.readtime}
              </span>
            </h2>
            <div>
              {frontmatter.tags.length > 0
                ? frontmatter.tags.split(", ").map((tag) => {
                    return (
                      <Link
                        key={tag}
                        style={{
                          backgroundColor: "#76d3ca",
                        }}
                        to={`/blog?tag=${tag
                          .split(" ")
                          .join("+")
                          .toLowerCase()}`}
                        className={
                          "inline-block outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2"
                        }
                      >
                        <h3
                          className={
                            "text-sm text-gray-900 font-semibold antialiased"
                          }
                        >
                          {tag}
                        </h3>
                      </Link>
                    );
                  })
                : null}
            </div>
            <hr className="h-px border-t border-gray-200 my-2" />
            <div
              className="blog-post-container"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <Footer />
      </div>
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
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        readtime
        tags
      }
    }
  }
`;
