import React from 'react';
import { Helmet } from 'react-helmet';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';
import TypeformButton from '../components/TypeformButton'


// page components
import Footer from '../components/footer';

// styling
import Layout from '../components/layout';
import styles from './contact-css.module.css';

  export default () => (
    <Layout>
      <Helmet>
        <title>Mike Arriaga Contact</title>
        <meta name="description" content="Mike Arriaga Contact"   />
        <meta />
      </Helmet>
      <ResponsiveHeader />
      <Header />
      <div className={styles.contactContainer}>
        <h2 className={styles.contactSubheading}>Need design help?</h2>
        <h2 className={styles.contactSubheading}>Starting a new project?</h2>
        <h2 className={styles.contactSubheading}>Need Front-End Development help?</h2>

        <TypeformButton />

      </div>
      <Footer />
      </Layout>

  )