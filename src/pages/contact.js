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

// static assets
import envelopeImage from '../../static/etc/images/pages/contact/envelope.svg';

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

        <img src={envelopeImage} className={styles.envelopeImage} alt="not loaded" />
        <h1 className={styles.contactHeading}>Contact Mike</h1>
        <h2 className={styles.contactSubHeading}>Need some help?</h2>
        <p  className={styles.contactCopy}>Mike loves to help teams and individuals.</p>
        <p className={styles.contactCopy} style={{marginBottom: "30px"}}>Let's get in touch!</p>

        <TypeformButton />

      </div>
      <Footer />
      </Layout>

  )