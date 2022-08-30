import React, {useContext} from 'react'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function NativeSeedModal() {
    
    const { isNativeSeedModalOpen, closeNativeSeedModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closeNativeSeedModal()
    }

    if(!isNativeSeedModalOpen) return null
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
                    <h2>Different methods for stratifying native seeds</h2>
                    <div className="dividerBar"></div>
                </div>
                <div className="modalOverlay__body">
                    <section>
                        <p>Native plant seeds have different requirements for achieving germination. The Edmonton Native Plant Society has learned through experience and research about which seeds will grow without stratification. Success in germination depends on things such as the age and viability of the seed, the stratification, if needed, the planting methods, the amount of moisture, the amount of available light, the temperature, and likely many more factors.</p>
                        <p>Many native forbs, sedges, and some grasses, require stratification for germination.</p>
                        <p>Stratification alerts the seed that it is time to germinate through changes in conditions. In the Edmonton area the spring brings gradual thawing of the soil, and the presence of moisture lets the seeds know it is time to germinate. This typically is a Cold/Moist stratification. A few species like Blue-eyed Grass are more particular and may need a warm moist period as well.</p>
                        <p>Stratification can also be achieved indoors as described below.</p>
                        <h5>Methods of stratification:</h5>
                        <ul className="modalOverlay__list">
                            <li><span>Fall Dormant Seeding - </span>Sow seeds directly into the garden in the fall. The seeds will naturally be stratified as the spring comes. If you do plant directly into the garden be sure to mark the planting area well. Also be sure to know what the seedlings will look like, and be ready to protect the seedlings from weeds. This is not the method we usually recommend.</li>
                            <li><span>Fall/Winter Dormant Seeding - </span>We recommend that you sow your seeds into pots filled with potting soil or mix in the fall. Alternatively, you can do the sowing in around February. In either case make sure the pots are outside covered by snow in the winter, and are in a spot that will thaw evenly in the spring (no excessive sunlight). Make sure the pots are kept moist after the snow is gone. The seedlings will not have to compete with garden weeds. and can grow in the pot until they are ready to be put into the garden. Many native plants spend the first season developing their root structure so the plants generally do not get that large very quickly.</li>
                            <li><span>Cold Dry Stratification - </span>You can put the seeds into the fridge for six weeks before planting them into pots indoors. This is a simple cold stratification and we have found this is a technique that works for many native plants. With this method you can plant seeds directly into their own pots. Growing tips are included in the description of the next method.</li>
                            <li><span>Cold Moist Stratification - </span>To optimize results, and to mimic natural conditions more closely, use a mix of potting soil, sand, and/or peat moss with added moisture. My method is to mix equal portions of sand and peat moss. Use five parts of that mixture to approximately 1 part of seed. Mix the seed in well and place in a baggie. Add just enough water to dampen the mix. Do not over moisten it. You can use more of the sand/peat moss mix if you would like more spacing between the seedlings when they come up. Place the baggie in the fridge for six weeks. Check it every few days to make sure that the mix does not dry out. Also, if the seeds start sprouting it is time to pot them up. When the 6 weeks are up spread the mixture on top of pots filled with a growing medium {`(seedling mix)`} that does not have soil in it. This helps prevent the seedlings “damping off” which is a fungal disease that causes the stem and the roots of the seedlings to rot. Cover them lightly according to seed size if necessary.</li>
                        </ul>
                        <p>Place the pot where it gets light either from a window or grow light. Keep it moist, but not wet until the seeds germinate. Some growers run a fan occasionally to create a breeze which helps to strengthen the stems and help to prevent rot. I run a fan with a timer.</p>
                        <p>With this method you will get a pot with a lot of seedlings in it. Once the seedlings are developed they can be “pricked out” into pots to grow on.</p>
                        <p>With this method you will get a pot with a lot of seedlings in it. Once the seedlings are developed they can be “pricked out” into pots to grow on. This simply means carefully separating the individual plants to be planted into their own pot filled with soil or growing medium. The plants can then be grown on either inside or outside if the weather is suitable and the risk of frost is gone. Tender plants started inside should be “hardened off” which allows the plant to gradually get used to the outside conditions. This involves putting the plants outside during the day in dappled shade but bringing them in for the colder nights. Gradually move them into more sun, and when night temperatures allow, leave totally outside for a few days in full sun. They will then be ready to plant in your chosen location.</p>
                        <p>Happy Stratifying!</p>
                        <p>Mix the seeds into a small amount of damp potting soil or peat moss and sand; put the mix into a plastic bag and slightly moisten; label and place in the fridge for 6 weeks. Check every few days to make sure they don't dry out or haven't started sprouting. {`(If the seeds do start to sprout, take them out and plant them right away.)`}</p>
                    </section>
                </div>
                
            </div>
        </div>
    )
}
