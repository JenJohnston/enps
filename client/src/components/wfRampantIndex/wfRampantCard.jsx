import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function WfRampantCard({title, subTitle, description, image}) {
    
    return (
        <article className='wfCard'>
            <div className="wfCard__overlay">
                    
            </div>
            <div className="wfCard__imgContainer">
                <GatsbyImage
                        className='wfCard__img'
                        image={image.imageData}
                        alt={image.altText}
                    />
                </div>
            <div className="wfCard__body">
                <div className="titleBlock">
                    <h5>Common Name</h5>
                    <h5 className='titleBlock__title'>{title}</h5>
                </div>
                <div className="titleBlock">
                    <h5>Botanical Name</h5>
                    <h5 className='titleBlock__title'>{subTitle}</h5>
                </div>
                <p>Spread By: {description}</p>
            </div>
        </article>
    )
}
