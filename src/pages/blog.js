import React from 'react';
// page components
import PostList from '../components/PostList';
import Post from '../components/Post';

// styling
import HeroHeader from '../components/general/HeroHeader';
import ReusableHelmet from '../components/ReusableHelmet';
import SideBar from '../components/Sidebar';
import fonts from '../constants/font_names';
import { Link } from 'gatsby';
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
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl mb-2 text-gray-900'}
          >
            Post list
          </p>
        </div>
      </div>
      {/* right panel end */}
    </div>
    <Footer />
  </div>
);

export default Blog;
