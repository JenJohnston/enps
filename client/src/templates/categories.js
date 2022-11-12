import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Pagination from "../components/Pagination.jsx";
import CategoryCards from "../components/categories/CategoryCards.jsx";

import { FaLeaf } from "react-icons/fa";

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

export default function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;
  return (
    <>
      <Seo title='Categories' />
      <section className='categoriesHero'>
        <StaticImage
          src='../images/categories-banner.jpg'
          alt='field of wild flowers'
          className='categoriesHero__img'
        />
        <div className='categoriesHero__overlay'>
          <div className='container'>
            <h1>Categories</h1>
            <h5>A Searchable Index to Help You Find The Right Articles</h5>
          </div>
        </div>
      </section>
      <section className='categories'>
        <div className='categories__header'>
          <FaLeaf />
          <h2>Can't Find What You're Looking For?</h2>
          <h5>Our Categories are Here to Help, Try Searching by Category</h5>
          <div className='dividerBar'></div>
        </div>
        <div className='categories__content'>
          <CategoryCards categories={categories} />
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL='/categories'
          />
        )}
      </section>
    </>
  );
}
