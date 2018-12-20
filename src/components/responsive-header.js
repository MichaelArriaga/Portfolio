import React from 'react'
import { Link } from 'gatsby'
import styles from './header-css-module.module.css'

import mikeiconalt from '../../static/etc/images/mike-icon-alt.png';

export default () => (
  <div className={styles.headerContainerResponsive} style={{marginBottom: '40px'}}>
  <img className={[styles.mikeIconAlt, styles.headerIconResponsive].join(' ')} src={mikeiconalt} alt="not loaded"/>
    <ul>
      <li className={styles.headerListItemResponsive}><Link to="/" className={styles.headerLink}>HOME</Link></li>
      <li className={styles.headerListItemResponsive}><Link to="/" className={styles.headerLink}>ABOUT</Link></li>
      <li className={styles.headerListItemResponsive}><Link to="/" className={styles.headerLink}>BLOG</Link></li>
      <li className={styles.headerListItemResponsive}><Link to="/" className={styles.headerLink}>CONTACT</Link></li>
    </ul>
  </div>
)