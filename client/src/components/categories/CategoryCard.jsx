import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import PortableTextHandler from '../PortableTextHandler'

export default function CategoryCard({title, description, slug, image}) {
    

    return (
        <Link to={`/categories/${slug.current}`}  className='card'>
            <div className="card__background">
                <GatsbyImage
                    className='card__img'
                    image={image.imageData}
                    alt={image.altText}
                />
                <div className="card__overlay">
                    
                </div>
            </div>
            <div className="card__content">
                <h2>{title}</h2>
                <div className="card__description">
                    <PortableTextHandler value={description}/>
                </div>
            </div>
        </Link>
    )
}
