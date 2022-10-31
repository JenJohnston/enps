import React, {useContext} from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function CommonModal() {

    const data = useStaticQuery(graphql`
        query CommonIndexQuery {
            allSanityWfIndex(
                filter: { indexID: {eq: "pi"} }
                sort: { fields: commonName, order: ASC }
          ) {
            nodes {
                commonName
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
    
    const commonIndex = data.allSanityWfIndex.nodes;

    const { isCommonModalOpen, closeCommonModal } = useContext(ModalContext)

    const handleCommonModal = () => {
        closeCommonModal();
    }

    if(!isCommonModalOpen) return null
    return (
        <div className='modalOverlay'>
            <button 
                className='modalOverlay__toggle'
                onClick={handleCommonModal} 
                onKeyDown={handleCommonModal}
                tabIndex={0}
            >
                <CgClose/>
            </button>
            <div className="commonIndexContent">
                <div className="container">
                    {commonIndex.map((obj, index) => {
                        return (
                            
                             <Link 
                                to={`/wfindex/${obj.slug.current}`} 
                                className="commonIndexContent__link" key={index}
                                onClick={handleCommonModal} 
                                onKeyDown={handleCommonModal}
                                tabIndex={0}
                            >
                                <GatsbyImage
                                    image={obj.wildflowerImage.asset.gatsbyImageData}
                                    alt={obj.wildflowerImage.alt}
                                    className="commonIndexContent__img"
                                />
                                {obj.commonName}
                            </Link>                   
                        )
                    })}
                </div>
            </div>
        </div>
    )
}