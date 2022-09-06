import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import BlogCards from "../components/blog/BlogCards";
import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export const volunteerQuery = graphql`
  query SingleVolunteerQuery($id: String!) {
    sanityVolunteer(id: { eq: $id }) {
      id
      title
      projectLeader
      contactEmail
      contactPhone
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      _rawBody
    }
  }
`;

export default function VolunteerSingle({ data }) {
  const volunteer = data.sanityVolunteer;

  return (
    <>
      <Seo title={volunteer.title} />
      <section className='volunteerSingleHero'>
        <GatsbyImage
          image={volunteer.coverImage.asset.gatsbyImageData}
          alt={volunteer.coverImage.asset.gatsbyImageData}
          className='volunteerSingleHero__img'
        />
        <div className='volunteerSingleHero__overlay'>
          <div className='container volunteerSingleHero__content'>
            <h1>{volunteer.title}</h1>
            <div className='volunteerSingleHero__menu'>
              <h5>{volunteer.projectLeader}</h5>
              <Link to={volunteer.contactEmail}>
                <IoMail />: {volunteer.contactEmail}
              </Link>
              <Link to={volunteer.contactPhone}>
                <FaPhoneAlt />: {volunteer.contactPhone}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <article className='volunteerSingle'>
        <div className='container'>
          <PortableTextHandler value={volunteer._rawBody} />
        </div>
      </article>
    </>
  );
}
