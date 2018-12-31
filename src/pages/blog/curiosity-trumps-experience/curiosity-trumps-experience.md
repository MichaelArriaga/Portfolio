---
path: "/blog/curiosity-trumps-experience"
date: "2017-11-07"
title: "Curiosity Trumps Experience"
readtime: "10 min read"
---

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
sanctus est Lorem ipsum dolor sit amet. 

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
sanctus est Lorem ipsum dolor sit amet. 

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua.

### Mistakes galore

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
sanctus est Lorem ipsum dolor sit amet. 

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
sanctus est Lorem ipsum dolor sit amet. 

### Another section heading

[I'm an inline-style link](https://www.google.com) Stet clita kasd gubergren, no sea takimata 
sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat, sed diam voluptua.

![alt](image.png)

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua.

```javascript
import React from 'react';

import styles from './footer-css.module.css';

import twittericon from '../../static/etc/images/twitter-icon.svg';
// import linkedinicon from '../../static/etc/images/linkedin-con.svg';
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
```