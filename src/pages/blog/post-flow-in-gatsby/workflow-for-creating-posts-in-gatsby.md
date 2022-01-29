---
slug: '/blog/post-flow-in-gatsby'
path: '/blog/post-flow-in-gatsby'
date: '2018-03-07'
title: 'Workflow for Creating Posts in Gatsby'
readtime: '2 min read'
tags: 'Gatsby.js'
---

1. Create a directory in `src/pages/blog` for your post **make sure that the name of this directory is only a few words otherwise it will return graphql /path error** This directory will be used for our post but also it will contain all of the image assets inside the post
2. Create the markdown file that will be the post. `touch src/pages/blog/how-to-use-this-plugin/how-to-use-this-plugin.md`
3. Fill out the front matter of your post with the appropriate information:

```
//post.md
___
path: "/blog/animate-blog-posts-with-isotope"
date: "2017-11-07"
title: "Animate and Filter Your Blog Posts with Isotope"
readtime: "10 min read"
___
```

3. Write the body of your post, and remember to place all of the images that you are going to reference in your post in the current directory and reference them using `![alt](image.png)`
