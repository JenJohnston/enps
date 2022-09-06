import { graphql } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import BlogCards from "../components/blog/BlogCards";
import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";

export const eventQuery = graphql`
  query SingleEventQuery($id: String!) {
    sanityEvent(id: { eq: $id }) {
      id
      title
      price
      _rawBody
      eventDate
      location
    }
  }
`;

export default function EventSingle({ data }) {
  const event = data.sanityEvent;

  return (
    <>
      <Seo title={event.title} />
      <section className='eventSingleHero'>
        <StaticImage
          src='../images/eventSingle-banner.jpg'
          alt='field of wild flowers'
          className='eventSingleHero__img'
        />
        <div className='eventSingleHero__overlay'>
          <div className='container eventSingleHero__content'>
            <h1>{event.title}</h1>
            <h5>{event.eventDate}</h5>
            <h5>{event.location}</h5>
          </div>
        </div>
      </section>
      <article className='eventSingle'>
        <div className='container'>
          <div className='eventSingle__header'>
            <FaLeaf />
            <div className='dividerBar'></div>
          </div>
          <PortableTextHandler value={event._rawBody} />
        </div>
      </article>
    </>
  );
}
