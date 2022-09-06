import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { format } from "date-fns";

import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";

import Seo from "../components/seo";

export const blogQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      id
      publishedOn
      title
      _rawBody
      boardExecutive {
        name
      }
      categories {
        title
        slug {
          current
        }
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default function BlogsSingle({ data }) {
  const blog = data.sanityBlog;
  return (
    <>
      <Seo title={blog.title} />
      <section className='blogSingleHero'>
        <GatsbyImage
          image={blog.coverImage.asset.gatsbyImageData}
          alt={blog.coverImage.asset.gatsbyImageData}
          className='blogSingleHero__img'
        />
        <div className='blogSingleHero__overlay'>
          <div className='container blogSingleHero__content'>
            <h1>{blog.title}</h1>
            <div className='blogSingleHero__menu'>
              <span>
                <CgCalendarDates className='blogSingleHero__icon' />
                {blog.publishedOn && (
                  <p className='card__date'>
                    {format(new Date(blog.publishedOn), "p, MMMM dd, yyyy")}
                  </p>
                )}
              </span>
              <span>
                <MdOutlineCategory className='blogSingleHero__icon' />
                {blog.categories.map((item, index) => (
                  <p key={item.slug.current}>
                    <Link to={`/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length - 1 ? " | " : ""}
                  </p>
                ))}
              </span>
              <span>
                <BsPersonCircle className='blogSingleHero__icon' />
                <p>{blog.boardExecutive.name}</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <article className='blogSingle'>
        <div className='container'>
          <div className='blogSingle__header'>
            <FaLeaf />
            <div className='dividerBar'></div>
          </div>
          <PortableTextHandler value={blog._rawBody} />
        </div>
      </article>
    </>
  );
}
