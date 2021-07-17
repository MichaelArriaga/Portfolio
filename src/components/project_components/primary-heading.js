import React from 'react';
import * as styles from '../project_components/layout-css-module.module.css';

const PrimaryHeading = (props) => (
  <div className={styles.primaryRhythm}>
    <h1 className={styles.projectH1}>{props.title}</h1>
    <h2 className={styles.projectH2} style={{ color: props.color }}>
      {props.subtitle}
    </h2>
  </div>
);

export default PrimaryHeading;
