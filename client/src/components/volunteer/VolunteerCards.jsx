import React from 'react'
import VolunteerCard from './VolunteerCard'

export default function VolunteerCards({volunteercards}) {
    

    return (
        <>
            {volunteercards && volunteercards.map(volunteercard =>
                <VolunteerCard
                    path={volunteercard.slug.current}
                    title={volunteercard.title}
                    key={volunteercard.id}
                    excerpt={volunteercard._rawExcerpt}
                    image={{
                        imageData: volunteercard.coverImage.asset.gatsbyImageData,
                        altText: volunteercard.coverImage.alt,
                    }}
                    email={volunteercard.contactEmail}
                    phoneNumber={volunteercard.contactPhone}
                    contact={volunteercard.projectLeader}
                />
                )}
        </>
    )
}
