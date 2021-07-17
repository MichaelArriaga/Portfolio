import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';

import ProjectItem from '../components/project-item';
import Footer from '../components/footer';

// styling
import Layout from '../components/layout';
import * as styles from './index-css.module.css';

// static assets
import flexmatepreview from '../../static/etc/images/project-images/flex-mate/flex-mate-preview.png';

const catTags = {
  new: {
    text: 'NEW!',
    color: 'white',
    bg: 'black',
    id: 1,
  },
  design: {
    text: 'Design',
    color: 'black',
    bg: 'rgba(255, 0, 0, 0.01)',
    id: 2,
  },
  code: {
    text: 'Code',
    color: 'black',
    bg: 'rgba(255, 0, 0, 0.01)',
    id: 3,
  },
};

const Index = () => (
  <Layout>
    <Helmet>
      <title>Mike Arriaga Portfolio Home</title>
      <meta
        name="description"
        content="Mike Arriaga Web Developer Portfolio Home"
      />
    </Helmet>

    <Header />
    <ResponsiveHeader />
    <div className={styles.indexContainer}>
      <div className={[styles.headingContainer, styles.cssTyping].join(' ')}>
        <h1 className={[styles.heroHeading]}>
          <em className={styles.deEmphasis}>Hi! I’m </em>Mike Arriaga.{' '}
        </h1>
      </div>

      <h1 className={[styles.heroHeading, styles.hide].join(' ')}>
        <em className={styles.deEmphasis}>Hi! I’m </em>Mike Arriaga.{' '}
      </h1>

      <p className={styles.heroDescription}>
        I help startups win through{' '}
        <em className={styles.emphasis}>user-centered design</em> and the
        ability to wear multiple hats in a product team.{' '}
        <Link to="/about" className={[styles.emphasis, styles.link].join(' ')}>
          More About Me
        </Link>
      </p>

      <ProjectItem
        path="/projects/flex-mate"
        title="Flex Mate"
        // 11 words max to avoid breaking style
        headline="Help Amazon flex workers better visualize their out of pocket expenses."
        tags={[catTags.new, catTags.design, catTags.code]}
        primarycolor="white"
        previewimg={flexmatepreview}
      />
    </div>

    <Footer />
  </Layout>
);

export default Index;
