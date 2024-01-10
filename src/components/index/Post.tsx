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
    <div className={"sm:max-w-full mx-auto mb-4 "}>
      <Link className="" to={slug}>
        <h3
          style={{ lineHeight: 1 }}
          className={
            "w-[380px] overflow-hidden rounded-md bg-blue-200  border-2 border-black  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          }
        >
          <figcaption className="pt-4 px-4 pb-4 border-t-2 font-bold border-black text-xl text-black leading-tight">
            {title}
          </figcaption>
          <div className="px-4 py-2 bg-[#8CD1CA] flex flex-row justify-start items-center w-full border-t-2 border-black text-gray-900 ">
          <div className="flex flex-row justify-start items-center w-full ">
            <span className="text-lg font-bold">{date}</span>
          </div>
          <div className="bg-[#8CD1CA] flex flex-row justify-end items-center space-x-2">
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
                    className="rounded-md bg-slate-900"
                  >
                    <span className="text-sm antialiased font-bold text-white">
                      {tag}
                    </span>
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
