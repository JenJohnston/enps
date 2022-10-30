import React, {useContext} from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function BotanicalModal() {

    const data = useStaticQuery(graphql`
        query BotanicalIndexQuery {
            allSanityWfIndex(
                filter: { indexID: {eq: "pi"} }
                sort: { fields: botanicalName, order: ASC }
          ) {
            nodes {
                botanicalName
                slug {
                current
                }
                wildflowerImage {
                alt
                asset {
                    gatsbyImageData
                }
                }
            }
            }
        }
    `)
    
    const botanicalIndex = data.allSanityWfIndex.nodes;

    console.log(botanicalIndex)
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
                    {botanicalIndex.map((obj, index) => {
                        return (
                            <Link 
                                to={`/wfindex/${obj.slug.current}`} 
                                className="commonIndexContent__link" key={index}
                                onClick={handleBotanicalModal} 
                                onKeyDown={handleBotanicalModal}
                                tabIndex={0}
                            >
                                <GatsbyImage
                                    image={obj.wildflowerImage.asset.gatsbyImageData}
                                    alt={obj.wildflowerImage.alt}
                                    className="commonIndexContent__img"
                                />
                                {obj.botanicalName}
                            </Link>
                            
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
