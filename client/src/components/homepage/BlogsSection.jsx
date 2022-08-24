import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

import BlogCards from '../blog/BlogCards'

export default function BlogsSection() {
    
    const data = useStaticQuery(graphql`
    query blogsQuery {
        allSanityFeatured {
          nodes {
            blogs {
              _rawExcerpt
              id
              title
              boardExecutive {
                name
                profileImage {
                  alt
                  asset {
                    gatsbyImageData
                  }
                }
              }
              publishedOn
              coverImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
              slug {
                current
              }
              categories {
                title
                slug {
                  current
                }
              }
            }
          }
        }
      }
    `)

    const featuredBlogs = data.allSanityFeatured.nodes[0].blogs

    return (
        <section className='homeBlogs'>
            <div className="container">
                <div className="homeBlogs__header">
                    <h3>Latest Articles</h3>
                </div>
                <div className="flexContainer">
                    <BlogCards blogs={featuredBlogs}/>
                </div>
            </div>
        </section>
    )
}
