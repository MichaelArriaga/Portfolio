import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link } from 'gatsby';
import fonts from '../../constants/font_names';

const Post = ({ title, date, slug, post_tags }) => {
  return (
    <div className={'sm:max-w-xl '}>
      <Link className="flex justify-start items-center mb-1" to={slug}>
        <h3
          style={{ fontFamily: fonts.semiBold }}
          className={
            'text-base sm:text-lg text-gray-900 text-left flex flex-wrap justify-start items-center'
          }
        >
          <span className="underline mr-2">{title}</span>{' '}
          <span style={{ color: '#9F9F9F' }} className="tracking-tighter">
            ({date})
          </span>
        </h3>
      </Link>

      <div className={'flex flex-row justify-start items-center'}>
        {post_tags && post_tags.length > 0
          ? post_tags.map((tag) => (
              // post tag start
              <button
                disabled={true}
                key={tag}
                style={{
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: '#A0EDE4',
                }}
                className="px-1 rounded bg-cyan-400 mr-2 mb-6"
              >
                <h3
                  style={{ fontFamily: fonts.semiBold }}
                  className="text-xs text-gray-900"
                >
                  {tag}
                </h3>
              </button>
              // post tag end
            ))
          : null}
      </div>
    </div>
  );
};
export default Post;
