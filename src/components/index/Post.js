import React from "react";
import fonts from "../../constants/font_names";
import { Link } from "gatsby";

const Post = ({ slug, title, date, post_tags }) => {
  return (
    <div className={"sm:max-w-xl mx-auto ml-3 mb-3"}>
      <Link className="flex justify-start items-center mb-1" to={slug}>
        <h3
          style={{ fontFamily: fonts.semiBold, lineHeight: 1 }}
          className={
            "text-base text-gray-900 text-left flex flex-wrap justify-start items-center"
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
