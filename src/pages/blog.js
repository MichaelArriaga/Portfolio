import React from 'react';
// page components
import Post from '../components/index/Post';
// styling
import HeroHeader from '../components/general/HeroHeader';
import ReusableHelmet from '../components/ReusableHelmet';
import SideBar from '../components/Sidebar';
import fonts from '../constants/font_names';
import { Link, graphql, StaticQuery } from 'gatsby';
import Footer from '../components/Footer';
import aboutimg from '../../static/etc/images/pages/about/self-pic.png';

const Blog = () => (
  <div className="">
    <ReusableHelmet
      title="Mike Arriaga Blog Home"
      description="Mike Arriaga Blog Home"
    />
    <div
      style={{}}
      className={'w-full sm:flex sm:flex-row sm:justify-center items-start'}
    >
      {/* sidebar start */}
      <div
        style={{ width: 290 }}
        className="hidden sm:block w-64 h-screen h-max mr-4 border-r border-gray-100"
      >
        <div style={{ marginTop: 150 }}></div>
        <SideBar />
      </div>
      {/* sidebar end */}

      {/* right panel start */}
      <div className="w-full sm:max-w-screen-sm mb-3">
        <HeroHeader highlighted="posts" />
        <div style={{ marginBottom: 150 }} className="">
          <h2
            style={{ fontFamily: fonts.bold }}
            className={'text-xl font-bold mb-2'}
          >
            /Posts
          </h2>
          {/* post lists start */}
          <StaticQuery
            query={graphql`
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
        `}
            render={(data) => {
              const posts = data.allMarkdownRemark.edges;
              return (
                <>
                  {posts.length > 0
                    ? posts.map((item) => {
                        let post = item.node.frontmatter;
                        let key = post.title;
                        let title = post.title;
                        let date = post.date;
                        let slug = post.slug;
                        let post_tags = post.tags.split(',');

                        return (
                          <div key={key} className={'sm:max-w-xl '}>
                            <Link
                              className="flex justify-start items-center mb-1"
                              to={slug}
                            >
                              <h3
                                style={{ fontFamily: fonts.semiBold }}
                                className={
                                  'text-base sm:text-lg text-gray-900 text-left flex flex-wrap justify-start items-center'
                                }
                              >
                                <span className="underline mr-2">{title}</span>{' '}
                                <span
                                  style={{ color: '#9F9F9F' }}
                                  className="tracking-tighter"
                                >
                                  ({date})
                                </span>
                              </h3>
                            </Link>

                            <div
                              className={
                                'flex flex-row justify-start items-center'
                              }
                            >
                              {post_tags && post_tags.length > 0
                                ? post_tags.map((tag) => (
                                    // post tag start
                                    <Link
                                      key={tag}
                                      to={''}
                                      style={{
                                        paddingTop: 3,
                                        paddingBottom: 3,
                                        paddingLeft: 6,
                                        paddingRight: 6,
                                        backgroundColor: '#A0EDE4',
                                      }}
                                      className="px-1 rounded bg-cyan-400 mr-2 mb-6"
                                    >
                                      <h3
                                        style={{ fontFamily: fonts.semiBold }}
                                        className="text-xs text-gray-900"
                                      >
                                        {tag}
                                      </h3>
                                    </Link>
                                    // post tag end
                                  ))
                                : null}
                            </div>
                          </div>
                        );
                      })
                    : null}
                </>
              );
            }}
          />
          {/* post lists end */}
        </div>
      </div>
      {/* right panel end */}
    </div>
    <Footer />
  </div>
);

export default Blog;
