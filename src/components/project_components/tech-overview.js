import React from 'react';
import * as styles from './layout-css-module.module.css';

const TechOverview = (props) => (
  <ul className={styles.techOverview}>
    <li className={styles.techListHeading} style={{ color: props.color }}>
      {props.heading}
    </li>
    <li className={styles.techListItem}>{props.listitem1}</li>
    <li className={styles.techListItem}>{props.listitem2}</li>
  </ul>
);

export default TechOverview;
