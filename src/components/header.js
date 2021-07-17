import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header-css-module.module.css';

import mikeicon from '../../static/etc/images/mike-icon.png';

const Header = () => (
  <div className={styles.headercontainer}>
    <ul>
      <li className={styles.headerListItem}>
        <Link to="/" className={styles.headerLink}>
          <img src={mikeicon} alt="not loaded" />
        </Link>
      </li>
      <li className={styles.headerListItem}>
        <Link
          to="/contact"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          Contact
        </Link>
      </li>
      <li className={styles.headerListItem}>
        <Link
          to="/blog"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          Blog
        </Link>
      </li>
      <li className={styles.headerListItem}>
        <Link
          to="/about"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
