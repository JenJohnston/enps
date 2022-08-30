import React, {useContext} from 'react'
import { ModalContext } from '../../context/ModalContext'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'

export default function PlantDrModal() {
    
    const { isPlantDrModalOpen, closePlantDrModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closePlantDrModal()
    }

    if(!isPlantDrModalOpen) return null
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
                    <h2>General Planting Directions</h2>
                    <div className="dividerBar"></div>
                    <h4>These planting instructions are geared towards the beginner gardener, and might seem overly simplistic to those of you with more experience.</h4>
                </div>
                <div className="modalOverlay__body">
                    <p>In general, you should treat native plants in exactly the same way that you would any other perennial, just leave out the fertilizer.</p>
                    <p>When you have found the right spot for your plant, dig a hole and size it by putting the pot in and making sure the soil level in the pot is the same as the ground. Take the pot out and fill the hole with water. This will put water deep into the soil underneath the plant's roots where they need it. Let this soak in, then take the plant out of the container and put it into the hole. If you are planting a moisture-loving species, it will prefer to be in a slight hollow, otherwise the soil level in the pot should be at ground level. Hold the plant in place and push the soil firmly into the hole all around it. Try to get rid of any air pockets by pushing the soil down the sides of the hole with your fingers or a stick. Finish off by gently pressing the soil around the plant with your foot. Finally, water the plant well.</p>
                    <p>Add about 5 cm (2") of mulch around the plant, leaving a clear mulch-free space around the stem for air circulation. This mulch will cut down on the number of weeds and will also conserve water. Bark or wood chips make a good mulch for native plants.</p>
                    <p>If there is insufficient rainfall, water your new plant once or twice a week for the first month after planting. After that the plant should have established itself and won't need further watering unless there is a prolonged drought.</p>
                    <p>Never give your native plants any kind of fertilizer. These plants are not used to a rich soil; it will cause them to grow tall and leggy with fewer blooms. It is usually a good idea to add a small amount of compost, as compost is relatively low in nitrogen but provides other nutrients and beneficial organisms.</p>
                </div>
            </div>
        </div>
    )
}

