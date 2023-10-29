const config = {
  webfontsOptions: {
    fonts: {
      google: [{ family: "Baumans" }, { family: "Coda" }],
    },
  },
  gatsbySourceWordPressOptions: {
    //Write here your other gatsby-source-wordpress options https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/plugin-options.md
    timeout: 3600,
    options: {
      schema: {
        timeout : 100,
        perPage: 1000,
      },
    },
  },
}

module.exports = config
