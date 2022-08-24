import React from 'react'
import WFCard from './WFCard'

export default function WFCards({wfcards}) {
    

    return (
        <>
            {wfcards && wfcards.map(wfcard =>
                <WFCard
                    path={wfcard.wildflowerpdf.asset.url}
                    title={wfcard.title}
                    key={wfcard.id}
                    excerpt={wfcard._rawExcerpt}
                    image={{
                        imageData: wfcard.previewImage.asset.gatsbyImageData,
                        altText: wfcard.previewImage.alt,
                    }}
                />)}
        </>
    )
}
