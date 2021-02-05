/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Adam Knee's Website`,
    siteUrl: `https://adamknee.net/`,
    description: `The web development portfolio of Adam Knee.`,
    twitter: `@AdamAnSubtractM`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
};
