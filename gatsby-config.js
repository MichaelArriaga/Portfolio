module.exports = {
  // pathPrefix: "michaelarriaga.github.io/michael-arriaga-portfolio",
  siteMetadata: {
    title: 'Mike Arriaga Portfolio',
    siteUrl: 'https://ekim.me',
  },
  plugins: [
    // config step for tailwindcss installation
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-buttons',
            options: {
              tooltipText: `Copy to clipboard`,
              toasterText: 'Copied to clipboard',
              toasterDuration: 5000,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
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
        ],
      },
    },
  ],
};
