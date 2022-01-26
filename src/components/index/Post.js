import React from 'react';
import fonts from '../../constants/font_names';
import { Link } from 'gatsby';

const Post = ({ title, date, post_tags }) => {
  return (
    <div className={'sm:max-w-xl mx-auto mb-3'}>
      <Link
        className="flex justify-start items-center mb-1"
        to={'/blog/understanding-redux'}
      >
        <div
          id="circle"
          style={{
            width: 8,
            height: 8,
            borderRadius: 50,
            backgroundColor: '#1F1F1F',
            marginRight: 10,
          }}
          className="hidden sm:block"
        ></div>
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

      <div className={'flex flex-row justify-start items-center sm:pl-4'}>
        {post_tags.length > 0
          ? post_tags.map((tag) => (
              // post tag start
              <Link
                to={'/blog/understanding-redux'}
                style={{
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: '#A0EDE4',
                }}
                className="px-1 rounded bg-cyan-400 mr-2"
              >
                <h3
                  style={{ fontFamily: fonts.semiBold }}
                  className="text-xs text-gray-900"
                >
                  {tag}
                </h3>
              </Link>
              // post tag end
            ))
          : null}
      </div>
    </div>
  );
};

export default Post;
