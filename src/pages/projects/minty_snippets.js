import React from 'react';
import ReusableHelmet from '../../components/ReusableHelmet';
import ProjectPageTemplate from '../../components/projects/ProjectPageTemplate';
import Footer from '../../components/Footer';

// static assets
import mockupImg from '../../../static/etc/images/project_images/crowd_mint/mockup.png';
import baseline_grid_img from '../../../static/etc/images/project_images/flex_mate/8px-grid.png';
import gutter_img from '../../../static/etc/images/project_images/flex_mate/16px-grid.png';
import vertical_rhythm_img from '../../../static/etc/images/project_images/flex_mate/48px-grid.png';
import typography_image from '../../../static/etc/images/project_images/flex_mate/typography-system.png';
// import flow_chart_small_screen_img from '../../../static/etc/images/project_images/flex_mate/flow-chart-small-screen.png';
// import flow_chart_large_screen_img from '../../../static/etc/images/project_images/flex_mate/flow-chart-large-screen.png';
// stylesheet
import '../index-css.module.css';

const CrowdMint = () => (
  <div className="w-full">
    <ReusableHelmet title={'Minty Snippets'} description={'Minty Snippets'} />{' '}
    <ProjectPageTemplate
      primary_color="#3661F2"
      mockupImg={mockupImg}
      title="Minty Snippets"
      project_date="2022 - Current"
      try_url={''}
      description="Minty Snippets is a browser extension that makes it easy to create and insert and customize reusable text snippets. Need to insert a professional cover letter on the fly while still keeping it personalized? Minty Snippets has you covered, and it completely free."
      scope_array={['Browser Extension']}
      core_tech_array={['React.js']}
      apps_used_array={['Adobe XD', 'VIM']}
      features_array={['Earnings Tracking', 'Goal Setting']}
      metrics={{
        baseline_grid: '8px',
        baseline_grid_img: baseline_grid_img,
        gutter: '16px',
        gutter_img: gutter_img,
        vertical_rhythm: '48px',
        vertical_rhythm_img: vertical_rhythm_img,
      }}
      colors_array={[
        {
          label: 'Primary',
          labelcolor: 'white',
          color: '#3661F2',
        },
        {
          label: 'Flash',
          labelcolor: 'white',
          color: '#FF0000',
        },
        {
          label: 'Success',
          labelcolor: 'black',
          color: '#00EA3F',
        },
        {
          label: 'Text/BG',
          labelcolor: 'white',
          color: '#1F1F1F',
        },
      ]}
      typography_image={typography_image}
      // flowchart_small_screen_img={flow_chart_small_screen_img}
      // flowchart_large_screen_img={flow_chart_large_screen_img}
    />
    <Footer />
  </div>
);

export default CrowdMint;
