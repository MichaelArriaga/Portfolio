import React from "react"
import { Link } from 'gatsby'

import styles from "./index-css.module.css"
import Header from "../components/header"

export default () => (
  <div className={styles.heroContainer}>
    <Header />
      <div className={styles.gap}> 
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>~/Dad</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Designer</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Developer</h1>
      </div>

      <div className={styles.gap}>
        <h1 className={styles.heroHeading } style={{marginBottom: "0"}}><em className={styles.deEmphasis}>Hi. I’m </em>Mike Arriaga,</h1>
        <h1 className={styles.heroHeading}><em className={styles.deEmphasis}>and I </em>code for good.</h1>
      </div>

      <div className={styles.projectListContainer}> 
        <h3 className={styles.projListHeading}>/* Stuff */</h3>
        <ul className={styles.projectList}>  
          <li className={styles.projListItem}><Link to="/" className={styles.projLink}>FLEX MATE</Link></li>
          <li className={styles.projListItem}><Link to="/" className={styles.projLink}>HELPFUL APP</Link></li>
          <li className={styles.projListItem}><Link to="/" className={styles.projLink}>TRUE FINANCE</Link></li>
          <li className={styles.projListItem}><Link to="/" className={styles.projLink}>GIVE BACK</Link></li>
        </ul>
      </div>


  </div>
)