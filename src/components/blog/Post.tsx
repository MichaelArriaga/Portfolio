import React from "react";
import { Link } from "gatsby";

interface PropTypes {
  title: string;
  date: string;
  slug: string;
  post_tags: Array<String>;
}

const Post = ({ title, date, slug, post_tags }: PropTypes) => {
  return (
    <div className={"sm:max-w-xl "}>
      <Link className="flex justify-start items-center mb-1" to={slug}>
        <h3
          className={
            "text-base sm:text-lg text-gray-900 text-left flex flex-wrap justify-start items-center font-bold antialiased"
          }
        >
          <span className="mr-2">{title}</span>{" "}
          <span className="text-base tracking-tighter font-semibold text-gray-500">
            ({date})
          </span>
        </h3>
      </Link>

      <div className={"flex flex-row justify-start items-center"}>
        {post_tags && post_tags.length > 0
          ? post_tags.map((tag: any): any => (
              // post tag start
              <button
                disabled={true}
                key={tag}
                style={{
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: "#A0EDE4",
                }}
                className="px-1 rounded bg-cyan-400 mr-2 mb-3"
              >
                <h3 className="text-xs text-gray-900 font-normal antialiased">
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
