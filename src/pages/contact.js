import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';

// page components

// styling
import styles from './contact-css.module.css';


  export default () => (
    <div>
      <ResponsiveHeader />
      <Header />
      <div className={styles.contactContainer}>
        <h1 className={styles.contactHeading}>/CONTACT</h1>

      </div>
      
    </div>

  )