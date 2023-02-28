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
    <div className={"sm:max-w-xl mx-auto mb-2"}>
      <Link className="flex items-center justify-start mb-1" to={slug}>
        <h3
          style={{ lineHeight: 1 }}
          className={
            "text-xl text-gray-900 text-left flex flex-wrap justify-start items-center font-semibold underline antialiased"
          }
        >
          <span className="mr-2">{title}</span>{" "}
        </h3>
      </Link>

      <div className={"flex flex-row justify-start items-center "}>
        <div className="flex flex-row justify-start items-center mb-1 mr-3">
          <span className="text-base font-semibold text-gray-900">{date}</span>
        </div>

        {/* <div className="flex flex-row justify-start items-center"> */}
        {/*   {post_tags && post_tags.length > 0 */}
        {/*     ? post_tags.map((tag) => ( */}
        {/*         // post tag start */}
        {/*         <Link */}
        {/*           key={tag} */}
        {/*           to={"/blog"} */}
        {/*           style={{ */}
        {/*             paddingTop: 3, */}
        {/*             paddingBottom: 3, */}
        {/*             paddingLeft: 6, */}
        {/*             paddingRight: 6, */}
        {/*             backgroundColor: "#76d3ca", */}
        {/*           }} */}
        {/*           className="px-1 mr-1 rounded bg-cyan-400" */}
        {/*         > */}
        {/*           <h3 */}
        {/*             style={{ fontSize: 12 }} */}
        {/*             className="text-xs antialiased font-semibold text-gray-900" */}
        {/*           > */}
        {/*             {tag} */}
        {/*           </h3> */}
        {/*         </Link> */}
        {/*         // post tag end */}
        {/*       )) */}
        {/*     : null} */}
        {/* </div> */}

      </div>
    </div>
  );
};

export default Post;
