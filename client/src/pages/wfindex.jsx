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
        </>
    )
}
