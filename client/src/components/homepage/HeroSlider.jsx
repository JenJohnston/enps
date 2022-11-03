import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Carousel } from 'react-bootstrap'

export default function HeroSlider() {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allSanityHeroSlider {
            nodes {
                title
                botanicalName
                id
                nativePlantImage {
                alt
                asset {
                    gatsbyImageData
                }
                }
            }
            }
        }
    `)

    const heroSlider = data.allSanityHeroSlider.nodes

    return (
        <div className='imageSlider' data-aos="zoom-in">
            <Carousel slide={false} controls={false} indicators={false}>
                {heroSlider.map((obj, index) => {

                    return(
                        <Carousel.Item 
                            key={obj.id}
                            interval={3000}
                            className='imageSlider__imgContainer'
                        >
                            <GatsbyImage 
                                image={obj.nativePlantImage.asset.gatsbyImageData}
                                alt={obj.nativePlantImage.alt}
                                className="imageSlider__img"
                            />
                            <div className="imageSlider__content">
                                <p>{obj.title}</p>
                                <p className='botanicalName'>{obj.botanicalName}</p>
                            </div>
                        </Carousel.Item>      
                    )
                               
                })}
            </Carousel>
        </div>
    )
}

