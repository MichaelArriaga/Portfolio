import { Link } from 'gatsby';
import React from 'react';
import fonts from '../../constants/font_names';

const ProjectPageTemplate = ({
  primary_color,
  mockupImg,
  title,
  project_date,
  try_url,
  description,
  scope_array,
  core_tech_array,
  apps_used_array,
  features_array,
  metrics,
  colors_array,
  typography_image,
  flowchart_small_screen_img,
  flowchart_large_screen_img,
}) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="py-8">
          <Link to="/" className="underline text-lg sm:text-xl text-left">
            {'< Back'}
          </Link>
        </div>
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
            {title}
          </h1>
          <h2
            style={{ fontFamily: fonts.bold, color: primary_color }}
            className={
              'text-xl tracking-tight text-center sm:text-xl sm:text-left'
            }
          >
            {project_date}
          </h2>
        </div>
        {/* project title end */}

        {/* try link start */}
        {try_url.length ? (
          <a
            style={{ fontFamily: fonts.bold }}
            className={'block text-center underline mb-4'}
            href="https://michaelarriaga.github.io/Flex-Warehouse-Expense-Calculator/"
            target="_blank "
            rel="noopener"
          >
            TRY IT OUT HERE
          </a>
        ) : null}
        {/* try link end */}

        {/* description start */}
        <div className={'mx-auto mb-4 sm:ml-0'}>
          <p
            style={{ fontFamily: fonts.regular }}
            className={'text-lg sm:text-xl text-left'}
          >
            {description}
          </p>
        </div>
        {/* description end */}

        {/* scope sections start */}
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start">
          <ul className={'mb-4 sm:w-1/3'}>
            <li
              className={'text-xl text-center sm:text-left'}
              style={{ fontFamily: fonts.bold, color: primary_color }}
            >
              SCOPE
            </li>

            {scope_array.length > 0
              ? scope_array.map((item) => {
                  return (
                    <li
                      style={{ fontFamily: fonts.semiBold }}
                      className={'text-lg sm:text-xl text-center sm:text-left'}
                    >
                      {item}
                    </li>
                  );
                })
              : null}
          </ul>
          <ul className={'mb-4 sm:w-1/3'}>
            <li
              className={'text-xl text-center sm:text-left'}
              style={{ fontFamily: fonts.bold, color: primary_color }}
            >
              CORE TECH
            </li>
            {core_tech_array.length > 0
              ? core_tech_array.map((item) => {
                  return (
                    <li
                      style={{ fontFamily: fonts.semiBold }}
                      className={'text-lg sm:text-xl text-center sm:text-left'}
                    >
                      {item}
                    </li>
                  );
                })
              : null}
          </ul>
          <ul className={'mb-4 sm:w-1/3'}>
            <li
              className={'text-xl text-center sm:text-left'}
              style={{ fontFamily: fonts.bold, color: primary_color }}
            >
              APPS USED
            </li>
            {apps_used_array.length > 0
              ? apps_used_array.map((item) => {
                  return (
                    <li
                      style={{ fontFamily: fonts.semiBold }}
                      className={'text-lg sm:text-xl text-center sm:text-left'}
                    >
                      {item}
                    </li>
                  );
                })
              : null}
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
            'text-3xl tracking-tight text-center sm:text-2xl sm:text-left'
          }
        >
          FEATURES
        </h1>

        <h2
          style={{ fontFamily: fonts.bold, color: primary_color }}
          className={
            'text-xl sm:mb-2 mb-2 tracking-tight text-center sm:text-xl sm:text-left'
          }
        >
          Value System
        </h2>

        <ul className={'list-disc mb-4 sm:pl-6 '}>
          <div className="mx-auto flex flex-col justify-center items-center sm:items-start">
            {features_array.length > 0
              ? features_array.map((item) => {
                  return (
                    <li
                      style={{ fontFamily: fonts.bold }}
                      className="list-desc text-lg"
                    >
                      {item}
                    </li>
                  );
                })
              : null}
          </div>
        </ul>
        {/* features section end */}

        {/* shared styles heading section start */}
        <h1
          style={{ fontFamily: fonts.bold }}
          className={
            'text-3xl tracking-tight text-center sm:text-2xl sm:text-left'
          }
        >
          SHARED STYLES
        </h1>
        <h2
          style={{ fontFamily: fonts.bold, color: primary_color }}
          className={
            'text-xl sm:mb-2 tracking-tight text-center sm:text-xl sm:text-left'
          }
        >
          Design System
        </h2>
        {/* shared styles heading section end */}

        {/* metrics section start */}
        <h2
          style={{ fontFamily: fonts.bold }}
          className={'text-left text-lg mb-4'}
        >
          /Metrics
        </h2>

        <div className="w-full">
          <div
            className={'sm:flex sm:flex-row sm:justify-start sm:items-center'}
          >
            <div className="mb-2 flex flex-row justify-start items-center sm:mr-8 ">
              <img src={metrics.baseline_grid_img} alt="not loaded" />
              <h3
                style={{ fontFamily: fonts.regular }}
                className={'text-xl ml-4 sm:text-lg'}
              >
                {metrics.baseline_grid} baseline grid
              </h3>
            </div>

            <div className="mb-2 flex flex-row justify-start items-center sm:mr-8">
              <img src={metrics.gutter_img} alt="not loaded" />
              <h3
                style={{ fontFamily: fonts.regular }}
                className={'text-xl ml-4 sm:text-lg'}
              >
                {metrics.gutter} gutter/spacing
              </h3>
            </div>

            <div className="mb-2 flex flex-row justify-start items-center sm:mr-8">
              <img src={metrics.vertical_rhythm_img} alt="not loaded" />
              <h3
                style={{ fontFamily: fonts.regular }}
                className={'text-xl ml-4 sm:text-lg'}
              >
                {metrics.vertical_rhythm} vertical rhythm
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
          {colors_array.map((color) => {
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
        {flowchart_small_screen_img && flowchart_large_screen_img ? (
          <div className="mb-12">
            <h1
              style={{ fontFamily: fonts.bold }}
              className={
                'text-3xl tracking-tight text-center sm:text-2xl sm:text-left'
              }
            >
              User Flows
            </h1>
            <h2
              style={{ fontFamily: fonts.bold, color: primary_color }}
              className={
                'text-xl mb-2 sm:mb-4 tracking-tight text-center sm:text-xl sm:text-left'
              }
            >
              Main Functionality
            </h2>

            {/* small screen */}
            <div className="sm:hidden">
              <img
                style={{ maxWidth: 250 }}
                className="mx-auto"
                src={flowchart_small_screen_img}
                alt="not loaded"
              />
            </div>

            {/* large screen */}
            <div className="hidden sm:block">
              <img
                style={{ maxWidth: 700 }}
                className=""
                src={flowchart_large_screen_img}
                alt="not loaded"
              />
            </div>
          </div>
        ) : null}
        {/* flow charts end */}
      </div>
    </>
  );
};

export default ProjectPageTemplate;
