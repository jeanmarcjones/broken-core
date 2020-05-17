/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Broken Core`,
    description: 'Info on artists, events, releases and more.'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-typescript-css-modules'
  ],
}
