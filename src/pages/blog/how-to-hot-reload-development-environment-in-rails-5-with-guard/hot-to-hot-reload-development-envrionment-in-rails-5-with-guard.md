---
slug: '/blog/how-to-hot-reload-development-envrionment-in-rails-5-with-guard'
path: '/blog/how-to-hot-reload-development-envrionment-in-rails-5-with-guard'
date: '2020-01-26'
title: 'How to: Setting Up Hot-Reload Development Environment in Rails 5 Using Guard'
readtime: '15 min read'
tags: 'Rails'
---

Developing Web Apps with Rails is fun, but having to refresh the browser every time we make a change to our html or markup can be a pain. Luckily the [guard-livereload gem](https://github.com/guard/guard-livereload) exists and the configuration is quite straightforward, so if you're running Rails versions `5.4` to `6.0.0.1`, this guide is for you.

1. Add gems to development

   ```ruby
   group :development do
     gem 'guard-livereload', '~> 2.5', require: false
     gem "rack-livereload"
   end
   ```

2. `bundle install`

3. Tell Guard to setup your guard file for livereload `guard init livereload`

4. Then add the middleware to the bottom of your Rails middleware stack by editing your `config/environments/development.rb`.

   ```ruby
   MyApp::Application.configure do
     # Add Rack::LiveReload to the bottom of the middleware stack with the default options:
     config.middleware.insert_after ActionDispatch::Static, Rack::LiveReload

     # or, if you're using better_errors:
     # config.middleware.insert_before Rack::Lock, Rack::LiveReload

     # ...
   end
   ```

5. Run livereload from terminal `bundle exec guard -P livereload`

6. Now while running, every time guard detects a file change, rails will automatically refresh the browser so you can see your changes on every save.
