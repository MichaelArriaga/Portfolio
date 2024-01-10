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
    <div className={"sm:max-w-full mx-auto "}>
      <Link className="flex items-center justify-start mb-4" to={slug}>
        <h3
          style={{ lineHeight: 1 }}
          className={
            "w-[380px] overflow-hidden rounded-md bg-blue-200  border-2 border-black  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          }
        >
          {/* {thumbnail ? ( */}
          {/* ) : null} */}
            {/* <img */}
            {/*   className="w-full h-[150px] object-cover" */}
            {/*   src={thumbnail} */}
            {/*   alt="image" */}
            {/* /> */}
          <figcaption className="pt-4 px-4 pb-4 border-t-2 font-bold border-black flex flex-col justify-start items-start text-xl text-black leading-tight">
            {title}
          </figcaption>
          <div className="px-4 py-2 bg-[#8CD1CA] flex flex-row justify-start items-center w-full border-t-2 border-black text-grayp900 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg font-bold">{date}</span>
          </div>
          <div className="px-4 pb-4 bg-[#8CD1CA] flex flex-row justify-start items-center space-x-2">
            {post_tags && post_tags.length > 0
              ? post_tags.map((tag) => (
                  // post tag start
                  <Link
                    key={tag}
                    to={"/blog"}
                    style={{
                      paddingTop: 3,
                      paddingBottom: 3,
                      paddingLeft: 8,
                      paddingRight: 8,
                    }}
                    className="px-1 rounded bg-slate-900"
                  >
                    <h3 className="text-sm antialiased font-bold text-white">
                      {tag}
                    </h3>
                  </Link>
                  // post tag end
                ))
              : null}
          </div>
        </h3>
      </Link>
    </div>
  );
};

export default Post;
