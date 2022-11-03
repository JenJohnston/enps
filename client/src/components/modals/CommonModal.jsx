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
                className='modalOverlay__toggle indexToggle'
                tabIndex={0}
                onClick={handleCommonModal} 
                onKeyDown={handleCommonModal}
            >
                <CgClose/>
            </button>
            <div className="commonIndexContent">
                <div className="container">
                <div className='commonIndexContent__header'>
                    <FaLeaf />
                    <h2>Common Name Index</h2>
                    <h5>Click On The Plant Link to Bring Up More Detailed Information</h5>
                    <div className='dividerBar'></div>
                </div>
                    {commonIndex.map((obj, index) => {
                        return (
                            
                             <Link 
                                to={`/wfindex/${obj.slug.current}`} 
                                className="commonIndexContent__link" key={index}
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
