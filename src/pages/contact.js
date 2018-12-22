import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';


import styles from './contact-css.module.css';


export default () => (
  <div>
    <ResponsiveHeader />
    <Header />
    <h1 className={styles.contactClass}>Contact page RED</h1>
  </div>
)