---
slug: '/blog/how-to-hot-reload-development-envrionment-in-rails-6-with-webpacker'
path: '/blog/how-to-hot-reload-development-envrionment-in-rails-6-with-webpacker'
date: '2020-03-08'
title: 'How to: Setting Up Hot-Reload Development Environment in Rails 6 Using Webpacker'
readtime: '15 min read'
tags: 'Rails, Webpacker'
---

If you're using React or another front-end javascript library in your Rails project, you're likely using Webpacker, but hot reload may not always work as expected or sometimes not at all with it's default configuration, so here is some step-by-step configuration:

1. Setup [Webpacker](https://github.com/rails/webpacker) with it's default configuration
2. make `config/webpack/development.js` look like this:

```javascript
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

// hot reloads of .html.erb and .css of non webpack stuff
const chokidar = require('chokidar');
environment.config.devServer.before = (app, server) => {
  chokidar
    .watch([
      'config/locales/*.yml',
      'app/views/**/*.html.erb',
      'app/assets/**/*.css',
    ])
    .on('change', () => server.sockWrite(server.sockets, 'content-changed'));
};

module.exports = environment.toWebpackConfig();
```

3. include `<%= javascript_pack_tag 'application' %>` in any layouts that you want livereload to work
