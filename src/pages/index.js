import React from "react"
// import { Link } from 'gatsby'
import styles from "./index-css.module.css"

import Header from "../components/header";
import ResponsiveHeader from '../components/responsive-header';

import ProjectItem from '../components/project-item';
import ProjectList from '../components/project-list';
import Footer from '../components/footer';

import { Link } from 'gatsby';

import computerimage from '../../static/etc/images/computer-screen.svg';


const catTags =
    {
      new: {
        text: "NEW!",
        color: "white",
        bg: "black",
        id: 1
      },
      design: {
        text: "Design",
        color: "black",
        bg: "white",
        id: 2
      },
      code: {
        text: "Code",
        color: "black",
        bg: "white",
        id: 3
      }
    }

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



      <ProjectList>
        <ProjectItem  path="/projects/flex-mate"  title="FLEX MATE" tags={[catTags.new, catTags.design, catTags.code ]}/>
        <ProjectItem  path="/"  title="HELPFUL APP" tags={[catTags.design, catTags.code]}/>
        <ProjectItem  path="/"  title="TRUE FINANCE" tags={[catTags.design, catTags.code]}/>
        <ProjectItem  path="/"  title="GIVE BACK" tags={[catTags.design, catTags.code]}/>
      </ProjectList>


      {/* <div className={styles.gap}> 
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>~/Dad</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Designer</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Developer</h1>
      </div> */}


  
  </div>

  <Footer />



  </div>
)