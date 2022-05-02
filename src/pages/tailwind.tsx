import React from "react";
//import "../components/layout.css";
//import ProjectItem from "../components/index/ProjectItem";
//import LatestPostsLists from "../components/index/LatestPostsList";
//import SidebarLayout from "../components/layouts/SidebarLayout";
//import { Link } from "gatsby";
//import { metaTitle } from "../constants/metaTitle";
//import SEO from "../components/general/SEO";
import HeroHeader from "../components/general/HeroHeader";

const TailwindPlayground = () => {
  return (
    <div className="">
      <div className="max-w-4xl pt-12 py-2 px-4 mx-auto">
        <HeroHeader highlighted="posts" />
        <div className="">
          <h1 className="text-3xl sm:text-5xl text-left leading-none mb-1 font-black antialiased">
            Simple Rails CI/CD Pipeline with Github Actions
          </h1>
          <h2 className="text-base text-left mb-2 font-normal antialiased">
            April 24, 2022 /{" "}
            <span className="font-bold antialiased">30 min read</span>
          </h2>
          <div>
            <a
              className="inline-block outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2"
              href="/blog?tag=rails"
              style={{ backgroundColor: "rgb(118, 211, 202)" }}
            >
              <h3 className="text-sm text-gray-900 font-semibold antialiased">
                Rails
              </h3>
            </a>
            <a
              className="inline-block outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2"
              href="/blog?tag=webpacker"
              style={{ backgroundColor: "rgb(118, 211, 202)" }}
            >
              <h3 className="text-sm text-gray-900 font-semibold antialiased">
                Webpacker
              </h3>
            </a>
            <a
              className="inline-block outline-none focus:outline-none px-3 py-1 rounded mr-2 mb-2"
              href="/blog?tag=ci/cd"
              style={{ backgroundColor: "rgb(118, 211, 202)" }}
            >
              <h3 className="text-sm text-gray-900 font-semibold antialiased">
                CI/CD
              </h3>
            </a>
          </div>
          <hr className="h-px border-t border-gray-200 my-2"></hr>
          <div className="">
            <p className="text-lg sm:text-lg sm:text-2xl mb-6 antialiased">
              Believe it or not, assembling a{" "}
              <strong className="font-bold">
                CI/CD (Continuous Integration / Continuous Delivery)
                system/pipeline
              </strong>{" "}
              is a straightforward task conceptually. At a high level, a CI/CD
              system is just a service that we configure to run some amount of
              tasks whenever{" "}
              <a
                className="font-bold text-blue-700 underline antialiased"
                href="https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on"
              >
                an incoming change is scheduled for our code repo.
              </a>
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              <strong className="font-bold">CI/CD</strong> systems are
              incredibly useful for validating a commit or pull request that we
              might receive. As Rails Developers, we probably want to:{" "}
              <strong className="font-bold">run our test suite</strong>, maybe
              some <strong className="font-bold">security auditing</strong> or{" "}
              <strong className="font-bold">code linting</strong> as part of our
              CI/CD pipeline.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              We will use the CI/CD service{" "}
              <strong className="font-bold">
                <a
                  className="font-bold text-blue-700 underline antialiased"
                  href="https://github.com/features/actions"
                >
                  Github Actions
                </a>
              </strong>{" "}
              to accomplish this. Github Actions is a CI/CD service that is
              already integrated with our github project's repository. With it
              we can perform all of our seperate CI/CD jobs automatically.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              A good place to start for us would be to create a{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                test
              </code>{" "}
              job that will run every time we:
            </p>
            <ul className="text-2xl list-disc pl-8 mb-6">
              <li>
                <p className="text-lg sm:text-2xl mb-6 antialiased">
                  <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                    push
                  </code>{" "}
                  to one of our branches (in our case{" "}
                  <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                    main
                  </code>
                  )
                </p>
              </li>
              <li>
                <p className="text-lg sm:text-2xl mb-6 antialiased">
                  receive a{" "}
                  <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                    pull_request
                  </code>{" "}
                  from a contributor
                </p>
              </li>
            </ul>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              But how do we get started? Well, you know that button at the top
              of your project repositories that says "Actions"?
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased"></p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              <strong>Yea that one! Click it and do some exploring!</strong>
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              After some tinkering, you'll probably have learned that in order
              to get started with GitHub Actions, we must first create a{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                workflow
              </code>{" "}
              file. So let's do that now.
            </p>
            <h2 className="font-bold text-2xl sm:text-4xl underline mt-4 mb-2">
              Setting up the workflow file
            </h2>
            <hr></hr>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              For simplicity's sake (and to honor the 'Simple' in the title of
              this post) we are going to set up just one{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                job
              </code>{" "}
              for our Rails App and we will call it{" "}
              <code className="px-1 text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                test
              </code>{" "}
              which will spin up an instance of our Rails app inside a container
              in order to run our test suite.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              In order to create a CI/CD pipeline with GitHub Actions, Github
              first expects a
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                .yml
              </code>{" "}
              file to exist at{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                .github/workflows/
              </code>{" "}
              directory at the root of our project/repository.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Let's create the file now:
            </p>
            <div className="highlight " data-language="bash">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-bash">
                  <span className="token function">touch</span>{" "}
                  .github/workflows/rubyonrails.yml
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Before we add any configuration to our file, we need to give it a
              top level key of{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                name:
              </code>{" "}
              in our case we'll call it "CI"
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>. . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Next we need to specify another top level key called{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                on:
              </code>{" "}
              which will tell github actions at which events we want to trigger
              our ci/cd jobs to run.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              We want our jobs to run every time we{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                push
              </code>{" "}
              to our{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                main
              </code>{" "}
              branch as well as when we receive a{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                pull_request
              </code>
              . So let's add them.
            </p>
            <div className="break-all" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2 break-all">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>
                  <span className="token key atrule">on</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">push</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">pull_request</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>. . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              we can specify our jobs with our third and final top level key
              called (you guessed it){" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                jobs:
              </code>{" "}
              let's start with our first job called{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                test
              </code>
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>
                  <span className="token key atrule">on</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">push</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">pull_request</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">jobs</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">test</span>
                  <span className="token punctuation">:</span>. . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              The{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                runs-on:
              </code>{" "}
              key allows us to specify an existing pre-configured container or
              <a
                className="font-bold text-blue-700 underline antialiased"
                href="https://github.com/actions/virtual-environments"
              >
                virtual environment provided to us by github
              </a>{" "}
              that we can use to build our rails app as part of our CI process
              so we can run our test suite.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Here we are going to specify{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                ubuntu-latest
              </code>
              .
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>
                  <span className="token key atrule">on</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">push</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">pull_request</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">jobs</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">test</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">runs-on</span>
                  <span className="token punctuation">:</span> ubuntu
                  <span className="token punctuation">-</span>latest . . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Next is the{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                services:
              </code>{" "}
              key. Our Rails app uses{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                postgres
              </code>{" "}
              for it's database. Let's add it.
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>
                  <span className="token key atrule">on</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">push</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">pull_request</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">jobs</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">test</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">runs-on</span>
                  <span className="token punctuation">:</span> ubuntu
                  <span className="token punctuation">-</span>latest
                  <span className="token key atrule">services</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">postgres</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">image</span>
                  <span className="token punctuation">:</span> postgres
                  <span className="token punctuation">:</span>11
                  <span className="token punctuation">-</span>alpine
                  <span className="token key atrule">ports</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token string">"5432:5432"</span>
                  <span className="token key atrule">env</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">POSTGRES_DB</span>
                  <span className="token punctuation">:</span> rails_test
                  <span className="token key atrule">POSTGRES_USER</span>
                  <span className="token punctuation">:</span> rails
                  <span className="token key atrule">POSTGRES_PASSWORD</span>
                  <span className="token punctuation">:</span> password . . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Our{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                postgres
              </code>{" "}
              service has 3 seperate nested properties called{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                image
              </code>
              ,{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                ports
              </code>
              , and{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                env
              </code>
              Our image specifies an existing image provided to us by github
              actions.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              The remaining properties{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                ports
              </code>{" "}
              and{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                env
              </code>{" "}
              contain some default boilerplate settings:{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                5432:5432
              </code>{" "}
              as the default port and
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                POSTGRES_DB
              </code>
              ,
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                POSTGRES_USER
              </code>
              ,
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                POSTGRES_PASSWORD
              </code>{" "}
              as our default configuration for the postgres service itself.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              <strong>Quick Note:</strong> If you're familiar with{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                Docker
              </code>{" "}
              and creating services with{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                docker-compose
              </code>
              , you'll find the way{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                jobs
              </code>{" "}
              are composed familiar.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Next, we want to specify a couple envrionment variables for the
              instance of our Rails app that will be running inside our{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                test
              </code>{" "}
              service.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                RAILS_ENV: test
              </code>
              : for the environment mode we want our Rails app to be running in.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                DATABASE_URL:
                "postgres://rails:password@localhost:5432/rails_test"
              </code>
              : is a default url for Rails to connect to postgress inside our
              environment.
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>
                  <span className="token key atrule">on</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">push</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">pull_request</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">jobs</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">test</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">runs-on</span>
                  <span className="token punctuation">:</span> ubuntu
                  <span className="token punctuation">-</span>latest
                  <span className="token key atrule">services</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">postgres</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">image</span>
                  <span className="token punctuation">:</span> postgres
                  <span className="token punctuation">:</span>11
                  <span className="token punctuation">-</span>alpine
                  <span className="token key atrule">ports</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token string">"5432:5432"</span>
                  <span className="token key atrule">env</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">POSTGRES_DB</span>
                  <span className="token punctuation">:</span> rails_test
                  <span className="token key atrule">POSTGRES_USER</span>
                  <span className="token punctuation">:</span> rails
                  <span className="token key atrule">POSTGRES_PASSWORD</span>
                  <span className="token punctuation">:</span> password
                  <span className="token key atrule">env</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">RAILS_ENV</span>
                  <span className="token punctuation">:</span> test
                  <span className="token key atrule">DATABASE_URL</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">
                    "postgres://rails:password@localhost:5432/rails_test"
                  </span>
                  . . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              And finally, we can get to the meat and potatoes of building and
              configuring our test job, the{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                steps:
              </code>{" "}
              key.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              The{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                steps:
              </code>{" "}
              key allows us to specify a number of steps in order to spin up our
              Rails app and run our test suite.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              My App is using Rails6 and uses{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                webpacker
              </code>{" "}
              to compile a little bit of React code, so my steps look like this:
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token key atrule">steps</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Checkout code
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span>{" "}
                  actions/checkout@v3
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Install Ruby and
                  gems
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span> ruby/setup
                  <span className="token punctuation">-</span>
                  ruby@8f312efe1262fb463d906e9bf040319394c18d3e{" "}
                  <span className="token comment"># v1.92</span>
                  <span className="token key atrule">with</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">bundler-cache</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token boolean important">true</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Set up database
                  schema
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bin/rails db
                  <span className="token punctuation">:</span>schema
                  <span className="token punctuation">:</span>load
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Install yarn
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">|</span>
                  <span className="token scalar string">
                    sudo apt-get install yarn
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Add webpacker
                  before yarn install{" "}
                  <span className="token comment">
                    # solves node-sass error
                  </span>
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">|</span>
                  <span className="token scalar string">
                    yarn add @rails/webpacker
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> yarn install{" "}
                  <span className="token punctuation">-</span>
                  <span className="token punctuation">-</span>check
                  <span className="token punctuation">-</span>files{" "}
                  <span className="token comment">
                    # --check-files ensures @rails/webpacker dependencies aren't
                    overwritten
                  </span>
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">|</span>
                  <span className="token scalar string">
                    sudo yarn install --check-files
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Compile Webpacker
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec rails
                  webpacker<span className="token punctuation">:</span>compile
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Run RSpec tests
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec rspec
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Your mileage may vary on this step. If you're app doesn't use
              webpacker, feel free to remove those individual steps. Now let's
              add them to our workflow file:
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2">
                <code className="language-yml">
                  <span className="token comment">
                    # .github/workflows/rubyonrails.yml
                  </span>
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">"CI"</span>
                  <span className="token key atrule">on</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">push</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">pull_request</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">branches</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">[</span>main
                  <span className="token punctuation">]</span>
                  <span className="token key atrule">jobs</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">test</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">runs-on</span>
                  <span className="token punctuation">:</span> ubuntu
                  <span className="token punctuation">-</span>latest
                  <span className="token key atrule">services</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">postgres</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">image</span>
                  <span className="token punctuation">:</span> postgres
                  <span className="token punctuation">:</span>11
                  <span className="token punctuation">-</span>alpine
                  <span className="token key atrule">ports</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token string">"5432:5432"</span>
                  <span className="token key atrule">env</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">POSTGRES_DB</span>
                  <span className="token punctuation">:</span> rails_test
                  <span className="token key atrule">POSTGRES_USER</span>
                  <span className="token punctuation">:</span> rails
                  <span className="token key atrule">POSTGRES_PASSWORD</span>
                  <span className="token punctuation">:</span> password
                  <span className="token key atrule">env</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">RAILS_ENV</span>
                  <span className="token punctuation">:</span> test
                  <span className="token key atrule">DATABASE_URL</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">
                    "postgres://rails:password@localhost:5432/rails_test"
                  </span>
                  <span className="token key atrule">steps</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Checkout code
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span>{" "}
                  actions/checkout@v3
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Install Ruby and
                  gems
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span> ruby/setup
                  <span className="token punctuation">-</span>
                  ruby@8f312efe1262fb463d906e9bf040319394c18d3e{" "}
                  <span className="token comment"># v1.92</span>
                  <span className="token key atrule">with</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">bundler-cache</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token boolean important">true</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Set up database
                  schema
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bin/rails db
                  <span className="token punctuation">:</span>schema
                  <span className="token punctuation">:</span>load
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Install yarn
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">|</span>
                  <span className="token scalar string">
                    sudo apt-get install yarn
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Add webpacker
                  before yarn install{" "}
                  <span className="token comment">
                    # solves node-sass error
                  </span>
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">|</span>
                  <span className="token scalar string">
                    yarn add @rails/webpacker
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> yarn install{" "}
                  <span className="token punctuation">-</span>
                  <span className="token punctuation">-</span>check
                  <span className="token punctuation">-</span>files{" "}
                  <span className="token comment">
                    # --check-files ensures @rails/webpacker dependencies aren't
                    overwritten
                  </span>
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token punctuation">|</span>
                  <span className="token scalar string">
                    sudo yarn install --check-files
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Compile Webpacker
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec rails
                  webpacker<span className="token punctuation">:</span>compile
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Run RSpec tests
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec rspec
                  . . .
                </code>
              </pre>
            </div>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Now, once we push this file up to our github repository, github
              actions will begin automatically.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Assuming that our test suite passes in development on our machine,
              and that our{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                steps
              </code>{" "}
              are properly configured for our particular Rails app (again, your
              mileage may vary), we should see a green checkmark next to our{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                test
              </code>{" "}
              job signifiying that our CI completed successfully!
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased"></p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              <strong>Note:</strong> We can view the jobs by visiting the{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                Actions
              </code>{" "}
              tab of our repository on github.com{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                github.com/username/project_name/actions
              </code>
            </p>
            <h2 className="font-bold text-2xl sm:text-4xl underline mt-4 mb-2">
              Homework (Add more jobs)
            </h2>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Here's a great opportunity to expand your knowledge of CI/CD and
              add your own custom jobs to your{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                rubyonrails.yml
              </code>{" "}
              workflow file.
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              How about a new{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                job
              </code>{" "}
              called{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                audit
              </code>{" "}
              that will check your rails project code for security
              vulnerabilities? There are a couple great gems for this btw:
            </p>
            <ul className="text-2xl list-disc pl-8 mb-6">
              <li className="">
                <a
                  className="font-bold text-blue-700 underline antialiased"
                  href="https://github.com/rubysec/bundler-audit"
                >
                  bundler-audit
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-blue-700 underline antialiased"
                  href="https://github.com/presidentbeef/brakeman"
                >
                  brakeman
                </a>
              </li>
            </ul>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              or maybe a{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                job
              </code>{" "}
              called{" "}
              <code className="text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded">
                lint
              </code>{" "}
              which will use the{" "}
              <a
                className="font-bold text-blue-700 underline antialiased"
                href="https://github.com/rubocop/rubocop"
              >
                rubocop
              </a>{" "}
              gem to lint your code?
            </p>
            <p className="text-lg sm:text-2xl mb-6 antialiased">
              Here's what those jobs might look like:
            </p>
            <div className="gatsby-highlight" data-language="yml">
              <pre className="py-3 pl-3 bg-white border rounded border-gray-900 text-xl mb-2 break-all">
                <code className="language-yml">
                  <span className="token key atrule">audit</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">runs-on</span>
                  <span className="token punctuation">:</span> ubuntu
                  <span className="token punctuation">-</span>latest
                  <span className="token key atrule">steps</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Checkout code
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span>{" "}
                  actions/checkout@v3
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Install Ruby and
                  gems
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span> ruby/setup
                  <span className="token punctuation">-</span>
                  ruby@8f312efe1262fb463d906e9bf040319394c18d3e{" "}
                  <span className="token comment"># v1.92</span>
                  <span className="token key atrule">with</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">bundler-cache</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token boolean important">true</span>
                  <span className="token comment">
                    # Add or replace any other lints here
                  </span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Security audit
                  dependencies
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec
                  bundler
                  <span className="token punctuation">-</span>audit{" "}
                  <span className="token punctuation">-</span>
                  <span className="token punctuation">-</span>update
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Security audit
                  application code
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec
                  brakeman <span className="token punctuation">-</span>q{" "}
                  <span className="token punctuation">-</span>w2
                  <span className="token key atrule">lint</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">runs-on</span>
                  <span className="token punctuation">:</span> ubuntu
                  <span className="token punctuation">-</span>latest
                  <span className="token key atrule">steps</span>
                  <span className="token punctuation">:</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Checkout code
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span>{" "}
                  actions/checkout@v3
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Install Ruby and
                  gems
                  <span className="token key atrule">uses</span>
                  <span className="token punctuation">:</span> ruby/setup
                  <span className="token punctuation">-</span>
                  ruby@8f312efe1262fb463d906e9bf040319394c18d3e{" "}
                  <span className="token comment"># v1.92</span>
                  <span className="token key atrule">with</span>
                  <span className="token punctuation">:</span>
                  <span className="token key atrule">bundler-cache</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token boolean important">true</span>
                  <span className="token punctuation">-</span>{" "}
                  <span className="token key atrule">name</span>
                  <span className="token punctuation">:</span> Lint Ruby files
                  <span className="token key atrule">run</span>
                  <span className="token punctuation">:</span> bundle exec
                  rubocop <span className="token punctuation">-</span>
                  <span className="token punctuation">-</span>parallel
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TailwindPlayground;
