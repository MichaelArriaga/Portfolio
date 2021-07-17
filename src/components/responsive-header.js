import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header-css-module.module.css';

import mikeiconalt from '../../static/etc/images/mike-icon-alt.png';

const ResponsiveHeader = () => (
  <div
    className={styles.headerContainerResponsive}
    style={{ marginBottom: '40px' }}
  >
    <Link to="/">
      <img
        className={[styles.mikeIconAlt, styles.headerIconResponsive].join(' ')}
        src={mikeiconalt}
        alt="not loaded"
      />
    </Link>
    <ul>
      <li className={styles.headerListItemResponsive}>
        <Link
          to="/"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          HOME
        </Link>
      </li>
      <li className={styles.headerListItemResponsive}>
        <Link
          to="/about"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          ABOUT
        </Link>
      </li>
      <li className={styles.headerListItemResponsive}>
        <Link
          to="/blog"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          BLOG
        </Link>
      </li>
      <li className={styles.headerListItemResponsive}>
        <Link
          to="/contact"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
);

export default ResponsiveHeader;
