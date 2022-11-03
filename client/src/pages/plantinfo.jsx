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
import { GiVineLeaf } from 'react-icons/gi'

import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Plantinfo() {

    const data = useStaticQuery(graphql`
        query plantCardQuery {
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
        }
    `)

    const vendorCards = data.allSanityVendorInfo.nodes
    
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
                        <h2>Growing Tips</h2>
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
            <section className="plantCards">
                <div className="container">
                    <div className="plantCards__header">
                        <FaLeaf/>
                        <h2>Where To Buy</h2>
                        <div className="dividerBar"></div>
                        <p>Below is a list of some vendors in and around the Edmonton area where you can purchase wildflower seeds and products.  The Edmonton Native Plant Society does not endorse these vendors nor do we have any agreement with them. </p>
                    </div>
                    <div className="plantCards__content">
                        {vendorCards.map((obj, index) => {
                            return (
                                <div className="plantCard" key={obj.id}>
                                    <div className="plantCard__img">
                                        <GiVineLeaf/>
                                    </div>
                                    <div className="plantCard__body">
                                        <div className="plantCard__header">
                                            <h4>{obj.title}</h4>
                                            <p>{obj.address}</p>
                                        </div>
                                        <div className="plantCard__content">
                                            <PortableTextHandler value={obj._rawBody}/>
                                        </div>
                                        <div className="plantCard__contact">
                                            <h5>Contact</h5>
                                            <a href={`mailto:${obj.email}`}><IoMail/>{obj.email}</a>
                                            <a href={`tel:${obj.phoneNumber}`}><FaPhoneAlt/>{obj.phoneNumber}</a>
                                        </div>
                                        <a href={obj.url} className='plantCard__url'>View Company Site <FaLongArrowAltRight/></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>        
            </section>
        </>
    )
}
