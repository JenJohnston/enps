require("dotenv").config("./.env");

const sanityConfig = require("./sanity-config");
const siteUrl = process.env.URL || "https://www.edmontonnativeplantsociety.ca/"

module.exports = {
  siteMetadata: {
    title: `Edmonton Native Plant Society`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Home page for Edmonton’s Native Plant Society keeping you up to date with news, events, native plants and growing tips for our local gardening community.`,
    author: `https://jennifer-johnston.netlify.app/`,
    keywords: `Edmonton, Edmonton Plants, Native Plants, Plant Society, Wild Geranium, Wildflower, Wildflower News, Plants in Edmonton, Volunteer in Edmonton `
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      }
    }, 
    "gatsby-plugin-sass", 
    `gatsby-plugin-glslify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-gitinfo`,
    "gatsby-plugin-image", 
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
      }
    },
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
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                name
              }
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages},
          allFile: { edges: pageFiles }
        }) => {
          return allPages.map(page => {
            const pageFile = pageFiles.find(({ node }) => {
              const fileName = node.name === 'index' ? '/' : `/${node.name}/`
              return page.path === fileName
            })

            return {...page, ...pageFile?.node?.fields}
          })
        },
        serialize: ({ path, gitLogLatestDate }) => {
          return {
            url: path,
            lastmod: gitLogLatestDate,
          }
        },
        createLinkInHead: true,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://www.edmontonnativeplantsociety.ca/`,
        sitemap: `https://www.edmontonnativeplantsociety.ca/sitemap/sitemap-0.xml`,
        policy: [{userAgent: '*', allow: '/'}],

      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'categories',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityCategory {
            nodes {
              id
              title
              slug {
                current
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'slug' ],
        normalizer: ({data}) => 
          data.allSanityCategory.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              slug: node.slug,
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'blogs',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityBlog {
            nodes {
              id
              title
              publishedOn
              slug {
                current
              }
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedOn', 'slug', 'coverImage'],
        normalizer: ({data}) => 
          data.allSanityBlog.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              publishedOn: node.publishedOn,
              slug: node.slug,
              coverImage: node.coverImage
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'volunteer',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityVolunteer {
            nodes {
              id
              title
              slug {
                current
              }
              projectLeader
              contactEmail
              contactPhone
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'projectLeader', 'slug', 'coverImage', 'contactEmail', 'contactPhone'],
        normalizer: ({data}) => 
          data.allSanityVolunteer.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              slug: node.slug,
              coverImage: node.coverImage,
              email: node.contactEmail,
              phone: node.contactPhone,
              contact: node.projectLeader
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'events',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityEvent {
            nodes {
              id
              title
              slug {
                current
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'slug'],
        normalizer: ({data}) => 
          data.allSanityEvent.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              slug: node.slug,
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'news',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityWildflowerNews {
            nodes {
              id
              title
              publishedOn
              previewImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
              wildflowerpdf {
                asset {
                  url
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'title', 'publishedOn', 'wildflowerpdf', 'previewImage'],
        normalizer: ({data}) => 
          data.allSanityWildflowerNews.nodes.map((node) => (
            {
              id: node.id,
              title: node.title,
              publishedOn: node.publishedOn,
              wildflowerpdf: node.wildflowerpdf,
              previewImage: node.previewImage
            }
          ))
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'wfindex',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allSanityWfIndex(filter: { indexID: {eq: "pi"} }) {
            nodes {
              id
              commonName
              botanicalName
              indexID
              slug {
                current
              }
              wildflowerImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
        }
        `,
        ref: 'id',
        index: ['commonName'],
        store: ['id', 'commonName', 'botanicalName', 'slug', 'wildflowerImage', 'indexID'],
        normalizer: ({data}) => 
          data.allSanityWfIndex.nodes.map((node) => (
            {
              id: node.id,
              commonName: node.commonName,
              botanicalName: node.botanicalName,
              slug: node.slug,
              wildflowerImage: node.wildflowerImage,
              indexID: node.indexID
            }
          ))
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-DBX9WQJEG4", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },

  ]
};