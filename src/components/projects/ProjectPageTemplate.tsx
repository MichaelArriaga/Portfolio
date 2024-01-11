import React from "react";
import { Link } from "gatsby";
import VideoDemo from "../../components/projects/VideoDemo";

type Color = {
  label: string;
  labelcolor: string;
  color: string;
};

type PropTypes = {
  primary_color: string;
  mockupImg: any;
  title: string;
  project_date: string;
  try_url?: string;
  description: string[];
  scope_array: string[];
  core_tech_array: string[];
  apps_used_array: string[];
  features_array: string[];
  metrics: {
    baseline_grid: string;
    baseline_grid_img: any;
    gutter: string;
    gutter_img: any;
    vertical_rhythm: string;
    vertical_rhythm_img: any;
  };
  colors_array: Color[];
  typography_image: any;
  flowchart_small_screen_img?: any;
  flowchart_large_screen_img?: any;
  is_video?: boolean;
};

const ProjectPageTemplate: React.FC<PropTypes> = ({
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
  is_video,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className="w-full">
        <div className="py-8">
          <Link to="/" className="underline text-lg text-left">
            {"< Back"}
          </Link>
        </div>
        {is_video ? (
          <VideoDemo src={mockupImg} />
        ) : (
          <img
            style={{ width: 300 }}
            className={"mx-auto pt-8 mb-8"}
            src={mockupImg}
            alt="notloaded"
          />
        )}

        {/* project title start */}
        <div className={"mb-2 w-full"}>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
            <h1
              className={
                "text-3xl tracking-tight md:text-3xl md:text-left font-bold antialiased flex flex-row justify-start items-center"
              }
            >
              {title}

              {/* try link start */}
              {try_url ? (
                <a
                  className={
                    "text-blue-600 block md:inline md:ml-4 text-2xl text-center md:text-left underline font-semibold antialiased"
                  }
                  href={try_url}
                  target="_blank "
                  rel="noopener"
                >
                  Try It Here
                </a>
              ) : null}
              {/* try link end */}
            </h1>
          </div>
          <h2
            style={{ color: primary_color }}
            className={
              "text-2xl tracking-tight text-center md:text-left font-bold antialiased"
            }
          >
            {project_date}
          </h2>
          {/* project title end */}
        </div>

        {/* description start */}
        <div className={"mx-auto mb-4 md:ml-0"}>
          {description.length > 0
            ? description.map((paragraph: any, index: number) => {
                return (
                  <p
                    key={index}
                    className={
                      "text-lg md:text-xl text-left font-normal antialiased mb-2"
                    }
                  >
                    {paragraph}
                  </p>
                );
              })
            : null}
        </div>
        {/* description end */}

        {/* scope sections start */}
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
          <ul className={"mb-4 md:w-1/3"}>
            <li
              style={{ color: primary_color }}
              className={
                "text-xl text-center md:text-left font-bold antialiased"
              }
            >
              SCOPE
            </li>

            {scope_array.length > 0
              ? scope_array.map((item: string, index: number) => {
                  return (
                    <li
                      key={index}
                      className={
                        "text-lg md:text-xl text-center md:text-left font-semibold antialiased"
                      }
                    >
                      {item}
                    </li>
                  );
                })
              : null}
          </ul>
          <ul className={"mb-4 md:w-1/3"}>
            <li
              style={{ color: primary_color }}
              className={
                "text-xl text-center md:text-left font-bold antialiased"
              }
            >
              CORE TECH
            </li>
            {core_tech_array.length > 0
              ? core_tech_array.map((item: string, index: number) => {
                  return (
                    <li
                      key={index}
                      className={
                        "text-lg md:text-xl text-center md:text-left font-semibold antialiased"
                      }
                    >
                      {item}
                    </li>
                  );
                })
              : null}
          </ul>
          <ul className={"mb-4 md:w-1/3"}>
            <li
              style={{ color: primary_color }}
              className={
                "text-xl text-center md:text-left font-bold antialiased"
              }
            >
              APPS USED
            </li>
            {apps_used_array.length > 0
              ? apps_used_array.map((item: string, index: number) => {
                  return (
                    <li
                      key={index}
                      className={
                        "text-lg md:text-xl text-center md:text-left font-semibold antialiased"
                      }
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
          className={
            "text-3xl tracking-tight text-center md:text-2xl md:text-left font-bold antialiased"
          }
        >
          FEATURES
        </h1>

        <h2
          style={{ color: primary_color }}
          className={
            "text-xl md:mb-2 mb-2 tracking-tight text-center md:text-xl md:text-left font-bold antialiased"
          }
        ></h2>

        <ul className={"list-disc mb-4 md:pl-6 "}>
          <div className="mx-auto flex flex-col justify-center items-center md:items-start">
            {features_array.length > 0
              ? features_array.map((item: string, index: number) => {
                  return (
                    <li
                      key={index}
                      className="list-desc text-lg font-semibold antialiased"
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
          className={
            "text-3xl tracking-tight text-center md:text-2xl md:text-left font-bold antialiased"
          }
        >
          SHARED STYLES
        </h1>
        <h2
          style={{ color: primary_color }}
          className={
            "text-xl md:mb-2 tracking-tight text-center md:text-xl md:text-left font-bold antialiased"
          }
        >
          Design System
        </h2>
        {/* shared styles heading section end */}

        {/* metrics section start */}
        <h2 className={"text-left text-lg mb-4 font-semibold antialiased"}>
          Metrics
        </h2>

        <div className="w-full">
          <div
            className={"md:flex md:flex-row md:justify-start md:items-center"}
          >
            <div className="mb-2 flex flex-row justify-start items-center md:mr-8 ">
              <img src={metrics.baseline_grid_img} alt="not loaded" />
              <h3 className={"text-xl ml-4 md:text-lg font-normal antialiased"}>
                {metrics.baseline_grid} baseline grid
              </h3>
            </div>

            <div className="mb-2 flex flex-row justify-start items-center md:mr-8">
              <img src={metrics.gutter_img} alt="not loaded" />
              <h3 className={"text-xl ml-4 md:text-lg font-normal antialiased"}>
                {metrics.gutter} gutter/spacing
              </h3>
            </div>

            <div className="mb-2 flex flex-row justify-start items-center md:mr-8">
              <img src={metrics.vertical_rhythm_img} alt="not loaded" />
              <h3 className={"text-xl ml-4 md:text-lg font-normal antialiased"}>
                {metrics.vertical_rhythm} vertical rhythm
              </h3>
            </div>
          </div>
        </div>
        {/* metrics section end */}

        {/* colors section start */}
        <h2 className={"text-left text-lg mb-4 font-semibold antialiased"}>
          Color
        </h2>
        <ul className={"flex flex-wrap justify-start items-center"}>
          {colors_array.map((color: Color, index: number) => {
            return (
              <li
                key={index}
                className={"flex flex-row justify-start items-center"}
              >
                <div
                  className={"h-32 w-32 p-2 mr-4 mb-4 border-4 border-black"}
                  style={{
                    background: color.color,
                    color: color.labelcolor,
                  }}
                >
                  <p className="leading-none font-semibold antialiased">
                    {color.label}
                  </p>
                  <p className="leading-none font-semibold antialiased">
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
          <h2 className={"text-left text-lg mb-4 font-semibold antialiased"}>
            Typography
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
              className={
                "text-3xl tracking-tight text-center md:text-2xl md:text-left font-bold antialiased"
              }
            >
              User Flows
            </h1>
            <h2
              style={{ color: primary_color }}
              className={
                "text-xl mb-2 md:mb-4 tracking-tight text-center md:text-xl md:text-left font-bold antialiased"
              }
            >
              Main Functionality
            </h2>

            {/* small screen */}
            <div className="md:hidden">
              <img
                style={{ maxWidth: 250 }}
                className="mx-auto"
                src={flowchart_small_screen_img}
                alt="not loaded"
              />
            </div>

            {/* large screen */}
            <div className="hidden md:block">
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
    </div>
  );
};

export default ProjectPageTemplate;
