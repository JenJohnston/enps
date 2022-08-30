exports.createPages = async ({ graphql, actions }) => {
    const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE )

    const newsTemplate = require.resolve('./src/templates/news.js')
    const blogsTemplate = require.resolve('./src/templates/blogs.js')
    const blogSingleTemplate = require.resolve('./src/templates/blogSingle.js')
    const categoriesTemplate = require.resolve('./src/templates/categories.js')
    const categorySingleTemplate = require.resolve('./src/templates/categorySingle.js')
    const eventsTemplate = require.resolve('./src/templates/events.js')
    const eventSingleTemplate = require.resolve('./src/templates/eventSingle.js')
    const volunteersTemplate = require.resolve('./src/templates/volunteer.js')
    const volunteerSingleTemplate = require.resolve('./src/templates/volunteerSingle.js')

    const { createPage } = actions
    const result = await graphql(`{
        allSanityBlog {
            nodes {
              id
              slug {
                current
              }
            }
          }
          allSanityCategory {
            nodes {
              id
              slug {
                current
              }
            }
          }
          allSanityEvent {
            nodes {
              id
              slug {
                current
              }
            }
          }
          allSanityWildflowerNews {
            nodes {
              id
            }
          }
          allSanityVolunteer {
            nodes {
              id
              slug {
                current
              }
            }
          }
        }
    `)

    if (result.errors) throw result.errors

    const news = result.data.allSanityWildflowerNews.nodes

    // news home page

    const totalNewsPages = Math.ceil(news.length / postsPerPage )
    Array.from({ length: totalNewsPages }).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/news' : `/news/${index + 1}`,
            component: newsTemplate,
            context: {
                limit: postsPerPage,
                offset: index * postsPerPage,
                numberOfPages: totalNewsPages,
                currentPage: index + 1,
            },
        })
    })

}