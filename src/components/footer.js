import React from 'react';

import * as styles from './footer-css.module.css';

import twittericon from '../../static/etc/images/icons/logo-twitter.png';
import githubicon from '../../static/etc/images/icons/logo-github.png';

const Footer = () => (
  <div className={styles.footerContainer}>
    <hr className={styles.footerLine}></hr>

    <div className={styles.footerTextContainer}>
      Design + Code by{' '}
      <a
        className={styles.link}
        href="https://twitter.com/ux_Michael"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mike Arriaga
      </a>{' '}
      in Seattle, WA |
      <a
        className={styles.footerIcon}
        href="https://twitter.com/ux_Michael"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twittericon} alt="not loaded" />
      </a>
      <a
        className={styles.footerIcon}
        href="https://github.com/MichaelArriaga"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubicon} alt="not loaded" />
      </a>
    </div>
  </div>
);

export default Footer;
