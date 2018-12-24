import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';


import styles from './blog-css.module.css'
import { Link } from 'gatsby';


export default () => (
  <div className={styles.blogContainer}>
    <ResponsiveHeader />
    <Header />
    <h1 className={styles.blogHeading}>/Blog</h1>

    <section className={styles.section}>
      <h3 className={styles.sectionHeader}>OPINION</h3>
      <ul>
        <li className={styles.postItem}>
          <Link to="/" className={styles.postLink}>
          Curiosity Trumps Years of Experience.
          </Link>
          <p className={styles.inlineDate}>Nov, 2018</p>
        </li>
        <li className={styles.postItem}>
          <Link to="/" className={styles.postLink}>
            It Doesn’t Matter What You Know, It’show fast you can learn it.
          </Link>
          <p className={styles.inlineDate}>Oct, 2018</p>
        </li>
        <li className={styles.postItem}>
          <Link to="/" className={styles.postLink}>
            Spend less time studying, and more time digging into other people’s code.
          </Link>
          <p className={styles.inlineDate}>Nov, 2018</p>
        </li>
      </ul>
    </section>

    <section className={styles.section}>
      <h3 className={styles.sectionHeader}>TECHNICAL</h3>
      <ul>
        <li className={styles.postItem}>
          <Link to="/" className={styles.postLink}>
          GIT CLI, as fast as possible.
          </Link>
          <p className={styles.inlineDate}>Nov, 2018</p>
        </li>
        <li className={styles.postItem}>
          <Link to="/" className={styles.postLink}>
          Semantic versioning, as fast as possible.
          </Link>
          <p className={styles.inlineDate}>Oct, 2018</p>
        </li>
        <li className={styles.postItem}>
          <Link to="/" className={styles.postLink}>
            ES6 differences (the important bits).
          </Link>
          <p className={styles.inlineDate}>Nov, 2018</p>
        </li>
      </ul>
    </section>

  </div>
)