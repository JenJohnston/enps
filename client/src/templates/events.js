import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Pagination from "../components/Pagination.jsx";
import EventCards from "../components/events/EventCards.jsx";

import { FaLeaf } from "react-icons/fa";

export const EventsQuery = graphql`
  query EventQuery($limit: Int!, $offset: Int!) {
    allSanityEvent(
      sort: { fields: eventDate, order: ASC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        _rawExcerpt
        location
        eventDate
        slug {
          current
        }
      }
    }
  }
`;

export default function Events({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const eventData = data.allSanityEvent.nodes;
  return (
    <>
      <Seo title='Events' />
      <section className='eventsHero'>
        <StaticImage
          src='../images/events-banner.jpg'
          alt='field of wild flowers'
          className='eventsHero__img'
        />
        <div className='eventsHero__overlay'>
          <div className='container'>
            <h1>Events</h1>
            <h5>Register Today! We Would Love To See You</h5>
          </div>
        </div>
      </section>
      <section className='events'>
        <div className='events__header'>
          <FaLeaf />
          <h2>What's Happening</h2>
          <h5>Growing our Community through Inspiration and Connection</h5>
          <div className='dividerBar'></div>
        </div>
        <div className='events__content'>
          <EventCards events={eventData} />
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL='/events'
          />
        )}
      </section>
    </>
  );
}
