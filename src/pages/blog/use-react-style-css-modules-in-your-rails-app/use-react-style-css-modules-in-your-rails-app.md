---
slug: "/blog/use-react-style-css-modules-in-your-rails-app"
path: "/blog/use-react-style-css-modules-in-your-rails-app"
date: "2020-10-13"
title: "Use React Style CSS Modules in Your Rails App"
description: "Use React Style CSS Modules in Your Rails App"
readtime: "5 min read"
thumbnail: "./preview-card.png"
tags: "Rails"
---

**Step 1:** add `Rails.application.config.assets.precompile += %w( modules/my_css_module.css )` to `config/initializers/assets.rb`You can add additional files separated by a space

**Step 2:** add ` <%= stylesheet_link_tag "modules/my_css_module.css" %>` anywhere in the layout file or partial that is included in a layout file. Make sure that the file is also not present in `application.css` duplicate calls to assets will cause an error.

**Step 3:** Restart the server
