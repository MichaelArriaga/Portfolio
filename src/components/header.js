import React from 'react'
import { Link } from 'gatsby'
import styles from './header-css-module.module.css'

export default () => (
  <div className={styles.headercontainer}>
    <ul>
      <li className={styles.headerListItem}><Link to="/" className={styles.headerLink}>M/A</Link></li>
      <li className={styles.headerListItem}><Link to="/" className={styles.headerLink}>Contact</Link></li>
      <li className={styles.headerListItem}><Link to="/" className={styles.headerLink}>Blog</Link></li>
      <li className={styles.headerListItem}><Link to="/" className={styles.headerLink}>About</Link></li>
    </ul>
  </div>
)