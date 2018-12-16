import React from 'react';
import Header from '../components/header'
import Container from '../components/project_components/container';
import ProjectTitle from '../components/project_components/project-title';
import TechOverview from '../components/project_components/tech-overview';

import styles from '../components/project_components/layout-css-module.module.css'




export default () => (
    <Container>
        <Header />

        <ProjectTitle 
            title="FLEX MATE APP"
            timeframe="November 2018 - Present"
        />

        <TechOverview 
            heading="SCOPE"
            listitem1="UX/UI"
            listitem2="Web Dev"
        />        
        <TechOverview 
            heading="APPS USED"
            listitem1="Adobe XD"
            listitem2="Visual Studio Code"
        />
        <TechOverview 
            heading="CORE TECH"
            listitem1="React.js"
            listitem2="Google Distance Matrix API"
        />
        <hr className={styles.primaryRhythm}></hr>
        


    </Container>
 
)