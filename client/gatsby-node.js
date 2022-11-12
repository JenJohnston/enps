const { arEG } = require("date-fns/locale")

exports.createPages = async ({ graphql, actions }) => {
    const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE )

    const newsTemplate = require.resolve('./src/templates/news.js')
    // const blogsTemplate = require.resolve('./src/templates/blogs.js')
    // const blogSingleTemplate = require.resolve('./src/templates/blogSingle.js')
    // const categoriesTemplate = require.resolve('./src/templates/categories.js')
    // const categorySingleTemplate = require.resolve('./src/templates/categorySingle.js')
    const eventsTemplate = require.resolve('./src/templates/events.js')
    const eventSingleTemplate = require.resolve('./src/templates/eventSingle.js')
    const volunteersTemplate = require.resolve('./src/templates/volunteer.js')
    const volunteerSingleTemplate = require.resolve('./src/templates/volunteerSingle.js')
    const indexModalTemplate = require.resolve('./src/templates/indexModal.js')
    const plantIndexCardTemplate = require.resolve('./src/templates/plantIndexCard.js')
    const boardMemberTemplate = require.resolve('./src/templates/boardMember.js')

    /*
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
    
    */

    const { createPage } = actions
    const result = await graphql(`{
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
          allSanityWfIndex(
            filter: { indexID: {eq: "pi"} }
            sort: { fields: commonName, order: ASC }
          ) {
            nodes {
              id
              slug {
                current
              }
            }
            edges {
              node {
                id
                slug {
                  current
                }
              }
              next {
                slug {
                  current
                }
              }
              previous {
                slug {
                  current
                }
              }
            }
          }
          allSanityPlantIndexCard(sort: {fields: commonName, order: ASC}) {
            nodes {
              id
              slug {
                current
              }
            }
            edges {
              next {
                slug {
                  current
                }
              }
              node {
                id
                slug {
                  current
                }
              }
              previous {
                slug {
                  current
                }
              }
            }
          }
          allSanityBoardExecutive {
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
    // const blogs = result.data.allSanityBlog.nodes
    // const categories = result.data.allSanityCategory.nodes
    const events = result.data.allSanityEvent.nodes
    const volunteers = result.data.allSanityVolunteer.nodes
    const wfindex = result.data.allSanityWfIndex.edges
    const plantCardIndex = result.data.allSanityPlantIndexCard.edges
    const boardMembers = result.data.allSanityBoardExecutive.nodes    

    console.log(wfindex)
    // single blog page

    // blogs.forEach((blog) => {
    //     createPage({
    //         path: `/blogs/${blog.slug.current}`,
    //         component: blogSingleTemplate,
    //         context: { id: blog.id }
    //     })
    // })

    // single category pages

    // categories.forEach((category) => {
    //     createPage({
    //       path: `/categories/${category.slug.current}`,
    //       component: categorySingleTemplate,
    //       context: { id: category.id }
    //     })
    // })

    // single event pages

    events.forEach((event) => {
        createPage({
            path: `/events/${event.slug.current}`,
            component: eventSingleTemplate,
            context: { id: event.id }
        })
    })

    // single volunteer pages

    volunteers.forEach((volunteer) => {
        createPage({
            path: `/volunteer/${volunteer.slug.current}`,
            component: volunteerSingleTemplate,
            context: { id: volunteer.id }
        })
    })

    // single index modal pages

    wfindex.forEach(({ node }, index) => {
      createPage({
        path: `/wfindex/${node.slug.current}`,
        component: indexModalTemplate,
        context: { 
          id: node.id,
          previous: index === 0 ? null : wfindex[index - 1].node,
          next: index === wfindex.length - 1 ? null : wfindex[index + 1].node,
         }
      })
    })

    // single index modal pages

    plantCardIndex.forEach(({ node }, index) => {
      createPage({
        path: `/wfindex/${node.slug.current}`,
        component: plantIndexCardTemplate,
        context: { 
          id: node.id,
          previous: index === 0 ? null : plantCardIndex[index - 1].node,
          next: index === plantCardIndex.length - 1 ? null : plantCardIndex[index + 1].node,
         }
      })
    })

    // single board member page

    boardMembers.forEach((boardMember) => {
      createPage({
          path: `/about/${boardMember.slug.current}`,
          component: boardMemberTemplate,
          context: { id: boardMember.id }
      })
  })

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

    // volunteer home page

    const totalVolunteerPages = Math.ceil(volunteers.length / postsPerPage)
    Array.from({ length: totalVolunteerPages }).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/volunteer' : `/volunteer/${index + 1}`,
            component: volunteersTemplate,
            context: {
                limit: postsPerPage,
                offset: index * postsPerPage,
                numberOfPages: totalVolunteerPages,
                currentPage: index + 1,
            },
        })
    })

    // events home page

    const totalEventPages = Math.ceil(events.length / postsPerPage)
    Array.from({ length: totalEventPages }).forEach((_, index) => {
        createPage({
            path: index === 0 ? '/events' : `/events/${index + 1}`,
            component: eventsTemplate,
            context: {
                limit: postsPerPage,
                offset: index * postsPerPage,
                numberOfPages: totalEventPages,
                currentPage: index + 1,
            },
        })
    })

     // blog home page

    //  const totalBlogPages = Math.ceil(blogs.length / postsPerPage)
    //  Array.from({ length: totalBlogPages }).forEach((_, index) => {
    //    createPage({
    //      path: index === 0 ? '/blogs' : `/blogs/${index + 1}`,
    //      component: blogsTemplate,
    //      context: {
    //          limit: postsPerPage,
    //          offset: index * postsPerPage,
    //          numberOfPages: totalBlogPages,
    //          currentPage: index + 1,
    //      },
    //    })
    //  })

     // categories home page

    //  const totalCategoryPages = Math.ceil(categories.length / postsPerPage)
    //  Array.from({ length: totalCategoryPages}).forEach((_, index) => {
    //     createPage({
    //         path: index === 0 ? '/categories' : `/categories/${index + 1}`,
    //         component: categoriesTemplate,
    //         context: {
    //         limit: postsPerPage,
    //         offset: index * postsPerPage,
    //         numberOfPages: totalCategoryPages,
    //         currentPage: index + 1,
    //         },
    //     })
    //  })

}