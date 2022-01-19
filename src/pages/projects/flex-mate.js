import React from 'react';
import { Helmet } from 'react-helmet';

// global components
import Header from '../../components/Header';
import ResponsiveHeader from '../../components/ResponsiveHeader';
import Footer from '../../components/Footer';

// static assets
import mockupImg from '../../../static/etc/images/project-images/flex-mate/phone-mockup.png';
import pixelImageEight from '../../../static/etc/images/project-images/8px-grid.png';
import pixelImageSixteen from '../../../static/etc/images/project-images/16px-grid.png';
import pixelImageFortyEight from '../../../static/etc/images/project-images/48px-grid.png';
import typograhyImage from '../../../static/etc/images/project-images/flex-mate/typography-system.png';
import flowChart from '../../../static/etc/images/project-images/flex-mate/flow-chart.png';

// stylesheet
import '../index-css.module.css';
import Layout from '../../components/Layout';
import * as styles from '../../components/project_components/layout-css-module.module.css';

// main components
import Container from '../../components/project_components/Container';
import PrimaryHeading from '../../components/project_components/primary-heading';
import TechOverview from '../../components/project_components/tech-overview';
import ProblemOverview from '../../components/project_components/problem-overview';
import FeatureList from '../../components/project_components/feature-list';
import SubHeading from '../../components/project_components/sub-heading';
import Metrics from '../../components/project_components/metrics';
import ColorList from '../../components/project_components/color-list';
import SubsectionImage from '../../components/project_components/subsection-image';

const themeColor = '#FE8B10';

const featuresArray = [
  {
    feature: 'Fuel Cost Estimation',
    id: 1,
  },
  {
    feature: 'Show Real-Time Travel/Traffic Estimations',
    id: 2,
  },
  {
    feature: 'Show Job Types By Station',
    id: 3,
  },
  {
    feature: 'Coverage for as many Flex Regions as possible',
    id: 4,
  },
];

const colorsArray = [
  {
    label: 'Primary',
    labelcolor: 'black',
    hexcode: '#FE8B10',
  },
  {
    label: 'Danger',
    labelcolor: 'black',
    hexcode: '#FF0000',
  },
  {
    label: 'Text/BG',
    labelcolor: 'black',
    hexcode: '#FFFFFF',
  },
  {
    label: 'Text/BG',
    labelcolor: 'white',
    hexcode: '#000000',
  },
];

const FlexMate = () => (
  <Layout>
    <Helmet>
      <title>Flex Mate App</title>
      <meta name="description" content="Flex Mate App" />
      <meta />
    </Helmet>
    <Header />
    <ResponsiveHeader />

    <Container>
      <img className={styles.mockupImg} src={mockupImg} alt="notloaded" />

      <a
        className={styles.tryLink}
        href="https://michaelarriaga.github.io/Flex-Warehouse-Expense-Calculator/"
        target="_blank "
        rel="noopener"
      >
        TRY IT OUT HERE
      </a>
      <PrimaryHeading
        title="FLEX MATE APP"
        subtitle="November 2018 - Present"
        color={themeColor}
      />

      <TechOverview
        heading="SCOPE"
        listitem1="UX/UI"
        listitem2="Web Dev"
        color={themeColor}
      />
      <TechOverview
        heading="APPS USED"
        listitem1="Adobe XD"
        listitem2="Visual Studio Code"
        color={themeColor}
      />
      <TechOverview
        heading="CORE TECH"
        listitem1="JavaScript ES6"
        listitem2="Google Distance Matrix API"
        color={themeColor}
      />
      <hr
        className={[styles.primaryRhythm, styles.projectLineBreak].join(' ')}
      ></hr>

      <ProblemOverview
        heading="Problem"
        body="Amazon flex, a gig delivery app created by Amazon Logistics Inc. Does not have any way to show users an accurate fuel cost and travel estimate to each of the warehouses which is a significant amount of common un-accounted for expenses that delivery partners incur while making their deliveries."
      />

      <ProblemOverview
        heading="Solution"
        body="Create an app that uses Distance Matrix data to estimate fuel cost for travel to each delivery station based on the user provided average cost per gallon (cpg) as well as their vehicle average miles per gallon (mpg)."
      />

      <PrimaryHeading
        title="Features"
        subtitle="Flex Mate App"
        color={themeColor}
      />

      <FeatureList features={featuresArray} />

      <PrimaryHeading
        title="Shared Styles"
        subtitle="Design System"
        color={themeColor}
      />

      <SubHeading title="/Metrics" />

      <Metrics
        baseline="8px baseline grid"
        baselineimg={pixelImageEight}
        gutter="16px gutter/spacing"
        gutterimg={pixelImageSixteen}
        rhythm="48px vertical rhythm"
        rhythmimg={pixelImageFortyEight}
      />

      <SubHeading title="/Color" />

      <ColorList colors={colorsArray} />

      <SubHeading title="/Typography" />

      <SubsectionImage image={typograhyImage} />

      <PrimaryHeading
        title="User Flows"
        subtitle="Main Functionality"
        color={themeColor}
      />

      <SubsectionImage image={flowChart} />
    </Container>
    <Footer />
  </Layout>
);

export default FlexMate;
