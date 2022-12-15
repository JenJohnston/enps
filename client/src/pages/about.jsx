import React, {useState} from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import useCollapse from 'react-collapsed';

import Seo from "../components/seo"
import PortableTextHandler from "../components/PortableTextHandler.jsx";

import { FaLeaf } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdOutlineCardMembership } from 'react-icons/md'
import { MdVolunteerActivism } from 'react-icons/md'

export default function About() {

    const data = useStaticQuery(graphql`
    query aboutQuery {
        allSanityAboutBanner {
          nodes {
            bannerImage {
              alt
              asset {
                gatsbyImageData
              }
            }
          }
        }
        allSanityAboutSlider {
          nodes {
            galleryImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            id
          }
        }
        allSanityBoardExecutive(sort: {fields: boardID, order: ASC}) {
          nodes {
            id
            name
            title
            profileImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
                current
            }
          }
        }
        allSanityBoardReport {
            nodes {
              title
              id
              _rawBody
            }
        }
        allSanityOurHistory {
            nodes {
              _rawBody
            }
          }
          allSanityOurMission {
            nodes {
              _rawBody
            }
          }
      }
    `)

    const aboutBanner = data.allSanityAboutBanner.nodes[0].bannerImage
    const aboutGallery = data.allSanityAboutSlider.nodes
    const boardExecutive = data.allSanityBoardExecutive.nodes
    const boardReport = data.allSanityBoardReport.nodes
    const ourMission = data.allSanityOurMission.nodes
    const ourHistory = data.allSanityOurHistory.nodes

     const [isCollapsed, setIsCollapsed] = useState(true)  

     const handleCollapse = () => {
         isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)
         
     }

    return (
        <>
            <Seo title="About"/>
            <section className="aboutHero">
                <GatsbyImage 
                    image={aboutBanner.asset.gatsbyImageData}
                    alt={aboutBanner.alt}
                    className="aboutHero__img"
                />
                <div className="aboutHero__overlay">
                    <div className="container">
                        <h1>About The ENPS</h1>
                        <h5>Your Local Native Plant Stewards</h5>
                    </div>
                </div>
            </section>
            <section className="mission">
                <div className="container">
                    <div className="mission__content">
                        <div className="mission__header">
                            <FaLeaf/>
                            <h2>Our Mission</h2>
                            <h5>To promote the conservation of the genetic diversity of plants native to the Edmonton area.</h5>
                            <div className="dividerBar"></div>
                        </div>
                        <div className="mission__body">
                            {ourMission.map((obj, idx) => {
                                return (
                                    <PortableTextHandler key={idx} value={obj._rawBody} /> 
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section> 
            <section className="history">
              <div className="container">
                  <div className="history__content">
                        <div className="history__header">
                            <FaLeaf/>
                            <h3>Our History</h3>
                            <div className="dividerBar"></div>
                        </div>
                        <div className={isCollapsed ? "history__body collapsed" : "history__body expanded"}>    
                        {ourHistory.map((obj, idx) => {
                            return (
                                <article key={idx}>                            
                                    <PortableTextHandler value={obj._rawBody} />                                 
                                </article>
                            )
                        })}
                        </div>
                        <button className='collapseButton' onClick={handleCollapse}>EXPAND TEXT...</button>
                  </div>
              </div>                     
           </section>
           <section className="boardmembers">
               <div className="boardmembers__header">
                    <StaticImage
                        className='boardmembers__img'
                        src="../images/walterdale-bridge.jpg"
                        alt="an autumn photo of the Walterdale Bridge in Edmonton"
                    />
                    <div className="boardmembers__overlay">
                        <h2>Our Community</h2>
                       
                    </div>
               </div>
               <aside className="gallery">
                <div className="gallery-slider">
                    {aboutGallery.map((obj, index)=> {
                        return (
                            <GatsbyImage 
                                image={obj.galleryImage.asset.gatsbyImageData}
                                alt={obj.galleryImage.alt}
                                className="gallery__img"
                            />
                        )
                    })}
                </div>           
            </aside>   
              <div className="container">
                    <aside className="boardmembers__executive">
                        <h3>Our Board</h3>
                        <div 
                            className="boardmembers__container"
                            id="boardMembers"
                        >                          
                            {boardExecutive.map((obj, index) => {
                                return (
                                    <Link 
                                        className="profilecard" 
                                        key={obj.id}
                                        to={`/about/${obj.slug.current}`}
                                    >
                                        <div className="img__container">
                                        <GatsbyImage 
                                            image={obj.profileImage.asset.gatsbyImageData}
                                            alt={obj.profileImage.alt}
                                            imgStyle={{ borderRadius: '50%' }}
                                            className="profilecard__img"
                                        />
                                        </div>
                                        <div className="profilecard__body">
                                            <h5>{obj.title}</h5>
                                            <p>{obj.name}</p>
                                        </div>
                                    </Link>
                                )
                            })}                        
                        </div>
                    </aside>
                    <aside className="boardmembers__icons">
                        <div className="boardmembers__iconsHeader">
                            <h4>Interested in Joining Our Community?</h4>
                            <IoIosPeople/>              
                        </div>
                        <div className="boardmembers__iconMenu">
                            <Link to='/membership' className="boardmembers__iconContainer">
                                <MdOutlineCardMembership/>
                                Become a Member
                            </Link>
                            <Link to='/volunteer' className="boardmembers__iconContainer">
                                <MdVolunteerActivism/>
                                Be a Volunteer
                            </Link>
                        </div>
                    </aside>
              </div>
           </section>
           <section className="reports">
               <div className="container">
                    <div className="reports__header">
                        <h3>Board Reports</h3>
                    </div>
                    <div className="reports__content">
                        {boardReport.map((obj, idx) => {
                            return (
                                <article key={idx}>
                                    <h5>{obj.title}</h5>
                                    <PortableTextHandler value={obj._rawBody} />
                                </article>
                            )
                        })}
                    </div>
               </div>
            </section>
        </>
    )
}
