import React from 'react';

// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';


import styles from './blog-css.module.css'


export default () => (
  <div>
    <ResponsiveHeader />
    <Header />
    <h1 className={styles.blogClass}>Blog page BLUE</h1>
  </div>
)