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
      sort: { fields: _createdAt, order: ASC }
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
            <h5>Get involved in some of our many projects!</h5>
          </div>
        </div>
      </section>
      <section className='volunteer'>
        <div className='volunteer__header'>
          <FaLeaf />
          <h2>Get Involved</h2>
          <h5>
            We hope that you will join us in projects that promote the
            conservation of plants native to the Edmonton area. You’ll learn
            lots about plants, hang out with a lovely bunch of people, and may
            sometimes get to take home free seedlings and seeds. We also offer a
            gas allowance for volunteers working on projects outside Edmonton
            City limits.
          </h5>
          <h5>
            Contact us at{" "}
            <a href='mailto:enpsvolunteer@gmail.com'>enpsvolunteer@gmail.com</a>{" "}
            for more information and to be added to our volunteer email list.
          </h5>
          <div className='dividerBar'></div>
        </div>
        <div className='volunteer__content container'>
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
