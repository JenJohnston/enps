import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import WFCards from '../wfnews/WFCards'

import { GiFallingLeaf } from 'react-icons/gi'

export default function WildFlowerNews() {
    
    const data = useStaticQuery(graphql`
        query wildFlowerQueury {
            allSanityFeatured {
                nodes {
                    wildflowerNews {
                        wildflowerpdf {
                            asset {
                                url
                            }
                        }
                        _rawExcerpt
                        id
                        title
                        previewImage {
                            alt
                            asset {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }  
    `)

    const wfNewsFeature = data.allSanityFeatured.nodes[0].wildflowerNews

    return (
        <section className='homeWFNews'>
            <div className="container">
                <div className="homeWFNews__header">
                    <h2>The WildFlower News</h2>
                </div>
                <WFCards wfcards={wfNewsFeature}/>
                <div className="homeWFNews__link">
                  <Link to='/news'>View Our Archives</Link>
                  <GiFallingLeaf/>
                </div>
            </div> 
        </section>
    )
}
