{% comment %} import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Pagination from "../components/Pagination.jsx";
import BlogCards from "../components/blog/BlogCards.jsx";

import { FaLeaf } from "react-icons/fa";

export const BlogsQuery = graphql`
  query BlogQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedOn, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        _rawExcerpt
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
        boardExecutive {
          name
          profileImage {
            alt
            asset {
              gatsbyImageData
            }
          }
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
`;

export default function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogsData = data.allSanityBlog.nodes;
  return (
    <>
      <Seo title='Blogs' />
      <section className='blogsHero'>
        <StaticImage
          src='../images/blogs-banner.jpg'
          alt='field of wild flowers'
          className='blogsHero__img'
        />
        <div className='blogsHero__overlay'>
          <div className='container'>
            <h1>Our Blogs</h1>
            <h5>The Latest Articles from the ENPG Board</h5>
          </div>
        </div>
      </section>
      <section className='blogs'>
        <div className='blogs__header'>
          <FaLeaf />
          <h2>The ENPG Corner</h2>
          <h5>
            Musings, observations, and updates about ENPG Activities and
            everything else
          </h5>
          <div className='dividerBar'></div>
        </div>
        <div className='blogs__content'>
          <BlogCards blogs={blogsData} />
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL='/blogs'
          />
        )}
      </section>
    </>
  );
} {% endcomment %}
