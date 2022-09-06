import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import BlogCards from "../components/blog/BlogCards";
import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";

export const categoryQuery = graphql`
  query SingleCategoryQuery($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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

export default function CategorySingle({ data }) {
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <Seo title={category.title} />
      <section className='categorySingleHero'>
        <GatsbyImage
          image={category.coverImage.asset.gatsbyImageData}
          alt={category.coverImage.asset.gatsbyImageData}
          className='categorySingleHero__img'
        />
        <div className='categorySingleHero__overlay'>
          <div className='container categorySingleHero__content'>
            <h1>{category.title}</h1>
            <PortableTextHandler value={category._rawDescription} />
          </div>
        </div>
      </section>
      <section className='categorySingle'>
        <div className='container'>
          <div className='categorySingle__header'>
            <FaLeaf />
            <h3>Related Blogs</h3>
            <div className='dividerBar'></div>
          </div>
          <div className='categorySingle__blogs'>
            <BlogCards blogs={blogs} />
          </div>
        </div>
      </section>
    </>
  );
}
