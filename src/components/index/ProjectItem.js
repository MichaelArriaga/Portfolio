import React from 'react';
import font_names from '../../constants/font_names';
import { Link } from 'gatsby';
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
      style={{ height: 144 }}
      className={
        'block w-full p-3 sm:p-4 mb-4 rounded-lg bg-white shadow-md border border-gray-100 text-gray-900'
      }
    >
      <div className="mb-1">
        <h1
          style={{ fontFamily: font_names.bold }}
          className={
            'text-2xl text-gray-900 text-left tracking-tighter antialiased'
          }
        >
          {title}
        </h1>
        <div
          style={{
            width: underline_width,
            height: 5,
            backgroundColor: underline_color || 'black',
          }}
        ></div>
      </div>
      <h3
        style={{ fontFamily: font_names.semiBold }}
        className={'text-sm text-gray-900 text-left mb-1'}
      >
        {time_range}
      </h3>
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
