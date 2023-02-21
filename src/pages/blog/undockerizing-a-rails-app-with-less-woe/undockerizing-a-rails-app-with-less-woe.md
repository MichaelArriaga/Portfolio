---
slug: "/blog/undockerizing-a-rails-app-with-less-woe"
path: "/blog/undockerizing-a-rails-app-with-less-woe"
date: "2023-02-05"
title: "From Whales to Woe: Undockerizing a Rails App."
description: "Re-thinking the value of Dockerizing as a Solo Dev"
blurb: "Re-thinking the value of Dockerizing as a Solo Dev"
thumbnail: "./preview-card.png"
readtime: "45 min read"
tags: "Docker, Rails"
---

Last summer, I decided to [undockerize one of my side
projects](https://twitter.com/mike_ray_ux/status/1543235092494970880). The
motivation behind it was to prevent a persistent **docker system crash caused by
a memory leak** inside my `webpacker` service that required a full restart of my
machine each time the docker system ran out of memory.

## The Memory Leak

**By default**, docker will allow a single service's container to **use the
entirety of docker's allocated system memory** unless you specify a limit in
your `docker-compose.yml` 

This means that if you have a leaky service, **you likely won't notice until**
your app slows down to a crawl, or docker freezes entirely.

## The Lazy Solution

After an extended amount of time [code spelunking](https://youtu.be/LiyLXklIQHc)
without much luck, my first effective solution was to well....**just live with
it!**


I specified a `mem_limit` inside my `docker-compose.yml` and ran `docker stats`
in a single terminal instance to keep an eye on individual memory usages across
all currently running containers. 

When the "Webpacker Compiling...." message started to hang, a quick remedy could
be found with the `docker-compose restart webpacker` command.

The major downside of this approach was that sometimes **I wouldn't notice that
the memory limit had been reached**, making the service unresponsive and unable
to be restarted without killing the docker process entirely, but **it was better
than having to restart my entire system**, and I had more insight and control
over the issue.


## Deriving Other Possible Solutions

A containerized environment provides **benefits for teams** both in development
and deployment, but at the time, the trade-offs of having a containerized
environment at the cost of a much **slower file I/O didn't make much sense for
me as a Solo Dev** working on a solo project. 

This and adding the annoyance of the memory leak led me to three possible
solutions:

**Solution 1: Switch JavaScript Bundlers, and Dockerize it. (Requiring a Rails
Upgrade)**

As a `Rails 5.2` app, the official javascript bundler for this version of Rails
was the webpacker gem. So in order to leverage something like `esbuild` or
`vite_ruby`, I'd have to upgrade Rails to `~6.0.1`.

At the time, `esbuild` still lacked true support for [Hot Module Replacement
(HMR)](https://stackoverflow.com/questions/40889776/what-are-the-conceptual-differences-between-live-reloading-hot-reloading-and-h#:~:text=to%20file%20changes-,Hot%20Module%20Replacement,your%20currently%20selected%20tab%20etc.)
or "LiveReload"

**Solution 2: Endure the issue.**

Out of all the options, **this one was the least exciting,** but it required the
least amount of effort. Watching for high memory usage while developing created
an additional level of cognitive overhead. 

**Solution 3: Preserve existing Docker configuration, but run my App locally for
now**

This was the happy middle ground to options 1 and 2. I could keep my existing
Docker configuration and run my app locally at the same time.

I might be putting off fixing the memory leak, but at least for now, or until a
wider solution becomes available, I can avoid the issue altogether.

Luckily the memory leak did not happen while running Webpacker locally 🤞

## Repeatable Steps for Undockerizing

Unplugging Docker from our Rails app can be broken down into **three main
steps**:

1. Identify **docker-specific configuration values** in our `docker-compose.yml`
   such as environment variables
1. Find those values in our Rails App code and **restore them to their
   pre-docker defaults**.
1. Ensure our **local environment** is properly configured to run our App
   locally.

Each of these steps **can be repeated for each service**.

It's also important to note that by **undockerizing**, we're not actually make
any changes our existing `Dockerfile` or `docker-compose.yml` so if we ever want
to bring on more team members or delegate development to a contractor, **Running
our app in an Docker environment would just be a matter of running our
building/running our Docker environment as before**.

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

## 2. Running our App Locally

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

Now we can run `rails db:create`

Migrate the database by running `rails db:migrate`


