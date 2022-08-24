import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import WFCards
 from '../wfnews/WFCards'
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
                    <h3>The WildFlower News</h3>
                </div>
                <WFCards wfcards={wfNewsFeature}/>
            </div> 
        </section>
    )
}
