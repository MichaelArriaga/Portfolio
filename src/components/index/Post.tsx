import React from "react";
import { Link } from "gatsby";

interface PropTypes {
  slug: string;
  title: string;
  date: string;
  post_tags: Array<string>;
}

const Post = ({ slug, title, date, post_tags }: PropTypes) => {
  return (
    <div className={"sm:max-w-xl mx-auto ml-3 mb-3"}>
      <Link className="flex justify-start items-center mb-1" to={slug}>
        <h3
          style={{ lineHeight: 1 }}
          className={
            "text-lg text-gray-900 text-left flex flex-wrap justify-start items-center font-semibold antialiased"
          }
        >
          <span className="underline mr-2">{title}</span>{" "}
        </h3>
      </Link>

      <div className={"flex flex-row justify-start items-center "}>
        {post_tags && post_tags.length > 0
          ? post_tags.map((tag) => (
              // post tag start
              <Link
                key={tag}
                to={"/blog"}
                style={{
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: "#A0EDE4",
                }}
                className="px-1 rounded bg-cyan-400 mr-2"
              >
                <h3 className="text-xs text-gray-900 font-semibold antialiased">
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
