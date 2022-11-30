import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from "../components/seo"
import { ModalContext } from '../context/ModalContext'
import WFRampantCards from '../components/wfRampantIndex/wfRampantCards'

import { FaLeaf } from 'react-icons/fa'
import { GiDandelionFlower } from 'react-icons/gi'
import { GiSpotedFlower } from 'react-icons/gi'

export const WfQuery = graphql`
    query wfIndexQuery {
        allSanityWfIndex(filter: {indexID: {eq: "rs"}}) {
            nodes {
              commonName
              botanicalName
              id
              spreadBy
              wildflowerImage {
                alt
                asset {
                  gatsbyImageData
                }
              }
            }
          }
    }
`
export default function Wfindex({data}) {
    
    // const data = useStaticQuery(graphql`
    //     query wfIndexQuery {
    //         allSanityWfIndex {
    //             nodes {
    //                 id
    //                 commonName
    //                 scientificName
    //                 spreadBy
    //                 wildflowerImage {
    //                 alt    
    //                 asset {
    //                     gatsbyImageData
    //                 }
    //                 }
    //             }
    //         }
    // }
        
    // `)
    
   
    const wfIndex = data.allSanityWfIndex.nodes

    const { openCommonModal } = useContext(ModalContext)
    const { openBotanicalModal } = useContext(ModalContext)

    const handleCommonModal = () => {
        openCommonModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    const handleBotanicalModal = () => {
        openBotanicalModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }
    
    return (
        <>
            <Seo title="Plant Index"/>
            <section className="plantIndexHero">
                <StaticImage 
                    src="../images/wfindex-banner.jpg"
                    alt="an autumn photo of the Walterdale Bridge in Edmonton"
                    className="plantIndexHero__img"
                />
                <div className="plantIndexHero__overlay">
                    <div className="container">
                        <h1>Plant Index</h1>
                        <h5> Explore plants native to the Edmonton area</h5>
                    </div>
                </div>
            </section>
            <section className="modalMenu">
                <div className="container">
                    <div className="modalMenu__header">
                        <h3>Browse Our Index By</h3>
                    </div>
                    <div className="modalMenu__content wfContent">
                            <button className='modalMenu__toggle'
                            onClick={handleCommonModal} 
                            onKeyDown={handleCommonModal}
                            tabIndex={0}
                        >
                            <GiDandelionFlower/>
                            Common Name
                        </button>
                        <h4>Or</h4>
                            <button className='modalMenu__toggle'
                            onClick={handleBotanicalModal} 
                            onKeyDown={handleBotanicalModal}
                            tabIndex={0}
                        >
                            <GiSpotedFlower/>
                            Botanical Name
                        </button>
                    </div>
                </div>
            </section>
            <section className='wfRampant'> 
                <div className="wfRampant__header container">
                    <FaLeaf/>
                    <h3>Rampant Wildflowers</h3>
                    <div className="dividerBar"></div>
                    <p>These native wildflowers are all beautiful with their own unique characteristics. However, they will spread rapidly and tend to take over large areas of the garden.</p>
                    <p>Rampant growers are usually those that send out underground runners, or rhizomes, which rapidly produce new plants. Some species do not spread by rhizomes but they do self-seed abundantly. There can still be a place for these plants in the landscape. For example, in places where other plants have a hard time growing, where a mass planting is needed, or in areas (like schoolyards) where high traffic might eliminate some of the less robust plants. If you want to include these rampant wildflowers in your garden, but you don't want to deal with their wandering habits, contain the patch by encircling it with 15 cm (6") wide lawn edging. Bury the lawn edging so that only a couple of centimetres are above ground. See below for the list of plants and the methods by which they spread.</p>
                </div>
                <div className="wfRampant__content">
                    <div className="container wfRampant__gallery">
                    <WFRampantCards wfRampantCards={wfIndex}/>
                    </div>  
                </div>  
            </section>
        </>
    )
}
