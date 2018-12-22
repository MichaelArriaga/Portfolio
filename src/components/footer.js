import React from 'react';

import { Link } from 'gatsby';
import styles from './footer-css.module.css';

import twittericon from '../../static/etc/images/twitter-icon.svg';
// import linkedinicon from '../../static/etc/images/linkedin-con.svg';
import githubicon from '../../static/etc/images/github-icon.svg';

export default () => (
    <div>
        <hr className={styles.footerLine}></hr>
        <p className={styles.footerText}>Design + Code by <Link className={styles.link} to="https://twitter.com/ux_Michael">Mike Arriaga</Link> in Seattle, WA</p>
        <ul className={styles.footerIconList}>
            <li className={styles.footerIcon}><img src={twittericon} alt="not loaded"></img></li>
            {/* <li className={styles.footerIcon}><img src={linkedinicon} alt="not loaded"></img></li> */}
            <li className={styles.footerIcon}><img src={githubicon} alt="not loaded"></img></li>
        </ul>
    </div>
)