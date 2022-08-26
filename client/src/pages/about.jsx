import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import Seo from "../components/seo"

import { FaLeaf } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdOutlineCardMembership } from 'react-icons/md'
import { MdVolunteerActivism } from 'react-icons/md'

export default function About(props) {

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
        allSanityBoardDirector {
          nodes {
            name
            profileImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            id
          }
        }
        allSanityBoardExecutive {
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
          }
        }
      }
    `)

    const aboutBanner = data.allSanityAboutBanner.nodes[0].bannerImage
    const aboutGallery = data.allSanityAboutSlider.nodes
    const boardExecutive = data.allSanityBoardExecutive.nodes
    const boardDirector = data.allSanityBoardDirector.nodes

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
                            <div className="dividerBar"></div>
                        </div>
                        <div className="mission__body">
                            <p>The Edmonton Native Plant Group is an informal group of people in the Edmonton area who like to grow native plants and promote their use in gardening and landscaping to a wider public. We take part in a number of projects, in cooperation with the appropriate municipal authorities, which aim to enrich the natural flora of various parks and natural areas.</p>
                            <p>ENPG members raise native plants at the City of Edmonton's Oldman Creek Nursery and maintain a demonstration native bed at the John Janzen Nature Centre, and the Muttart Conservatory. Volunteers also care for certain parts of City of Edmonton parks as Partners in Parks.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery">
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
              <div className="container">
                    <aside className="boardmembers__executive">
                        <h3>ENPS Board Executive</h3>
                        <div className="boardmembers__container">
                            {boardExecutive.map((obj, index) => {
                                return (
                                    <div className="profilecard" key={obj.id}>
                                        <div className="img__container">
                                        <GatsbyImage 
                                            image={obj.profileImage.asset.gatsbyImageData}
                                            alt={obj.profileImage.alt}
                                            className="profilecard__img"
                                        />
                                        </div>
                                        <div className="profilecard__body">
                                            <h5>{obj.title}</h5>
                                            <p>{obj.name}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </aside>
                    <aside className="boardmembers__directors">
                            <h3>ENPS Board Directors</h3>
                            <div className="boardmembers__container">
                            {boardDirector.map((obj, index) => {
                                return (
                                    <div className="profilecard" key={obj.id}>
                                        <GatsbyImage 
                                            image={obj.profileImage.asset.gatsbyImageData}
                                            alt={obj.profileImage.alt}
                                            className="profilecard__img"
                                        />
                                        <div className="profilecard__body">
                                            <p>{obj.name}</p>
                                        </div>
                                    </div>
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
           <section className="history">
              <div className="container">
                  <div className="history__content">
                        <div className="history__header">
                            <FaLeaf/>
                            <h2>Our History</h2>
                            <div className="dividerBar"></div>
                        </div>
                        <div className="history__body">
                            <p>It all started in 1997, when one of our members obtained a pesticide-free designation for a neighbourhood park connected to Mill Creek Ravine. She started pulling out the abundant Canada Thistles that grew along the park border.</p>
                            <p>In 1998, another member saw a pesticide truck spraying thistles in a different area of Mill Creek Ravine. She made a commitment to pull out the Canada Thistles to protect the native Flodmans thistle (Cirsium flodmanii) that was growing in the area. Together, the two friends chose several areas in the ravine where the native flowers outnumbered the non-natives and started weeding.</p>
                            <p>Thus, the Thistle Patrol was born and it quickly became part of the City of Edmonton's Partners in Parks program. With the addition of several new volunteers, the Thistle Patrol is now caring for several areas in Mill Creek Ravine, removing noxious weeds and replanting the area with the native wildflowers that used to grow there.</p>
                            <p>In 1998-9, some Edmontonians tried to save a small natural area, called Little Mountain, that included a prairie remnant. When it was lost and the developer cut down the trees, several species of plants were rescued from the site, including about 200 Slender Blue Beardtongue plants (Penstemon procerus), the only known Edmonton population of this common prairie species.</p>
                            <p>Some of the prairie sod was also rescued and transplanted to a new site behind the Administration Building at the Clover Bar Waste Management Plant.</p>
                            <p>The destruction of Little Mountain was the event that brought us all together. It was clear that we had to find some way to preserve our local native species, as their remaining habitat was disappearing so quickly.</p>
                            <p>Our first step was to ask The City of Edmonton for space on city land so we would have a place to keep rescued plants and to grow plants from seed. ENPG uses these plants for naturalization projects and as a seed source.</p>
                            <p>As ENPG and its members became known, we were asked for plants and advice on school naturalizations, and also help with plant identification.</p>
                            <p>In 2002 we adopted an area at Fulton marsh. We tried to keep it weeded, but the area was too large to take care of properly and so we decided to give up our stewardship. We did gain a lot of restoration experience from this project.</p>
                            <p>In August of 2002, we realized that our ambitions had outgrown our capacity. So we applied for grants for a new project involving a demonstration flower bed and associated gardening book. The demonstration flower bed features Edmonton prairie wildflowers and grasses. This demonstration bed, which shows gardeners how these native plants would look when planted in a regular perennial bed, was completed in 2003. It can be viewed at The John Janzen Nature Centre.</p>
                            <p>In 2012, ENPG applied for, and was granted, another Native Plant Demonstration bed on the grounds of the Muttart Conservatory. It is on the northwest corner of the parking lot.</p>
                            <p>In 2004, ENPG published Go Wild! A gardening book that provides information on how to grow native species,where to see them in the wild and where to buy local native plants and seeds.</p>
                            <p>Funding for these two projects came from EcoTrust, The Alberta Native Plant Council, The Edmonton Natural History Club and the Shell Environmental Fund. Flower bed preparation was by the City of Edmonton and labour was provided by our dedicated volunteers.</p>
                            <p>In 2002 we started collecting and growing local native seeds to start a seed bank to preserve the genetic diversity of our local native plants.</p>
                            <p>In 2000 we also started the plant salvage program. We help school groups, and people with naturalization projects, to identify and dig native plants from threatened areas before construction begins.</p>
                        </div>
                  </div>
              </div>                     
           </section>
        </>
    )
}
