import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Pagination from "../components/Pagination.jsx";
import PortableTextHandler from "../components/PortableTextHandler";

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
            <div className='dividerBar'></div>
          </div>
        </div>
        <div className='news__content'>
          {wfNews.map((obj, idx) => {
            return (
              <div key={obj.id} className='news__card'>
                <div className='news__cardHeader'>
                  <GatsbyImage
                    className='news__cardImg'
                    image={obj.previewImage.asset.gatsbyImageData}
                    alt={obj.previewImage.alt}
                  />
                  <h5>{obj.title}</h5>
                </div>
                <div className='news__cardBody'>
                  <PortableTextHandler value={obj._rawExcerpt} />
                  <Link to={obj.wildflowerpdf.asset.url}>Read This Issue</Link>
                </div>
              </div>
            );
          })}
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
