import { graphql, Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { format } from "date-fns";

import Seo from "../components/seo";
import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from "react-icons/fa";
import { GiFallingLeaf } from "react-icons/gi";

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
            <h5>
              <span>When: </span>
              {format(new Date(event.eventDate), "MMMM dd, yyyy, p")}
            </h5>
            <h5>
              <span>Where:</span> {event.location}
            </h5>
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
          <div className='eventSingle__link'>
            <Link to='/events'>Return to Events Page</Link>
            <GiFallingLeaf />
          </div>
        </div>
      </article>
    </>
  );
}
