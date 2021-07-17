import React from 'react';
import * as styles from './layout-css-module.module.css';


const SubHeading = (props) => (
  <h2 className={[styles.projectH2, styles.secondaryRhythm].join(' ')}>{props.title}</h2>
)

export default SubHeading;