import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';


import styles from './about-css.module.css'


export default () => (
  <div>
    <ResponsiveHeader />
    <Header />
    <h1 className={styles.aboutClass}>About page ORANGE</h1>
  </div>
)