import React from "react";
import { Link } from "gatsby";

interface PropTypes {
  slug: string;
  title: string;
  date: string;
  post_tags: Array<string>;
  thumbnail: any;
}

const Post = ({ slug, title, date, post_tags, thumbnail }: PropTypes) => {
  return (
    <div className={"w-full mb-8 pr-2"}>
      <Link className="" to={slug}>
        <h3
          style={{ lineHeight: 1 }}
          className={
            "overflow-hidden rounded-md bg-sky-200 border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          }
        >
          <figcaption className="pt-4 px-4 pb-4 border-t-2 font-bold border-black text-2xl text-black leading-tight">
            {title}
          </figcaption>
          <div className="px-4 py-2 bg-[#8CD1CA] flex flex-row justify-start items-center w-full border-t-2 border-black text-gray-900 ">
            <div className="flex flex-row justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-bold">{date}</span>
            </div>
            <div className="bg-[#8CD1CA] flex flex-row justify-end items-center space-x-2 w-full">
              {post_tags && post_tags.length > 0
                ? post_tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingLeft: 8,
                        paddingRight: 8,
                      }}
                      className="rounded-md bg-slate-900 text-sm antialiased font-bold text-white"
                    >
                      {tag}
                    </span>
                  ))
                : null}
            </div>
          </div>
        </h3>
      </Link>
    </div>
  );
};

export default Post;
