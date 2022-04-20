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
            resolve: "gatsby-remark-code-buttons",
            options: {
              tooltipText: `Copy to clipboard`,
              toasterText: "Copied to clipboard",
              toasterDuration: 5000,
            },
          },
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
        ],
      },
    },
  ],
};
