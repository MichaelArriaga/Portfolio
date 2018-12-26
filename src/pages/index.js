import React from "react"
// import { Link } from 'gatsby'
import styles from "./index-css.module.css"

import Header from "../components/header";
import ResponsiveHeader from '../components/responsive-header';

import ProjectItem from '../components/project-item';
import Footer from '../components/footer';

import { Link } from 'gatsby';

// static assets
import computerimage from '../../static/etc/images/computer-screen.svg';
import flexmatepreview from '../../static/etc/images/project-images/flex-mate/flex-mate-preview.png';


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
        bg: "rgba(255, 0, 0, 0.01)",
        id: 2
      },
      code: {
        text: "Code",
        color: "black",
        bg: "rgba(255, 0, 0, 0.01)",
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
        <h1 className={[styles.heroHeading, styles.typewriter].join(' ') } ><em className={styles.deEmphasis}>Hi. I’m </em>Mike Arriaga, </h1>

        <h1 className={[styles.heroHeading, styles.typewriter].join(' ') } style={{marginBottom: "40px"}}>
        <em className={styles.deEmphasis}>and I </em>code for good.
        </h1>    


      </div>

      <p className={styles.heroDescription}>I help startups win through <em className={styles.emphasis}>user-centered design</em> and the ability to wear multiple hats in a product team. From <em className={styles.emphasis}>Product Design</em> and UX Research to <em className={styles.emphasis}>Full process Front-End development.</em> <Link to="/about" className={[styles.emphasis, styles.link].join(' ')}>More About Me</Link></p>    

      <h3 className={styles.projectListHeader}>Here’s some stuff I’ve made recently</h3>




        <ProjectItem  
          path="/projects/flex-mate"  
          title="Flex Mate" 
          // 11 words max to avoid breaking style
          headline="Help Amazon flex workers better visualize their out of pocket expenses."
          tags={[catTags.new, catTags.design, catTags.code ]} 
          primarycolor="#FE8B10"
          previewimg={flexmatepreview}
        />

        <ProjectItem   
          path="/"  
          title="Helpful App" 
          // 11 words max to avoid breaking style
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris."
          tags={[catTags.design, catTags.code]} 
          primarycolor="lightblue"
          previewimg=""
        />

        <ProjectItem  
         path="/"  
          title="True Finance" 
          // 11 words max to avoid breaking style
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris."
          tags={[catTags.design, catTags.code]} 
          primarycolor="lightgreen"
          previewimg=""
        />

        <ProjectItem  
          path="/"  
          title="Give Back" 
          // 11 words max to avoid breaking style
          headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mauris."
          tags={[catTags.design, catTags.code]} 
          primarycolor="lightgrey"
          previewimg=""
        />


      {/* <div className={styles.gap}> 
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>~/Dad</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Designer</h1>
        <h1 className={styles.heroHeading} style={{fontSize: "63px"}}>./Developer</h1>
      </div> */}


  
  </div>

  <Footer />



  </div>
)