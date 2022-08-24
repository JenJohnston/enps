import React from 'react'
import EventCard from './EventCard'

export default function EventCards({events}) {
    

    return (
        <>
            {events && events.map(event =>
                <EventCard
                    path={event.slug.current}
                    title={event.title}
                    key={event.id}
                    excerpt={event._rawExcerpt}
                    date={event.eventDate}
                    location={event.location}
                />)}
        </>
    )
}
