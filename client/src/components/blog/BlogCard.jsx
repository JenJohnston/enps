import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { format } from 'date-fns'
import PortableTextHandler from '../PortableTextHandler'

export default function BlogCard({title, path, image, excerpt, publishedOn, categories, authorImage, name}) {
    

    return (
        <Link to={path} className='card'>
            <h4 className="card__title">{title}</h4>
            <GatsbyImage
                className='card__img'
                image={image.imageData}
                alt={image.altText}
            />
            <div className="card__imgOverlay">
            
            </div>
           <div className="card_overlay">
               <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" /></svg>    
                    <GatsbyImage
                        className='card__thumb'
                        image={authorImage.imageData}
                        alt={authorImage.altText}
                    />
                    <div className="card__headerText">
                        <p className='card__categories'>
                            {categories.map((item, index) => (
                                <span key={item.slug.current}>
                                    <Link className='card__category' to={`/categories/${item.slug.current}`}>
                                        {item.title}
                                    </Link>
                                    {index < categories.length - 1 ? ' | ' : ''}
                                </span>
                            ))}
                        </p>
                        <h4 className="card__author">{name}</h4>
                        {publishedOn && (
                            <p className='card__date'>{format(new Date(publishedOn), 'p, MMMM dd, yyyy')}</p>
                        )}   
                    </div>     
                    <PortableTextHandler className="card__excerpt" value={excerpt}/>
               </div>
               
                   
                
           </div>
        </Link>
    )
}
