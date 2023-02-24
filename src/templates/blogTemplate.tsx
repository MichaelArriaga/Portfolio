import React from "react";
import { graphql, Link } from "gatsby";
import HeroHeader from "../components/general/HeroHeader";
import Footer from "../components/Footer";
import "./blog-template-css.css";
import SEO from "../components/general/SEO";
import EndAskBox from "../components/blog/EndAskBox";

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
    <div id="innerBody" className="">
      <div className="px-4 pt-10">
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
        <div className="max-w-4xl py-2 mx-auto">
          <div className="mb-10">
            <h1 className="mb-2 text-4xl antialiased font-black leading-none text-left sm:text-6xl">
              {frontmatter.title}
            </h1>
            <h2 className="mb-2 text-xl antialiased font-normal text-left">
              {frontmatter.date} /{" "}
              <span className="antialiased font-bold readTime">
                {frontmatter.readtime}
              </span>
            </h2>
              {frontmatter.tags.length > 0
                ? frontmatter.tags.split(", ").map((tag: string) => {
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
                            "text-base text-gray-900 font-semibold antialiased"
                          }
                        >
                          {tag}
                        </h3>
                      </Link>
                    );
                  })
                : null}
            </div>

          <div>
            {/* <hr className="h-px my-2 border-t border-gray-200" /> */}
            <div
              className="blog-post-container"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <EndAskBox />
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
            gatsbyImageData(width: 800)
          }
        }
        readtime
        tags
      }
    }
  }
`;
