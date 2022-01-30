import React, { useState, useEffect } from 'react';
import fonts from '../constants/font_names';
import { graphql } from 'gatsby';
import SidebarLayout from '../components/layouts/SidebarLayout';
import Post from '../components/blog/Post';

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [category_tags, setCategoryTags] = useState([]);
  const [selected_tag, setSelectedTag] = useState('All');

  useEffect(() => {
    setCategoryTagsFromQuery();
  }, []);

  const setCategoryTagsFromQuery = () => {
    let tags_to_set = ['All'];
    if (edges.length > 0) {
      edges.forEach((edge) => {
        let tags = edge.node.frontmatter.tags.split(',');
        tags.forEach((tag) => {
          tags_to_set.push(tag);
        });
      });
    }

    // sort category tags by first character
    tags_to_set.sort((a, b) => {
      console.log(`comparing ${a[0]} and ${b[0]}`);
      return a[0] - b[0];
    });

    if (tags_to_set.length > 0) {
      // removes duplicates (Array.from(new Set(my_array)))
      setCategoryTags(Array.from(new Set(tags_to_set)));
    }
  };

  const postIncludedInFilter = (tags) => {
    let included = false;
    if (
      selected_tag === '' ||
      selected_tag === 'All' ||
      tags.includes(selected_tag)
    ) {
      included = true;
    }
    return included;
  };

  return (
    <SidebarLayout
      meta_title="Mike Arriaga Portfolio Blog"
      meta_description="Mike Arriaga Portfolio Blog"
      highlighted_hero_link="posts"
    >
      <div style={{ marginBottom: 150 }} className="">
        {/* tags section start */}
        <div className={'mb-4 py-2 border-b border-gray-200'}>
          <h2
            style={{ fontFamily: fonts.bold }}
            className={'text-md sm:text-base font-bold mb-2'}
          >
            Tags
          </h2>
          <div className="flex flex-wrap justify-start items-center">
            {category_tags.length > 0
              ? category_tags.map((tag) => {
                  return (
                    <button
                      key={tag}
                      onClick={() => {
                        if (selected_tag !== tag) {
                          setSelectedTag(tag);
                        } else {
                          setSelectedTag('All');
                        }
                      }}
                      style={{
                        backgroundColor:
                          selected_tag === tag ? '#1f1f1f' : '#A0EDE4',
                      }}
                      className={
                        selected_tag === tag
                          ? 'outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2'
                          : 'outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2'
                      }
                    >
                      <h3
                        style={{
                          fontFamily: fonts.semiBold,
                        }}
                        className={
                          selected_tag === tag
                            ? 'text-sm text-white'
                            : 'text-sm text-gray-900'
                        }
                      >
                        {tag}
                      </h3>
                    </button>
                  );
                })
              : null}
          </div>
        </div>
        {/* tags section end */}

        {/* posts section start */}
        <div>
          <h2
            style={{ fontFamily: fonts.bold }}
            className={'text-xl font-bold mb-2'}
          >
            Posts ({edges.length})
          </h2>
          {edges.length > 0
            ? edges.map((item) => {
                let post = item.node.frontmatter;
                let post_tags = post.tags.split(',');
                if (postIncludedInFilter(post_tags)) {
                  return (
                    <Post
                      key={post.title}
                      title={post.title}
                      date={post.date}
                      slug={post.slug}
                      post_tags={post_tags}
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
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`;
