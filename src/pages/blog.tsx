import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import SidebarLayout from "../components/layouts/SidebarLayout";
import Post from "../components/Post";
import { metaTitle } from "../constants/metaTitle";
import SEO from "../components/general/SEO";

const Blog = ({
  location,
  data: {
    allMarkdownRemark: { edges },
  },
}: any) => {
  const [category_tags, setCategoryTags] = useState<string[]>([]);
  const [selected_tag, setSelectedTag] = useState<string>("All");

  useEffect(() => {
    setCategoryTagsFromQuery();
  }, []);

  const setCategoryTagsFromQuery = () => {
    let tags_to_set = ["All"];
    if (edges.length > 0) {
      edges.forEach((edge: any) => {
        let tags = edge.node.frontmatter.tags.split(", ");
        tags.forEach((tag: any) => {
          tags_to_set.push(tag.toLowerCase());
        });
      });
    }

    if (tags_to_set && tags_to_set.length > 0) {
      setCategoryTags(Array.from([...new Set(tags_to_set)]));
    }
  };

  const postIncludedInFilter = (tags: any) => {
    let included = false;
    let tags_downcased = [...tags].map((item) => item.toLowerCase());
    if (
      selected_tag === "" ||
      selected_tag === "All" ||
      tags_downcased.includes(selected_tag.toLowerCase())
    ) {
      included = true;
    }
    return included;
  };

  const setFilterTag = (tag: string) => {
    setSelectedTag(tag || "All");
  };

  return (
    <SidebarLayout highlighted_hero_link="posts">
      <SEO
        path={"/blog"}
        title={`${metaTitle} - Blog`}
        description={metaTitle}
        date={null}
        thumbnail={false}
        readtime={null}
        tags={null}
        article={false}
      />
      <div style={{ marginBottom: 0 }} className="flex flex-col justify-center items-center mr-auto">
        {/* tags section start */}
        <div className={"mb-2"}>
          <h2 className={"text-3xl font-bold mb-2 antialiased leading-none text-center md:text-left"}>Topics</h2>
          <div className="flex flex-wrap items-center justify-start">
            {category_tags.length > 0
              ? category_tags.map((tag: string) => {
                  return (
                    <Tag
                      tag={tag.toUpperCase()}
                      selected_tag={selected_tag}
                      setFilterTag={setFilterTag}
                    />
                  );
                })
              : null}
          </div>
        </div>
        {/* tags section end */}

        {/* posts section start */}
        <div style={{ height: 650 }} className="w-full overflow-y-scroll ml-auto mr-auto md:ml-0 md:mr-auto">
          {edges.length > 0
            ? edges.map((item: any) => {
                let post = item.node.frontmatter;
                let post_tags = post.tags.split(", ");
                if (postIncludedInFilter(post_tags)) {
                  return (
                    <Post
                      key={post.title}
                      title={post.title}
                      date={post.date}
                      slug={post.slug}
                      post_tags={post_tags}
                      thumbnail={
                        post.thumbnail?.childImageSharp?.gatsbyImageData?.images
                          .fallback.src
                      }
                    />
                  );
                }
              })
            : null}
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Blog;

type TagPropTypes = {
  tag: string;
  selected_tag: string;
  setFilterTag: (tag: string) => void;
};

const Tag: React.FC<TagPropTypes> = ({
  tag,
  selected_tag,
  setFilterTag,
}): JSX.Element => {
  return (
    <button
      key={tag}
      onClick={() => {
        if (selected_tag !== tag) {
          setFilterTag(tag);
        } else {
          setFilterTag("All");
        }
      }}
      style={{
        backgroundColor: selected_tag === tag ? "#1f1f1f" : "#76d3ca",
      }}
      className={
        selected_tag === tag
          ? "outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2"
          : "outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2"
      }
    >
      <h3
        className={
          selected_tag === tag
            ? "text-sm text-white font-bold antialiased tracking-tighter"
            : "text-sm text-gray-900 font-bold antialiased tracking-tighter"
        }
      >
        {tag
          .split(" ")
          .map((item: any) => item[0].toUpperCase() + item.slice(1))
          .join(" ")}
      </h3>
    </button>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
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
`;
