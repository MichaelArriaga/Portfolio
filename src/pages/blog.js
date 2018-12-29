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
            path="/blog/spend-less-time" 
            title="Curiosity Trumps Years of Experience." 
            postdate="Nov, 2018"
          />

          <Post 
            path="/blog/a-new-post" 
            title="A new test post" 
            postdate="Oct, 2018"
          />

          <Post 
            path="/" 
            title="Spend less time studying, and more time digging into other people’s code." 
            postdate="Nov, 2018"
          />

        </PostList>

        <PostList sectiontitle="TECHNICAL">

          <Post 
            path="/" 
            title="GIT CLI, as fast as possible." 
            postdate="Nov, 2018"
          />

          <Post 
            path="/" 
            title="Semantic versioning, as fast as possible" 
            postdate="Oct, 2018"
          />

          <Post 
            path="/" 
            title="ES6 differences (the important bits)." 
            postdate="Dec, 2018"
          />

        </PostList>

      </div>
      
    </div>

  )