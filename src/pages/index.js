import React from "react"
// import { Link } from 'gatsby'
import styles from "./index-css.module.css"

import { ProjectListItem, CategoryLabel } from '../components/project-list-item';
import Header from "../components/header";
import ResponsiveHeader from '../components/responsive-header';
import Footer from '../components/footer';

import { Link } from 'gatsby';

import computerimage from '../../static/etc/images/computer-screen.svg';

export default () => (
  <div>
  <Header />
  <ResponsiveHeader />
  <div className={styles.indexContainer}>
  

      <img className={styles.heroImage} src={computerimage} alt="not loaded"/>

      <div className={[styles.headingContainer, styles.cssTyping].join(' ')}>
        <h1 className={[styles.heroHeading, styles.typewriter].join(' ') } style={{marginBottom: "10px"}}><em className={styles.deEmphasis}>Hi. I’m </em>Mike Arriaga, </h1>

        <h1 className={[styles.heroHeading, styles.typewriter].join(' ') } style={{marginBottom: "40px"}}>
        <em className={styles.deEmphasis}>and I </em>code for good.
        </h1>    


      </div>

      <p className={styles.heroDescription}>I help startups win through <em className={styles.emphasis}>user-centered design</em> and the ability to wear multiple hats in a product team. From <em className={styles.emphasis}>Product Design</em> and UX Research to <em className={styles.emphasis}>Full process Web and App development.</em> <Link to="/about" className={[styles.emphasis, styles.link].join(' ')}>More About Me</Link></p>    



      <div className={styles.projectListContainer}> 
        <h3 className={styles.projListHeading}>Here's some stuff that I've made recently.</h3>
        <ul className={styles.projectList}> 
          <li className={styles.projectListLi}><ProjectListItem path="/projects/flex-mate" title="FLEX MATE" />
            <CategoryLabel tag="Design" />
            <CategoryLabel tag="Code" />
          </li>
          <li className={styles.projectListLi}><ProjectListItem path="/" title="HELPFUL APP" />
            <CategoryLabel tag="Design" />
            <CategoryLabel tag="Code" />
          </li>
          <li className={styles.projectListLi}><ProjectListItem path="/" title="TRUE FINANCE" />
            <CategoryLabel tag="Design" />
            <CategoryLabel tag="Code" />
          </li>
          <li className={styles.projectListLi}><ProjectListItem path="/" title="GIVE BACK" />
            <CategoryLabel tag="Design" /> 
            <CategoryLabel tag="Code" />
          </li>
        </ul>
      </div>


      {/* <div className={styles.gap}> 
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>~/Dad</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Designer</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Developer</h1>
      </div> */}


  <Footer />

  </div>


  </div>
)