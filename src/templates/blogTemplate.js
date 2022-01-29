import React from 'react';
import { graphql } from 'gatsby';
import HeroHeader from '../components/general/HeroHeader';
import Footer from '../components/Footer';
import './blog-template-css.css';
import fonts from '../constants/font_names';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="">
      <HeroHeader highlighted="posts" />
      <div className="max-w-screen-md mx-auto pt-12 py-2">
        <div className="">
          <h1
            style={{ fontFamily: fonts.bold }}
            className="text-3xl text-left leading-none mb-1"
          >
            {frontmatter.title}
          </h1>
          <h2
            style={{ fontFamily: fonts.regular }}
            className="text-base text-left mb-4"
          >
            {frontmatter.date} /{' '}
            <span style={{ fontFamily: fonts.bold }} className="readTime">
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
        readtime
      }
    }
  }
`;
