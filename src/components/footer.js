import React from 'react';

import styles from './footer-css.module.css';

import twittericon from '../../static/etc/images/twitter-icon.svg';
import githubicon from '../../static/etc/images/github-icon.svg';

export default () => (
    <div className={styles.footerContainer}>
        <hr className={styles.footerLine}></hr>
        <p className={styles.footerText}>Design + Code by <a className={styles.link} href="https://twitter.com/ux_Michael" target="_blank" rel="noopener noreferrer">Mike Arriaga</a> in Seattle, WA</p>
        <ul className={styles.footerIconList}>

            <li className={styles.footerIcon}>
            <a href="https://twitter.com/ux_Michael" target="_blank" rel="noopener noreferrer"><img src={twittericon} alt="not loaded" /></a>
            </li>

            <li className={styles.footerIcon}>
            <a href="https://github.com/MichaelArriaga" target="_blank" rel="noopener noreferrer"><img src={githubicon} alt="not loaded" /></a>
            </li>

        </ul>
    </div>
)