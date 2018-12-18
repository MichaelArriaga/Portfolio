import React from 'react'
import styles from './layout-css-module.module.css';


export default (props) => (
  <div className={[styles.descriptionContainer, styles.primaryRhythm].join(' ')}>
  <h1 className={[styles.techListHeading, styles.secondaryRhythm].join(' ')} >{props.heading}</h1>
  <p className={styles.projectCopy}>{props.body}</p>
  </div>
)