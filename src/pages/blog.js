import React from 'react';
// page components
import PostList from '../components/PostList';
import Post from '../components/Post';

// styling
import * as styles from './blog-css.module.css';
import HeroHeader from '../components/general/HeroHeader';
import ReusableHelmet from '../components/ReusableHelmet';

const Blog = () => (
  <div>
    <ReusableHelmet
      title="Mike Arriaga Blog Home"
      description="Mike Arriaga Blog Home"
    />
    <HeroHeader highlighted="posts" />
    <div className={styles.blogContainer}>
      <h1 className={styles.blogHeading}>/BLOG</h1>

      {/* <PostList sectiontitle="OPINION">
        <Post
          path="/blog/curiosity-trumps-experience"
          title="Curiosity Trumps Years of Experience."
          postdate="Nov, 2018"
        />
      </PostList> */}

      <PostList sectiontitle="TECHNICAL">
        <Post
          path="/blog/understanding-redux"
          title="Understanding Redux in 4 Steps"
          postdate="Jan, 2019"
        />

        <Post
          path="/blog/post-flow-in-gatsby"
          title="Workflow for Creating Posts in Gatsby"
          postdate="Dec, 2018"
        />

        <Post
          path="/blog/animate-blog-posts-with-isotope"
          title="Animate and Filter Your Jekyll Blog Posts with Isotope"
          postdate="March, 2018"
        />

        <Post
          path="/blog/google-domains-and-github-pages"
          title="How To Connect Your Google Domain to A Github Pages Site"
          postdate="Feb, 2018"
        />
      </PostList>
    </div>
  </div>
);

export default Blog;
