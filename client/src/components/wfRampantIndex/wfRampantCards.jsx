import React from 'react'
import WfRampantCard from './wfRampantCard'

export default function WFRampantCards({wfRampantCards}) {

    return (
        <>
            {wfRampantCards && wfRampantCards.map(wfRampantCard =>
                <WfRampantCard
                    title={wfRampantCard.commonName}
                    subTitle={wfRampantCard.botanicalName}
                    description={wfRampantCard.spreadBy}
                    key={wfRampantCard.id}
                    
                    image={{
                        imageData: wfRampantCard.wildflowerImage.asset.gatsbyImageData,
                        altText: wfRampantCard.wildflowerImage.alt,
                    }}
                />)}
        </>
    )
}