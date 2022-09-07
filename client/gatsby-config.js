require("dotenv").config("./.env");

const sanityConfig = require("./sanity-config");
const siteUrl = process.env.URL

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
    `gatsby-plugin-glslify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-gitinfo`,
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
    
    

  ]
};