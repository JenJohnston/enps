import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { GiFallingLeaf } from 'react-icons/gi'

export default function BlogsSection() {
    
    
    return (
        <section className='plantInfo'>
            <div className="container">
                <div className="plantInfo__header">
                    <h2>Edmontons Native Plants</h2>
                    <h5>Whether its discovering new plants or learning about plant care, we have you covered.</h5>
                </div>
                <div className="flexContainer">
                    <div className="plantInfo__images" data-aos="rotate-c"
                    data-aos-duration="2100">
                        <StaticImage 
                            src="../../images/homepage-plants/golden-aster.jpg"
                            alt="Image of a Golden Aster"
                            className="plantInfo__img img1" 
                        />
                        <StaticImage 
                            src="../../images/homepage-plants/doellingeria-umbellata.jpg"
                            alt="Image of a doellingeria umbellata"
                            className="plantInfo__img img2"
                        />
                        <StaticImage 
                            src="../../images/homepage-plants/sisyrinchium-montanum.jpg"
                            alt="Image of a Sisyrinchium Montanum"
                            className="plantInfo__img img3"
                        />
                    </div>
                    <div className="plantInfo__content">
                        <p>Our comprehensive index provides you with the latest information on native plants growing in and around the Edmonton area.  Also look at our <Link to="/plantinfo">Growing Tips</Link> For some detailed advice on everything from seeding, growing and purchashing native plants.</p>
                    </div>
                </div>
                <div className="plantInfo__link" data-aos="zoom-in-up">
                  <Link to='/blogs'>View our Index</Link>
                  <GiFallingLeaf/>
                </div>
            </div>
           
            
        </section>
    )
}