import React from 'react';
// import { Helmet } from 'react-helmet';

// global components
// import Header from '../../components/Header';
// import ResponsiveHeader from '../../components/ResponsiveHeader';
import Footer from '../../components/Footer';

import fonts from '../../constants/font_names';
// static assets
import mockupImg from '../../../static/etc/images/project-images/flex-mate/phone-mockup.png';
import pixelImageEight from '../../../static/etc/images/project-images/8px-grid.png';
import pixelImageSixteen from '../../../static/etc/images/project-images/16px-grid.png';
import pixelImageFortyEight from '../../../static/etc/images/project-images/48px-grid.png';
import typography_image from '../../../static/etc/images/project-images/flex-mate/typography-system.png';
import flow_chart_small_screen from '../../../static/etc/images/project-images/flex-mate/flow-chart-small-screen.png';
import flow_chart_large_screen from '../../../static/etc/images/project-images/flex-mate/flow-chart-large-screen.png';
// stylesheet
import '../index-css.module.css';
// import Layout from '../../components/Layout';

// main components
// import Container from '../../components/project_components/Container';
import ReusableHelmet from '../../components/ReusableHelmet';

const THEME_COLOR = '#FE8B10';

const FlexMate = () => (
  <div className="w-full">
    <ReusableHelmet title={'Flex Mate App'} description={'Flex Mate App'} />
    {/* <Header />
    <ResponsiveHeader /> */}

    <div className="max-w-screen-lg mx-auto">
      <img
        style={{ width: 300 }}
        className={'mx-auto pt-8 mb-8'}
        src={mockupImg}
        alt="notloaded"
      />

      {/* project title start */}

      <div className={'mb-2'}>
        <h1
          style={{ fontFamily: fonts.bold }}
          className={
            'text-3xl tracking-tight text-center sm:text-2xl sm:text-left'
          }
        >
          FLEX MATE
        </h1>
        <h2
          style={{ fontFamily: fonts.bold, color: THEME_COLOR }}
          className={
            'text-xl tracking-tight text-center sm:text-xl sm:text-left'
          }
        >
          November 2018
        </h2>
      </div>
      {/* project title end */}

      {/* try link start */}
      {/* <a
        style={{ fontFamily: fonts.bold }}
        className={'block text-center underline mb-4'}
        href="https://michaelarriaga.github.io/Flex-Warehouse-Expense-Calculator/"
        target="_blank "
        rel="noopener"
      >
        TRY IT OUT HERE
      </a> */}
      {/* try link end */}

      {/* description start */}
      <div className={'mx-auto mb-4 sm:max-w-screen-sm sm:ml-0'}>
        <p
          style={{ fontFamily: fonts.regular }}
          className={'text-base text-left'}
        >
          A tool that helps Amazon Flex Drivers estimate often unaccounted for
          fuel expenses. This app shows the user a list of available delivery
          stations based on their preferred region, and renders an estimate of
          fuel cost for travel based on the user provided average cost per
          gallon (cpg) as well as their vehicle average miles per gallon (mpg).
        </p>
      </div>
      {/* description end */}

      {/* scope sections start */}
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start">
        <ul className={'mb-4 sm:w-1/3'}>
          <li
            className={'text-xl text-center sm:text-left'}
            style={{ fontFamily: fonts.bold, color: THEME_COLOR }}
          >
            SCOPE
          </li>
          <li
            style={{ fontFamily: fonts.semiBold }}
            className={'text-lg text-center sm:text-left'}
          >
            Website
          </li>
          <li
            style={{ fontFamily: fonts.semiBold }}
            className={'text-lg text-center sm:text-left'}
          >
            Cost Analysis
          </li>
        </ul>
        <ul className={'mb-4 sm:w-1/3'}>
          <li
            className={'text-xl text-center sm:text-left'}
            style={{ fontFamily: fonts.bold, color: THEME_COLOR }}
          >
            CORE TECH
          </li>
          <li
            style={{ fontFamily: fonts.semiBold }}
            className={'text-lg text-center sm:text-left'}
          >
            React.js
          </li>
          <li
            style={{ fontFamily: fonts.semiBold }}
            className={'text-lg text-center sm:text-left'}
          >
            Google Distance Matrix API
          </li>
        </ul>
        <ul className={'mb-4 sm:w-1/3'}>
          <li
            className={'text-xl text-center sm:text-left'}
            style={{ fontFamily: fonts.bold, color: THEME_COLOR }}
          >
            APPS USED
          </li>
          <li
            style={{ fontFamily: fonts.semiBold }}
            className={'text-lg text-center sm:text-left'}
          >
            Adobe XD
          </li>
          <li
            style={{ fontFamily: fonts.semiBold }}
            className={'text-lg text-center sm:text-left'}
          >
            VS Code
          </li>
        </ul>
      </div>
      {/* scope sections end */}

      {/* line seperator start */}
      <div className="w-full py-1 mb-4 border-b border-gray-200"></div>
      {/* line seperator end */}

      {/* features section start */}
      <h1
        style={{ fontFamily: fonts.bold }}
        className={
          'text-3xl tracking-tight mb-2 text-center sm:text-2xl sm:text-left'
        }
      >
        FEATURES
      </h1>

      <ul className={'list-disc mb-4 sm:pl-6 '}>
        <div className="mx-auto flex flex-col justify-center items-center sm:items-start">
          <li style={{ fontFamily: fonts.bold }} className="list-desc text-lg">
            Fuel Cost Estimation
          </li>
          <li style={{ fontFamily: fonts.bold }} className="list-desc text-lg">
            Real-Time travel time estimations
          </li>
          <li style={{ fontFamily: fonts.bold }} className="list-desc text-lg">
            Show Job Types By Station
          </li>
          <li style={{ fontFamily: fonts.bold }} className="list-desc text-lg">
            Mutiple Region Coverage
          </li>
        </div>
      </ul>
      {/* features section end */}

      {/* shared styles section start */}
      <h1
        style={{ fontFamily: fonts.bold }}
        className={
          'text-3xl mb-2 tracking-tight text-center sm:text-2xl sm:text-left'
        }
      >
        SHARED STYLES
      </h1>
      <h2
        style={{ fontFamily: fonts.bold, color: THEME_COLOR }}
        className={'text-xl tracking-tight text-center sm:text-xl sm:text-left'}
      >
        Design System
      </h2>
      {/* shared styles section end */}

      {/* metrics section start */}
      <h2
        style={{ fontFamily: fonts.bold }}
        className={'text-left text-lg mb-4'}
      >
        /Metrics
      </h2>

      <div className="w-full">
        <div className={''}>
          <div className="mb-2 flex flex-row justify-start items-center">
            <img src={pixelImageEight} alt="not loaded" />
            <h3
              style={{ fontFamily: fonts.regular }}
              className={'text-xl ml-4'}
            >
              8px baseline grid
            </h3>
          </div>

          <div className="mb-2 flex flex-row justify-start items-center">
            <img src={pixelImageSixteen} alt="not loaded" />
            <h3
              style={{ fontFamily: fonts.regular }}
              className={'text-xl ml-4'}
            >
              16px gutter/spacing
            </h3>
          </div>

          <div className="mb-2 flex flex-row justify-start items-center">
            <img src={pixelImageFortyEight} alt="not loaded" />
            <h3
              style={{ fontFamily: fonts.regular }}
              className={'text-xl ml-4'}
            >
              48px vertical rhythm
            </h3>
          </div>
        </div>
      </div>
      {/* metrics section end */}

      {/* colors section start */}
      <h2
        style={{ fontFamily: fonts.bold }}
        className={'text-left text-lg mb-4'}
      >
        /Color
      </h2>
      <ul className={'block flex flex-wrap justify-start items-center'}>
        {[
          {
            label: 'Primary',
            labelcolor: 'white',
            color: '#FE8B10',
          },
          {
            label: 'Flash',
            labelcolor: 'white',
            color: '#FF0000',
          },
          {
            label: 'Text/BG',
            labelcolor: 'white',
            color: '#000000',
          },
        ].map((color) => {
          return (
            <li className={'flex flex-row justify-start items-center'}>
              <div
                className={'h-32 w-32 p-2 mr-4 mb-4 border-4 border-black'}
                style={{
                  background: color.color,
                  color: color.labelcolor,
                }}
              >
                <p
                  style={{ fontFamily: fonts.semiBold }}
                  className="leading-none"
                >
                  {color.label}
                </p>
                <p
                  style={{ fontFamily: fonts.semiBold }}
                  className="leading-none"
                >
                  {color.color}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      {/* colors section end */}

      {/* typography section start */}
      <div className="mb-4">
        <h2
          style={{ fontFamily: fonts.bold }}
          className={'text-left text-lg mb-4'}
        >
          /Typography
        </h2>

        <img
          style={{ maxWidth: 250 }}
          className=""
          src={typography_image}
          alt="not loaded"
        />
      </div>
      {/* typography section end */}

      {/* flow charts start */}
      <h1
        style={{ fontFamily: fonts.bold }}
        className={
          'text-3xl mb-2 tracking-tight text-center sm:text-2xl sm:text-left'
        }
      >
        User Flows
      </h1>
      <h2
        style={{ fontFamily: fonts.bold, color: THEME_COLOR }}
        className={'text-xl tracking-tight text-center sm:text-xl sm:text-left'}
      >
        Main Functionality
      </h2>

      {/* small screen */}
      <div className="sm:hidden">
        <img
          style={{ maxWidth: 250 }}
          className="mx-auto"
          src={flow_chart_small_screen}
          alt="not loaded"
        />
      </div>

      {/* large screen */}
      <div className="hidden sm:block">
        <img
          style={{ maxWidth: 700 }}
          className=""
          src={flow_chart_large_screen}
          alt="not loaded"
        />
      </div>

      {/* flow charts end */}
    </div>
    <Footer />
  </div>
);

export default FlexMate;
