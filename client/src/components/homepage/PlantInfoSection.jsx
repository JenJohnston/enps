import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { GiFallingLeaf } from 'react-icons/gi'

export default function BlogsSection() {
    
    
    return (
        <section className='plantInfo'>
            <div className="container">
                <div className="plantInfo__header">
                    <h2>Edmonton's Native Plants</h2>
                    <h5>Whether it’s discovering new plants, or learning how to grow, we have you covered.</h5>
                </div>
                <div className="flexContainer">
                    <div className="plantInfo__images" >
                        <StaticImage 
                            src="../../images/homepage-plants/golden-aster.jpg"
                            alt="Image of a Golden Aster"
                            className="plantInfo__img img1"
                            data-aos="fade-right" 
                            data-aos-duration="500"
                        />
                        <StaticImage 
                            src="../../images/homepage-plants/doellingeria-umbellata.jpg"
                            alt="Image of a doellingeria umbellata"
                            className="plantInfo__img img2"
                            data-aos="fade-left" 
                            data-aos-duration="500"
                            data-aos-delay="50"
                        />
                        <StaticImage 
                            src="../../images/homepage-plants/sisyrinchium-montanum.jpg"
                            alt="Image of a Sisyrinchium Montanum"
                            className="plantInfo__img img3"
                            data-aos="fade-right" 
                            data-aos-duration="500"
                            data-aos-delay="100"
                        />
                    </div>
                    <div className="plantInfo__content">
                        <p>Our comprehensive <Link to="/wfindex">plant index</Link> provides you with the latest information on a wide variety of local native plants that grow in the Edmonton area.  Be sure to explore our <Link to="/plantinfo">plant info</Link> for detailed advice on how to grow, identify and select locally sourced native plants.</p>
                    </div>
                </div>
                <div className="plantInfo__link" data-aos="zoom-in-up">
                  <Link to='/wfindex'>View our Index</Link>
                  <GiFallingLeaf/>
                </div>
            </div>
           
            
        </section>
    )
}