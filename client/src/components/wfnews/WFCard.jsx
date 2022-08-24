import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import PortableTextHandler from '../PortableTextHandler'

export default function WFCard({path, title, excerpt, image}) {
    

    return (
        <aside className='card'>
            <div className="card__header">
                <GatsbyImage
                    className='card__img'
                    image={image.imageData}
                    alt={image.altText}
                />
                <h3 className="card__title">{title}</h3>
            </div>
           

           <div className="card__content">
               <PortableTextHandler value={excerpt}/>
           </div>
           <Link className='card__link' to={path} target="_blank">Read This Issue</Link>
        </aside>
    )
}
