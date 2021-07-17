import React from 'react';
import * as styles from './layout-css-module.module.css';

const SubsectionImage = (props) => (
  <img
    src={props.image}
    alt="not loaded"
    className={[styles.primaryRhythm, styles.subsectionImage].join(' ')}
  />
);

export default SubsectionImage;
