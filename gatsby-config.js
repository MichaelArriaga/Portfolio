module.exports = {
  // pathPrefix: "michaelarriaga.github.io/michael-arriaga-portfolio",
  siteMetadata: {
    defaultTitle: "Mike Ray Blog",
    defaultImage: "./static/etc/images/default-image.png",
    titleTemplate: "",
    title: "Mike Ray",
    siteUrl: "https://mike-ray.netlify.app",
    url: "https://mike-ray.netlify.app",
    defaultDescription: "Product Engineer and Rails Enthusiast",
    description: "Product Engineer and Rails Enthusiast",
    image: "",
    twitterUsername: "@mike_ray_ux",
  },
  plugins: [
    // config step for tailwindcss installation
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-transformer-sharp`,
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "title",
                "heading[depth=2]":
                  "font-bold text-2xl sm:text-4xl underline mt-4 mb-2",
                paragraph: "text-lg sm:text-lg sm:text-2xl mb-6 antialiased",
                strong: "font-bold",
                link: "font-bold text-blue-700 underline antialiased",
                code: "text-lg sm:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded",
                "list[ordered=false]": "text-2xl list-disc pl-8 mb-6",
                "list[ordered=true]": "text-2xl list-decimal pl-8 mb-6",
              },
            },
          },
        ],
      },
    },
  ],
};
