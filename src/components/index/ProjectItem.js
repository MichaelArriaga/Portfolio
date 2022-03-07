import React from "react";
import font_names from "../../constants/font_names";
import { Link } from "gatsby";
const ProjectItem = ({
  title,
  underline_color,
  underline_width,
  time_range,
  description,
  route,
}) => {
  return (
    <Link
      to={route}
      // style={{ height: 144 }}
      className={
        "block w-full mb-2 ml-3 rounded-lg bg-white border-gray-100 text-gray-900"
      }
    >
      <div className="">
        <div className="flex flex-row justify-start items-center">
          <h1
            style={{ fontFamily: font_names.bold }}
            className={
              "text-xl text-gray-900 text-left tracking-tighter antialiased mr-2 underline "
            }
          >
            {title}
          </h1>
          <h3
            style={{ fontFamily: font_names.semiBold, marginBottom: 0 }}
            className={
              "text-lg text-gray-900 text-left leading-none tracking-tighter"
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
      <p
        style={{ fontFamily: font_names.regular }}
        className="text-base text-gray-900 leading-tight"
      >
        {description}
      </p>
    </Link>
  );
};

export default ProjectItem;
