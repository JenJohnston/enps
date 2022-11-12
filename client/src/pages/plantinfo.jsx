import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from "../components/seo"
import { ModalContext } from '../context/ModalContext'
import PortableTextHandler from '../components/PortableTextHandler'

import { GiPlantWatering } from 'react-icons/gi'
import { GiPlantSeed } from 'react-icons/gi'
import { GiSeedling } from 'react-icons/gi'
import { RiSeedlingFill } from 'react-icons/ri'
import { GiPlantRoots } from 'react-icons/gi'
import { FaLeaf } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdOutlinePictureAsPdf } from 'react-icons/md'
import { SiChainlink } from 'react-icons/si'

export const PlantInfoQuery = graphql`
query plantInfoQuery {
    allSanityVendorInfo {
    nodes {
        url
        title
        phoneNumber
        id
        email
        address
        _rawBody
    }
    }
    allSanityGrowSubDocuments {
        nodes {
          id
          title
          growSubDocumentPdfUpload {
            asset {
              url
            }
          }
        }
      }
      allSanityPlantIdentityPdf {
        nodes {
          plantIdentityPdf
          id
          idendityPdfUpload {
            asset {
              url
            }
          }
        }
      }
      allSanityExternalLink(sort: {fields: linkName, order: ASC) {
        nodes {
          id
          linkName
          linkUrl
          _rawDescription
        }
      }
}
`

export default function Plantinfo({data}) {

    const vendorCards = data.allSanityVendorInfo.nodes
    const additionalReadingDocs = data.allSanityGrowSubDocuments.nodes
    const plantIdentification = data.allSanityPlantIdentityPdf.nodes
    const links = data.allSanityExternalLink.nodes
 
    const { openPlantDrModal } = useContext(ModalContext)
    const { openSeedGrowModal } = useContext(ModalContext)
    const { openSeedCollModal } = useContext(ModalContext)
    const { openSpringSeedModal } = useContext(ModalContext)
    const { openNativeSeedModal } = useContext(ModalContext)

    const handlePlantDrModal = () => {
        openPlantDrModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
        
    }

    const handleSeedGrowModal = () => {
        openSeedGrowModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    const handleSeedCollModal = () => {
        openSeedCollModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    const handleSpringSeedModal = () => {
        openSpringSeedModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    const handleNativeSeedModal = () => {
        openNativeSeedModal();
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    return (
        <>
            <Seo title="Plant Info"/>
            <section className="plantinfoHero">
                <StaticImage 
                    src="../images/goldenrod-banner.jpg"
                    alt="an autumn photo of the Walterdale Bridge in Edmonton"
                    className="plantinfoHero__img"
                />
                <div className="plantinfoHero__overlay">
                    <div className="container">
                        <h1>All About Native Plants</h1>
                        <h5>A resource guide for identifying, growing and sourcing local native plants</h5>
                    </div>
                </div>
            </section>
            <section className="modalMenu">
                <div className="container">
                    <div className="modalMenu__header">
                        <FaLeaf/>
                        <h2>Growing Tips</h2>
                        <div className="dividerBar"></div>
                    </div>
                    <div className="modalMenu__content">
                        <button 
                            className='modalMenu__toggle'
                            onClick={handlePlantDrModal} 
                            onKeyDown={handlePlantDrModal}
                            tabIndex={0}
                        >
                            <GiPlantWatering/>
                            General Planting Tips
                        </button>
                        <button 
                            className='modalMenu__toggle'
                            onClick={handleSeedGrowModal} 
                            onKeyDown={handleSeedGrowModal}
                            tabIndex={0}
                        >
                            <GiPlantSeed/>
                            Growing From Seed
                        </button>
                        <button 
                            className='modalMenu__toggle'
                            onClick={handleSeedCollModal} 
                            onKeyDown={handleSeedCollModal}
                            tabIndex={0}
                        >
                            <GiSeedling/>
                            Seed Collection, Storage
                        </button>
                        <button 
                            className='modalMenu__toggle'
                            onClick={handleSpringSeedModal} 
                            onKeyDown={handleSpringSeedModal}
                            tabIndex={0}
                        >
                            <RiSeedlingFill/>
                            Spring Seed Planting
                        </button>
                        <button 
                            className='modalMenu__toggle'
                            onClick={handleNativeSeedModal} 
                            onKeyDown={handleNativeSeedModal}          
                            tabIndex={0}
                        >
                            <GiPlantRoots/>
                            Stratifying Native Seeds
                        </button>
                    </div>
                </div>
            </section>
            <section className="additionalInfo">
                <div className="container">
                    <div className="additionalInfo__header">
                        <h3>Additional Reading</h3>
                    </div>
                    <div className="additionalInfo__content">
                        {additionalReadingDocs.map((obj, idx) => {
                            return (
                                <a 
                                    href={obj.growSubDocumentPdfUpload.asset.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={obj.id}
                                >
                                    <MdOutlinePictureAsPdf/>
                                    {obj.title}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="plantIdentity">
                <div className="container">
                    <div className="plantIdentity__header">
                        <h3>Plant Identification</h3>
                    </div>
                    <div className="plantIdentity__content">
                        {plantIdentification.map((obj, idx) => {
                            return (
                                <a
                                    href={obj.idendityPdfUpload.asset.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={obj.id}
                                >
                                    <MdOutlinePictureAsPdf/>
                                    {obj.plantIdentityPdf}
                                </a>
                            )
                        })}    
                    </div>   
                </div>
            </section>
            <section className="links">
                <div className="container">
                    <div className="links__header">
                        <FaLeaf/>
                        <h3>Links</h3>
                        <div className="dividerBar"></div>
                    </div>
                    <div className="links__content">
                        {links.map((obj, idx) => {
                           return (
                                <a 
                                    href={obj.linkUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={obj.id}
                                >            
                                    <SiChainlink/>
                                    {obj.linkName}
                                </a>
                           )
                        })}
                    </div>
                </div>
            </section>
            <section className="plantCards">
                <div className="container">
                    <div className="plantCards__header">
                        <FaLeaf/>
                        <h3>Where To Source</h3>
                        <div className="dividerBar"></div>
                        <p>Below is a list of some vendors in and around the Edmonton area where you can purchase wildflower seeds and products.  The Edmonton Native Plant Society does not endorse these vendors nor do we have any agreement with them. </p>
                    </div>
                    <div className="plantCards__content">
                        {vendorCards.map((obj, index) => {
                            return (
                                <article className="plantCard" key={obj.id}>
                                    <div className="plantCard__body">
                                        <div className="plantCard__header">
                                            <h4>{obj.title}</h4>
                                            <p>{obj.address}</p>
                                        </div>
                                        <div className="plantCard__content">
                                            <PortableTextHandler value={obj._rawBody}/>
                                        </div>
                                        <a 
                                            target="_blank"
                                            rel="noreferrer" 
                                            href={obj.url} className='plantCard__url'
                                        >View Company Site <FaLongArrowAltRight/></a>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>        
            </section>
        </>
    )
}
