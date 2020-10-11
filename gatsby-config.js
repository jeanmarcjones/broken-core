/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Broken Core Collective`,
    description: 'Info on artists, events, releases and more.',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-css-modules-typings',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-soundcloud',
            options: {
              width: '100%',
              height: 400,
              // eslint-disable-next-line @typescript-eslint/camelcase
              auto_play: false,
            },
          },
        ],
      },
    },
  ],
}
