import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from "../components/seo";

import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";
import { GiFallingLeaf } from "react-icons/gi";
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
          </div>
        </div>
      </section>
      <article className='volunteerSingle'>
        <div className='container'>
          <div className='volunteerSingle__header'>
            <FaLeaf />
            <div className='dividerBar'></div>
          </div>
          <div className='volunteerSingle__link volunteerSingle__top'>
            <Link to='/volunteer'>Return to Volunteer Page</Link>
            <GiFallingLeaf />
          </div>
          <PortableTextHandler value={volunteer._rawBody} />
          <aside className='volunteerSingle__menu'>
            <h5>Project Leader: {volunteer.projectLeader}</h5>
            <Link to={volunteer.contactEmail}>
              <IoMail />: {volunteer.contactEmail}
            </Link>
            <Link to={volunteer.contactPhone}>
              <FaPhoneAlt />: {volunteer.contactPhone}
            </Link>
          </aside>
          <div className='volunteerSingle__link'>
            <Link to='/volunteer'>Return to Volunteer Page</Link>
            <GiFallingLeaf />
          </div>
        </div>
      </article>
    </>
  );
}
