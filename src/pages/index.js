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
// import tailwindcss from 'tailwindcss';

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
    <div className={'w-full mx-auto px-4 flex justify-center items-center'}>
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
