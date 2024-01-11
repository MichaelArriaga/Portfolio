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
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-code-buttons`,
            options: {
              // Optional button container class name. Defaults
              // to 'gatsby-code-button-container'.
              buttonContainerClass: ``,
              // Optional button class name. Defaults to 'gatsby-code-button'.
              buttonClass: `absolute border text-sm md:text-base px-2 md:px-4 py-1 rounded bg-gray-800 text-white flex justify-center items-center`,
              // Optional button text. Defaults to ''.
              buttonText: `Copy`,
              // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
              svgIconClass: `hidden`,
              // Optional svg icon. Defaults to svg string and can be
              // replaced with any other valid svg. Use custom classes
              // in the svg string and skip `iconClass` option.
              svgIcon: ``,
              // Optional tooltip text. Defaults to ''.
              tooltipText: ``,
              // Optional toaster class name. Defaults to ''.
              toasterClass: `customToasterClass`,
              // Optional toaster text class name. Defaults to ''.
              toasterTextClass: `customToasterTextClass`,
              // Optional toaster text. Defaults to ''.
              toasterText: "Copied to clipboard",
              // Optional toaster duration. Defaults to 3500.
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
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                //"heading[depth=1]": "title",
                //"heading[depth=2]":
                //"font-bold text-2xl md:text-4xl underline mt-4 mb-2",
                //paragraph: "text-lg md:text-lg md:text-2xl mb-6 antialiased",
                //strong: "font-bold",
                //link: "font-bold text-blue-700 underline antialiased",
                //code: "text-lg md:text-xl font-normal px-1 bg-green-300 border border-gray-900 rounded",
                //"list[ordered=false]": "text-2xl list-disc pl-8 mb-6",
                //"list[ordered=true]": "text-2xl list-decimal pl-8 mb-6",
              },
            },
          },
        ],
      },
    },
  ],
};
