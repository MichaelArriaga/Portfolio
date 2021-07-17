import React from 'react';
import * as styles from './layout-css-module.module.css';

const ProblemOverview = (props) => (
  <div
    className={[styles.descriptionContainer, styles.primaryRhythm].join(' ')}
  >
    <h1 className={[styles.techListHeading, styles.secondaryRhythm].join(' ')}>
      {props.heading}
    </h1>
    <p className={styles.projectCopy}>{props.body}</p>
  </div>
);

export default ProblemOverview;
