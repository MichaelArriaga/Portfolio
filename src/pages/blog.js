import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';

// page components
import PostList from '../components/post-list';
import Post from '../components/post';

// styling
import styles from './blog-css.module.css';


  export default () => (
    <div>
      <ResponsiveHeader />
      <Header />
      <div className={styles.blogContainer}>
        <h1 className={styles.blogHeading}>/BLOG</h1>
        <PostList sectiontitle="OPINION">

          <Post 
            path="/blog/curiosity-trumps-experience" 
            title="Curiosity Trumps Years of Experience." 
            postdate="Nov, 2018"
          />

        </PostList>

        <PostList sectiontitle="TECHNICAL">

          <Post 
            path="/blog/google-domains-and-github-pages" 
            title="How To Connect Your Google Domain to A Github Pages Site" 
            postdate="Feb, 2018"
          />
            
          <Post 
            path="/blog/animate-blog-posts-with-isotope" 
            title="Animate and Filter Your Blog Posts with Isotope" 
            postdate="March, 2018"
          />

<Post 
            path="/blog/post-flow-in-gatsby" 
            title="Workflow for Creating Posts in Gatsby" 
            postdate="Dec, 2018"
          />

        </PostList>

      </div>
      
    </div>

  )