import React from 'react';
import styles from './layout-css-module.module.css';

export default (props) => (
  <img src={props.image} alt="not loaded" className={[styles.primaryRhythm, styles.subsectionImage].join(' ')} />
)