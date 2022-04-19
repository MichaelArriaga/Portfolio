//  __  __ _ _         ___
// |  \/  (_) |_____  | _ \__ _ _  _   https://github.com/MichaelArriaga
// | |\/| | | / / -_) |   / _` | || |  https://mike-ray.netlify.app/
// |_|  |_|_|_\_\___| |_|_\__,_|\_, |
//                             |__/
// create-new-blog-post.js (Node script for gatsby.js)

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const BLOG_DIR = "src/pages/blog";
const TODAYS_DATE = new Date().toISOString().split("T")[0];

const newFrontmatter = (post_name, filename, new_post_dir) => {
  return `---
slug: /blog/${filename}
path: /blog/${filename}
date: ${TODAYS_DATE}
title: ${post_name}
blurb: ${post_name}
readtime: '15 min read'
tags: 'Tag1, Tag2, Tag3'
---
### Find me at: ${new_post_dir}/${filename}.md`;
};

const createNewBlogPost = (post_name) => {
  let filename = post_name
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("-");
  let new_post_dir = `${BLOG_DIR}/${filename}`;
  //1. Create a directory of post name
  fs.mkdirSync(new_post_dir, { recursive: true });
  //2. Create the markdown file and write generated frontmatter to file
  fs.writeFileSync(
    `${new_post_dir}/${filename}.md`,
    newFrontmatter(post_name, filename, new_post_dir),
    (err) => {
      if (err) throw err;
    }
  );

  //3. Copy sample social media preview image to new_post_dir
  // NOT YET WORKING!!
  // fs.copyFile(
  //   "./sample-preview-card-image@800x418.png",
  //   `${new_post_dir}/sample-preview-card-image@800x418.png`,
  //   (err) => {
  //     if (err) throw err;
  //     console.log("source.txt was copied to destination.txt");
  //   }
  // );
  console.log(`****************************`);
  console.log(`Post created successfully!!`);
  console.log(`Find it at: ${new_post_dir}/${filename}.md`);
  console.log(`****************************`);
};

rl.question(
  "What do you want the name of the post to be? (ex: Top 10 Rubyists to follow in 2022)  ",
  (post_name) => {
    console.log(`Title: '${post_name}'`);
    console.log(`Is that correct? (Y/[Enter]|N) `);
    rl.question("", (confirm) => {
      if (
        // enter key
        !confirm ||
        confirm === "Yes" ||
        confirm === "yes" ||
        confirm === "y"
      ) {
        createNewBlogPost(post_name);
      }

      if (confirm === "No" || confirm === "no" || confirm === "n") {
        console.log("well nevermind then!");
      }
      rl.close();
    });
  }
);

rl.on("close", () => {
  console.log("Closing....");
  process.exit(0);
});
