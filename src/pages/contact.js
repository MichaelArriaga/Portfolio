import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';
import TypeformButton from '../components/TypeformButton'


// page components
import Footer from '../components/footer';

// styling
import styles from './contact-css.module.css';

  export default () => (
    <div>
      <ResponsiveHeader />
      <Header />
      <div className={styles.contactContainer}>
        <h1 className={styles.contactHeading}>/CONTACT</h1>
        <h2 className={styles.contactSubheading}>Need design help?</h2>
        <h2 className={styles.contactSubheading}>Starting a new project?</h2>
        <h2 className={styles.contactSubheading}>Need Front-End Development help?</h2>

        <TypeformButton />

      </div>
      <Footer />
      
    </div>

  )