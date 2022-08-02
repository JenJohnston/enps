require("dotenv").config("./.env");

const sanityConfig = require("./sanity-config");

module.exports = {
  siteMetadata: {
    title: `Edmonton Native Plant Society`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `this is the website for the Edmonton Native Plant society`,
    author: `https://jennifer-johnston.netlify.app/`,
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      }
    }, 
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};