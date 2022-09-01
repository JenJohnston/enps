import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Pagination from "../components/Pagination.jsx";
import VolunteerCards from "../components/volunteer/VolunteerCards.jsx";

import { FaLeaf } from "react-icons/fa";

export const VolunteersQuery = graphql`
  query VolunteerQuery($limit: Int!, $offset: Int!) {
    allSanityVolunteer(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        projectLeader
        contactPhone
        contactEmail
        slug {
          current
        }
        _rawExcerpt
        _rawBody
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        _createdAt
      }
    }
  }
`;

export default function Volunteer({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const volunteerCardData = data.allSanityVolunteer.nodes;
  console.log(volunteerCardData);
  return (
    <>
      <Seo title='Volunteer' />
      <section className='volunteerHero'>
        <StaticImage
          src='../images/volunteer-banner.jpg'
          alt='field of wild flowers'
          className='volunteerHero__img'
        />
        <div className='volunteerHero__overlay'>
          <div className='container'>
            <h1>Volunteer</h1>
            <h5>Get Involved in Some of Our Many Projects!</h5>
          </div>
        </div>
      </section>
      <section className='volunteer'>
        <div className='volunteer__header'>
          <FaLeaf />
          <h2>Get Involved</h2>
          <h5>Making a difference today and for generations to come.</h5>
          <div className='dividerBar'></div>
        </div>
        <div className='volunteer__content'>
          <VolunteerCards volunteercards={volunteerCardData} />
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL='/volunteer'
          />
        )}
      </section>
    </>
  );
}
