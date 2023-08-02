require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: "Polyzentrik",
    description: "Digital sustainability solutions",
    siteUrl: "https://www.polyzentrik.com",
    image: "/logo-banner.png"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer nofollow`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
              quality: 90,
              withWebp: true,
              backgroundColor: `none`,
              linkImagesToOriginal: false,
              showCaptions: [`title`, `alt`],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: { "icon": "src/images/graphics/icon.png" }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "images", "path": "./src/images/" }, __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { "name": "pages", "path": "./src/pages/" }, __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: `services`, path: `${__dirname}/services`, }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: `blog`, path: `${__dirname}/blog`, }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`, options: {},
          },
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-GB'
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Unbounded",
              variants: ["900"],
              strategy: 'selfHosted',
            },
          ],
        },
        formats: ['woff2'],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal-with-new-react`,
      options: {
        threshold: 0.001, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.polyzentrik.com',
        sitemap: 'https://www.polyzentrik.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
};