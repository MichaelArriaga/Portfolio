import React from 'react';
import fonts from '../../constants/font_names';
import { Link } from 'gatsby';

const Post = ({ title, date, post_tags }) => {
  return (
    <div className={'sm:max-w-xl mx-auto mb-2'}>
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
            backgroundColor: '#9F9F9F',
            marginRight: 10,
          }}
          className="hidden sm:block"
        ></div>
        <h3
          style={{ fontFamily: fonts.semiBold }}
          className={'text-base text-gray-900 text-left'}
        >
          <span className="underline mr-1">{title}</span>{' '}
          <span style={{ paddingLeft: 5, color: '#9F9F9F' }}>({date})</span>
        </h3>
      </Link>

      <div className={'flex flex-row justify-start items-center sm:pl-4'}>
        {post_tags.length > 0
          ? post_tags.map((tag) => (
              <Link
                to={'/blog/understanding-redux'}
                style={{ backgroundColor: '#A0EDE4' }}
                className="py-1 px-2 rounded bg-cyan-400 mr-3"
              >
                <h3
                  style={{ fontFamily: fonts.semiBold }}
                  className="text-sm text-gray-900"
                >
                  {tag}
                </h3>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Post;