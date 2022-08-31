import React from "react";
import { Link } from "gatsby";

interface PropTypes {
  title: string;
  time_range: string;
  route: string;
  open_in_new_tab: boolean;
}

const ProjectItem = ({
  title,
  time_range,
  route,
  open_in_new_tab,
}: PropTypes) => {
  return (
    <Link
      to={route}
      // style={{ height: 144 }}
      className={
        "block w-full ml-3 mb-1 rounded-lg border-gray-100 text-gray-900"
      }
      target={open_in_new_tab ? "_blank" : null}
    >
      <div className="">
        <div className="flex flex-row items-center justify-start">
          <h1
            className={
              "text-xl text-gray-900 text-left tracking-snug antialiased mr-2 font-bold antialiased"
            }
          >
            {title}
          </h1>
          <h3
            style={{ marginBottom: 0 }}
            className={
              "text-lg text-gray-900 text-left leading-none tracking-snug font-bold antialiased"
            }
          >
            ({time_range})
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
