import React from 'react';
import * as styles from './layout-css-module.module.css';

const Metrics = (props) => (
  <div>
    <ul className={[styles.metricsList, styles.primaryRhythm].join(' ')}>
      <li className={styles.metric}>
        <img src={props.baselineimg} alt="not loaded" />
        {props.baseline}
      </li>
      <li className={styles.metric}>
        <img src={props.gutterimg} alt="not loaded" />
        {props.gutter}
      </li>
      <li className={styles.metric}>
        <img src={props.rhythmimg} alt="not loaded" />
        {props.rhythm}
      </li>
    </ul>
  </div>
);

export default Metrics;
