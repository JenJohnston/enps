import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Pagination from "../components/Pagination.jsx";
import WFCards from "../components/wfnews/WFCards.jsx";

import { FaLeaf } from "react-icons/fa";

export const NewsQuery = graphql`
  query WildFLowerNewsQuery($limit: Int!, $offset: Int!) {
    allSanityWildflowerNews(
      sort: { fields: publishedOn, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedOn
        _rawExcerpt
        wildflowerpdf {
          asset {
            url
          }
        }
        previewImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default function News({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const wfNews = data.allSanityWildflowerNews.nodes;

  return (
    <>
      <Seo title='The WildFlower News' />
      <section className='newsHero'>
        <StaticImage
          src='../images/news-banner.jpg'
          alt='field of wild flowers'
          className='newsHero__img'
        />
        <div className='newsHero__overlay'>
          <div className='container'>
            <h1>The WildFlower News</h1>
            <h5>Growing Natures Garden</h5>
          </div>
        </div>
      </section>
      <section className='news'>
        <div className='container'>
          <div className='news__header'>
            <FaLeaf />
            <h2>Monthly Archives</h2>
            <h5>
              Stay current on gardening tips for native plants, up-coming
              events, news and articles
            </h5>
            <div className='dividerBar'></div>
          </div>
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL='/news'
          />
        )}
        <div className='news__content container'>
          <WFCards wfcards={wfNews} />
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL='/news'
          />
        )}
      </section>
    </>
  );
}
