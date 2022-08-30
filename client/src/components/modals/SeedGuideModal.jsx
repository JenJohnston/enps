import React, {useContext} from 'react'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function SeedGuideModal() {
    
    const { isSeedGrowModalOpen, closeSeedGrowModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closeSeedGrowModal()
    }

    if(!isSeedGrowModalOpen) return null
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
                    <h2>Growing from Seed Guidelines</h2>
                    <div className="dividerBar"></div>
                    <h4>Aside from a low germination rate, most native plants are easy to grow and the seedlings are tough and hardy. Although there are almost as many seed starting methods as there are gardeners; the majority of native plants can be grown using the methods outlined below.</h4>
                </div>
                <div className="modalOverlay__body">
                    <section>
                        <h5>Planting In Late Spring</h5>
                        <p>If you can, set aside a small area close to the house for your seeds. Sow your seeds around the middle of June. This is a good time for two reasons: the first flush of weed growth is over, and mid-June is usually the start of the spring rainy season in the Edmonton area. With luck, you won't have to water your seeds, Mother Nature will do it for you.</p>
                        <p>Make sure your seedbed is well firmed and watered before you plant. Prepare a circular patch so that you can see the seedlings more easily when they come up, and label the patch well. Sprinkle the seed thinly over the prepared ground. If you plant them too thickly, it's hard to thin the seedlings. It's better to give them more room right from the start. Press the seeds into the soil and cover them with a thin layer of coarse sand. A horticultural grade of sand is best. The sand will hold the seeds in place and prevent them from being washed away during a heavy rain. Native plant seed can take anywhere from one to six weeks to germinate, although most seedlings will be up by the end of four weeks.</p>
                        <p>The first seedlings you see will likely be weeds. You can tell they are weeds because they grow so quickly. If you are not sure about a seedling, just leave it until it's big enough to identify. It can always be snipped off at soil level if it's too big to pull.</p>
                        <p>You should be able to identify the native plant seedlings when they emerge. They will all look the same and they will be quite tiny and short. When they have their second set of leaves, thin them out or transplant them to give them more room. When they have several sets of leaves they can be transplanted into their permanent location. Water them every few days for the first couple of weeks after transplanting until they settle in. It is possible to plant the seeds directly into their permanent location, but it's harder to identify them when they come up, and a lot easier to lose them by this method.</p>
                    </section>
                    <section>
                        <h5>Planting In A Dry Spring</h5>
                        <p>In a dry spring you can fool your seeds into thinking that there is enough moisture in the ground to start growing. Plant your seeds in large pots and put the pots in a container that will hold water. Put 3 to 6 cm {`(1 to 2")`} of water in the bottom of the container. You need only enough water to keep the seeds damp, not waterlogged. Check the water level every day and keep it topped up to the 3 cm {`(1")`} level. Keep the container in the shade or semi-shade until germination, so that the seeds don't overheat.</p>
                        <p>This is also a good planting method for people who hate weeding. Plant the seeds in potting soil instead of regular garden soil and you won't have any weeds coming up. Transplant the seedlings into the regular nursery bed as soon as they get their second set of leaves. Potting soil is good for seed starting, but it doesn't have the soil microbes and nutrients that native seedlings need.</p>
                    </section>
                    <section>
                        <h5>Planting In Fall</h5>
                        <p>Some seeds need a cold and damp period before they will germinate. This takes place naturally if you plant your seeds in late fall just before freeze-up. The seeds will germinate the following spring. Follow the general planting instructions for planting in spring. Use several labels to mark the seedbed since labels have a habit of disappearing or migrating over the course of the winter.</p>
                        <p>However, if it is early spring and you have missed your chance to plant in the fall, you can create these cold, damp conditions artificially. This process is known as stratification. Place the seeds in a re-sealable plastic bag with some damp sand and put the bag in your fridge for six to eight weeks. Check the seeds every week; they might surprise you by germinating early. If they do sprout, plant them right away, preferably outside if it's warm enough. They can stand a light frost. At the end of eight weeks, if they have not already germinated, plant the seeds outside in the nursery bed.</p>
                    </section>

                </div>

            </div>
        </div>
    )
}
