import React from "react";
import { Link } from "gatsby";
const ProjectItem = ({
  title,
  underline_color,
  underline_width,
  time_range,
  description,
  route,
  open_in_new_tab,
}) => {
  return (
    <Link
      to={route}
      // style={{ height: 144 }}
      className={
        "block w-full mb-2 ml-3 rounded-lg bg-white border-gray-100 text-gray-900"
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
        {/* 
          <div
            style={{
              width: underline_width,
              height: 5,
              backgroundColor: underline_color || "black",
            }}
          />
        */}
      </div>
      <p className="text-lg text-gray-900 leading-tight font-normal antialiased">
        {description}
      </p>
    </Link>
  );
};

export default ProjectItem;
