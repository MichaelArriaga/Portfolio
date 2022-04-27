import React from "react";
import { Link } from "gatsby";

interface PropTypes {
  title: string;
  underline_color?: string;
  underline_width?: number;
  time_range: string;
  description: string;
  route: string;
  open_in_new_tab?: boolean;
}

const ProjectItem = ({
  title,
  time_range,
  description,
  route,
  open_in_new_tab,
}: PropTypes) => {
  return (
    <Link
      to={route}
      // style={{ height: 144 }}
      className={
        "block w-full mb-2 ml-3 rounded-lg border-gray-100 text-gray-900"
      }
      target={open_in_new_tab ? "_blank" : null}
    >
      <div className="">
        <div className="flex flex-row justify-start items-center">
          <h1
            className={
              "text-xl text-gray-900 text-left tracking-snug antialiased mr-2 underline font-bold antialiased"
            }
          >
            {title}
          </h1>
          <h3
            style={{ marginBottom: 0 }}
            className={
              "text-lg text-gray-900 text-left leading-none tracking-snug font-semibold antialiased"
            }
          >
            ({time_range})
          </h3>
        </div>
      </div>
      <p className="text-lg text-gray-900 leading-tight font-normal antialiased">
        {description}
      </p>
    </Link>
  );
};

export default ProjectItem;
