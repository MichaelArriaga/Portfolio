import React from 'react';
import styles from '../pages/index-css.module.css';




export default ({ children }) => (
  <div className={styles.projectListContainer}>
  <h3 className={styles.projListHeading}>Here's some stuff that I've made recently.</h3>
        <ul className={styles.projectList}> 

        { children }
          
        </ul>
  </div>
)
