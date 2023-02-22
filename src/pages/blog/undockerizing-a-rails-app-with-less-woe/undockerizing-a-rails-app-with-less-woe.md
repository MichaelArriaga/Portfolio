---
slug: "/blog/undockerizing-a-rails-app-with-less-woe"
path: "/blog/undockerizing-a-rails-app-with-less-woe"
date: "2023-02-20"
title: "From Whales to Woe: Undockerizing a Rails App."
description: "Re-thinking the value of Dockerizing as a Solo Dev"
blurb: "Re-thinking the value of Dockerizing as a Solo Dev"
thumbnail: "./preview-card.png"
readtime: "30 min read"
tags: "Docker, Rails"
---

![alt](preview-card.png)

Last summer, I decided to [undockerize one of my side
projects](https://twitter.com/mike_ray_ux/status/1543235092494970880).

The motivation was to prevent **persistent docker crashes caused by a memory
leak** in my `webpacker` service, which required frequent full restarts of my
machine during development.

## The Memory Leak

**By Default,** Docker allows a single service's container to use all of the 
system's memory, unless a limit is set in the `docker-compose.yml` file. Without
a per-service `mem_limit`, you **may not realize there's a problem** until your 
app slows down or docker freezes completely.

Even with a specific limit, sometimes the Docker process needs a restart when a
single service runs out of memory, though this particular behavior has
significantly improved over time. 

## The Lazy Solution

After spending a considerable amount of time [code
spelunking](https://youtu.be/LiyLXklIQHc) without much success, my initial
solution was to simply tolerate the issue and **Just...well, live with it!**

I set a `mem_limit` in `docker-compose.yml` and monitored memory usage of all
running containers using docker stats in a single terminal. When the
**"Webpacker Compiling...."** message started to hang, running `docker-compose
restart webpacker` was the quick remedy.


However, sometimes I **didn't notice** when the memory limit was reached,
**making the service unresponsive** which required killing the docker process
entirely. Despite this, it was still an improvement over having
to restart my whole system, and **I gained greater insight and control** of the
problem.

## Deriving Other Solutions

For teams, A containerized environment **provides benefits both in
development and deployment** at the cost of a slower file I/O. 

**It's a pretty good deal**, but as a Solo Dev, **these benefits didn't make much
sense for me** over developing locally. The additional annoyance of the
memory leak led me to **three possible solutions:**

## Option 1: Try another Bundler and Dockerize it.

As a `Rails 5.2` app, the official javascript bundler for this version of Rails
was the webpacker gem. So in order to leverage something like `esbuild` or
`vite_ruby`, I'd have to upgrade Rails to `~6.0.1`.

At the time, `esbuild` still lacked true support for [HMR
(LiveReload)](https://stackoverflow.com/questions/40889776/what-are-the-conceptual-differences-between-live-reloading-hot-reloading-and-h#:~:text=to%20file%20changes-,Hot%20Module%20Replacement,your%20currently%20selected%20tab%20etc.),
something that wepback and thus webpacker already did well.

This option had the highest potential for solving my issue with the bonus of
initializing a Rails upgrade sidequest, but also **had the highest potential for
woe.**

## Option 2: Endure the issue.

Out of all the options, **this one was the least exciting,** but it required the
least amount of effort. Watching for high memory usage while developing created
an additional level of cognitive overhead. 

## Option 3: Preserve existing Docker configuration and run my App locally for now.

This was **the happy middle ground** to options **1** and **2**. I could keep my
existing Docker configuration and run my app locally at the same time.

I might be putting off fixing the memory leak, but at least for now, or until a
wider solution becomes available, **I can avoid the issue**.

Thankfully the memory leak didn't exist locally.

## Repeatable Steps for Undockerizing

By undockerizing, we won't be making any changes to the existing `Dockerfile` or
`docker-compose.yml`, ensuring that any existing Docker configuration is
preserved.

Undockerizing my Rails app broke down into **three main steps**:

1. Identifying **docker-specific configuration values** in `docker-compose.yml`
   such as environment variables.
1. Finding those values in Rails App code and **providing them as defaults**
   when fetching their ENV vars.
1. Configuring my **local environment** to run my App locally.

******NOTE***** These steps can be repeated for additional services.

# 1.0 Double Checking Environment Variables

The `app` service that lives inside our `docker-compose.yml` has several
environment variables who's corresponding `ENV.fetch('VARIABLE')` call live
somewhere in our Rails App code. 


```yml
#docker-compose.yml

version: '3'
services:
  app:
    ...
    environment:
      - POSTGRES_HOST=db
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    ...
```

Those environment variables are: `POSTGRES_HOST` `POSTGRES_USER` `POSTGRES_PASSWORD`

We can find these three in our `config/database.yml`

```yml
#config/database.yml
.
.
.
default: &default
  .
  .
  host: <%= ENV['POSTGRES_HOST'] %>
  username: <%= ENV['POSTGRES_USER'] %>
  password: <%= ENV['POSTGRES_PASSWORD'] %>
  .
  .
.
.
.
```

We can change how we fetch ENV variables and **specify a default value** to be
used when we run our app locally. Let's take the ENV vars for our app service in
our `docker-compose.yml` for our postgres database. 

**The keys are:**

- `POSTGRES_HOST=db`
- `POSTGRES_USER=postgres`
- `POSTGRES_PASSWORD=password`

Let's take those values, and add them as a defualt value in our `database.yml`.

```yml
#config/database.yml
.
.
.
default: &default
  .
  .
  host: <%= ENV.fetch('POSTGRES_HOST', 'localhost') %>
  username: <%= ENV.fetch('POSTGRES_USER', 'postgres') %>
  password: <%= ENV.fetch('POSTGRES_PASSWORD', 'password') %>
  .
  .
```

## 2. Running My App Locally

Now that we have defined some default values for our database service, we can
ensure that when we run `rails s` locally, those default values will be used
in place of the ENV vars from our `docker-compose.yml`

But before we can run `rails s`, we need to install our project gems and in
order to do that, we need to set our local `ruby` and `bundler` versions.

## 3. Setting the local Ruby Version


First we need to check our Ruby versioni in our `Gemfile` and ensure that the
specifiec Ruby version is set locally for our project.

```gemfile
# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '~> 2.6.1'
...
```

Now let's set the local `ruby` version using `rbenv` or your favorite ruby
version manager.

```bash
rbenv local 2.6.1

rbenv install 2.6.1

rbenv local 2.6.1
```

## 4. Installing Gems

Lets install our gems with `bundle install`.


```bash
error: "You must use Bundler 2 or greater with this lockfile."

check bundler version with `gem list bundler`

error: To update to the latest version installed on your system, 
run `bundle update --bundler`.
````

Checking our local bundler version, we can see our `bundler` is out of date by
running `gem list bundler`

```bash
*** LOCAL GEMS ***

bundler (default: 1.17.2)
```

Lets update `bundler` it by running `bundle update --bundler`


Finally we should be able to run `bundle install` successfully

## 4. Running Rails Server

After running `rails s` we see that the server intializes but there's no database yet...
```bash
ActiveRecord::NoDatabaseError (connection to server at "localhost" (::1), port 5432 failed: FATAL:  role "postgres" does not exist):
```

run `rails db:create`

```bash
connection to server at "localhost" (::1), port 5432 failed: FATAL:  role
"postgres" does not exist Couldn't create 'app_development' database. Please
check your configuration. rails aborted! ActiveRecord::NoDatabaseError:
connection to server at "localhost" (::1), port 5432 failed: FATAL:  role
"postgres" does not exist

Caused by: PG::ConnectionBad: connection to server at "localhost" (::1), port
5432 failed: FATAL:  role "postgres" does not exist
```

Solution: We want to ensure that postgresql is installed and configure a user called `postgres`

1. Check if postgres is installed with `brew info postgresql`
 if not installed: install `brew install postgresql` I'm using brew but you can use your method of choice
2. Create new postgres user with `createuser -s postgres`
3. Restart postgres services with `brew services restart postgresql`

Now we can run `rails db:create` and migrate the database by running `rails
db:migrate`
