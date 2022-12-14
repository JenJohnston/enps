import React, {useContext} from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function BotanicalModal() {

    const data = useStaticQuery(graphql`
        query BotanicalIndexQuery {
            allSanityPlantIndexCard(sort: {fields: botanicalName, order: ASC}) {
                nodes {
                    botanicalName
                    slug {
                    current
                    }
                    featureImage {
                    alt
                    asset {
                        gatsbyImageData
                    }
                    }
                }
                } 
        }
    `)
    
    const botanicalIndex = data.allSanityPlantIndexCard.nodes;

    const { isBotanicalModalOpen, closeBotanicalModal } = useContext(ModalContext)

    const handleBotanicalModal = () => {
        closeBotanicalModal();
    }

    if(!isBotanicalModalOpen) return null
    return (
        <div className='modalOverlay'>
            <button 
                className='modalOverlay__toggle'
                onClick={handleBotanicalModal} 
                onKeyDown={handleBotanicalModal}
                tabIndex={0}
            >
                <CgClose/>
            </button>
            <div className="commonIndexContent">
                <div className="container">
                    <div className='commonIndexContent__header'>
                        <FaLeaf />
                        <h2>Botanical Name Index</h2>
                        <h5>Click on the plant name for detailed information</h5>
                        <div className='dividerBar'></div>
                    </div>
                    <div className="indexGrid">
                        {botanicalIndex.map((obj, index) => {
                            return (
                                <Link 
                                    to={`/wfindex/${obj.slug.current}`} 
                                    className="commonIndexContent__link botanicalName" key={index}
                                    tabIndex={0}
                                >
                                    <GatsbyImage
                                        image={obj.featureImage.asset.gatsbyImageData}
                                        alt={obj.featureImage.alt}
                                        className="commonIndexContent__img"
                                    />
                                    {obj.botanicalName}
                                </Link>
                                
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
