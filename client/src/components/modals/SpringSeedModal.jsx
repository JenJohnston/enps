import React, {useContext} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function SpringSeedModal() {


    const data = useStaticQuery(graphql`
        query galleryQuery {
            allSanitySpringSeedGallery {
            nodes {
                id
                title
                subText
                springSeedImage {
                alt
                asset {
                    gatsbyImageData
                }
                }
            }
            }
        }
    `)

    const galleryData = data.allSanitySpringSeedGallery.nodes
    
    const { isSpringSeedModalOpen, closeSpringSeedModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closeSpringSeedModal()
    }

    if(!isSpringSeedModalOpen) return null
    return (
        <div className='modalOverlay'>
           <button 
                className='modalOverlay__toggle'
                onClick={handleSearchModal} 
                onKeyDown={handleSearchModal}
                tabIndex={0}
            >
                <CgClose/>
            </button>
            <div className="container modalOverlay__content">
                <div className="modalOverlay__header">
                    <FaLeaf/>
                    <h2>Spring Seed Planting</h2>
                    <h4>by Cherry Dodd</h4>
                    <div className="dividerBar"></div>
                </div>
               <div className="modalOverlay__body">
                   <p>Native wildflowers are always more of a challenge to grow than garden perennials, and one of the reasons is that most native seeds need a period of cold and damp for several weeks before they will germinate. This process is called stratification.</p>
                   <p>However, there are some native flower species that do not need stratification and will germinate without any pretreatment when planted in the spring.</p>
                   <p>They can be planted straight into the garden any time between mid-April and the beginning of June. Remember to label them well so you can spot them as they come up.</p>
                   <p>Sow the seeds quite thickly as they often have a lower germination rate. The average germination time is two to three weeks, but some seeds could take anywhere from one week to six weeks to emerge, so be patient.</p>
                   <p>Native plants are always small in the first year as they put all their energy into growing a strong root system before bothering with top growth. Because of this slow growth habit they very often get lost in the garden.</p>
                   <p>Plant your seeds somewhere close to the path or the house so that you can keep an eye on them.</p>
                   <p>Another way to keep a close eye on your seeds is to plant them in a 15 cm diameter or larger pot with potting soil, and keep them in a shady spot until they germinate. Put the pot in a shallow container so that you can water from the bottom and keep the soil moist. The advantage of this method is that you know exactly where you planted the seeds, and there are no weeds to confuse you when the seedlings sprout. You will also get a higher germination rate. </p>
                   <p>Move the pot to a semi-shade location as soon as germination occurs, and transplant the seedlings to individual pots of garden soil once they have a couple of sets of leaves. </p>
                   <p>When the seedlings are large enough to handle they can be transplanted into the garden. Water them for the first week or two after transplanting.</p>
                   <p>Here is the list of the species can that can be sown outdoors as soon as the soil is dry enough. It includes some of our most colourful native flowers. Don't worry about a late spring snowfall. These seedlings are tough and snow won't bother them. The only exception is Gaillardia, it is not frosthardy and that is why it takes so long to germinate. </p>
                   <div className="modalOverlay__gallery">
                        {galleryData.map((obj, idx) => {
                            return (
                                <div className="modalOverlay__galleryImg" key={obj.id}>
                                    <GatsbyImage
                                        image={obj.springSeedImage.asset.gatsbyImageData}
                                        alt={obj.springSeedImage.alt}
                                        className="gallery__img"
                                    />
                                    <p>{obj.springSeedImage.alt} - <span>{obj.title}</span></p>
                                    
                                </div>
                            )
                        })}
                   </div>

                   <p className="note">*Soak the seeds of the Hedysarum alpinum species in hot water for 12 hours before planting.</p>
                   <p>Most native grasses can also be sown directly outside, except for Blue Grama Grass which needs stratification.</p>
                   <p>If you have native seeds that need stratification it's not too late to do this. Put the seeds in a small plastic bag with a little damp peat moss or sand.</p>
                   <p>Put the bag in the fridge for six weeks, but check every few days to make sure your seeds are not germinating prematurely. Plant in the usual manner when the time is up. Another method is to plant the seeds in a pot and water them, and then place the pot in a plastic bag so the soil doesn't dry out, and put the pot in the fridge for 6 weeks. Leave the plastic bag open so there is air circulation and the soil doesn't go mouldy. </p>
               </div>
            </div>
        </div>
    )
}
