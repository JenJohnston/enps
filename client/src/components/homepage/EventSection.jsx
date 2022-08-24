import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import EventCards from '../events/EventCards'

export default function EventSection() {
    
    const data = useStaticQuery(graphql`
        query eventsQuery {
            allSanityFeatured {
            nodes {
                events {
                id
                title
                _rawExcerpt
                slug {
                    current
                }
                location
                eventDate
                }
            }
            }
        }
    `)

    const eventsFeature = data.allSanityFeatured.nodes[0].events

    return (
        <section className='homeEvents'>
            <div className="container">
                <div className="homeEvents__header">
                    <h2>Upcoming Events</h2>
                </div>
                <div className="flexContainer">
                    <EventCards events={eventsFeature}/>
                </div>
            </div>
        </section>
    )
}
