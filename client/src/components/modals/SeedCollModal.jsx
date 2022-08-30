import React, {useContext} from 'react'

import { CgClose } from 'react-icons/cg'
import { FaLeaf } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export default function SeedCollModal() {
    
    const { isSeedCollModalOpen, closeSeedCollModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closeSeedCollModal()
    }

    if(!isSeedCollModalOpen) return null
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
                    <h2>Seed Collection and Storage</h2>
                    <div className="dividerBar"></div>
                    <h5>It is always exciting to get to the stage where you are able to collect seeds from your plants. If you don't plan on using them all, you can swap them at a seed exchange or donate them to a school, to the University of Alberta Devonian Botanic Garden, or to the Edmonton Naturalization Group. Your seeds will have a good home and you will have the satisfaction of knowing that you have given a local plant species the chance to grow and multiply.</h5>
                </div>
                <div className="modalOverlay__body">
                    <section>
                        <h5>Seed Collection</h5>
                        <p>Always collect your seeds in a paper bag, never plastic. Plastic bags don't let the seeds dry properly and the seeds might go mouldy. Leave them in the collection bag for approximately one month so that they dry thoroughly before you store them.</p>
                        <p>There are some exceptions to this rule. The seeds of some native species should be planted as soon as they are collected. If they are allowed to dry, the seeds go into a deep dormant state. Once they do this, it is hard to break this dormancy and get them to germinate. There are only a few species that behave in this way and they are noted in the individual plant pages.</p>
                        <p>Check your plants frequently to make sure you collect the seeds before they disperse. There are three general ways of collecting seeds depending on the species. Exceptions to the general rules are noted on the individual plant pages.</p>
                    </section>
                    <section>
                        <h5>Collecting Fluffy Seeds</h5>
                        <p>These are the easiest to collect. When the fluff separates easily from the seed-head, the seeds are ripe. Pick the fluff and place in in a paper bag to finish drying. If you look closely you will see that the seeds are firmly attached to the ends of the fluff. It is usually not necessary to separate the seeds from the fluff before storing them.</p>
                    </section>
                    <section>
                        <h5>Collecting Other Flower Seeds</h5>
                        <p>It is usually easy to tell when the seeds are ready for harvest. When the seed-head looks dry and no longer green, bend it over a sheet of white paper and give it a little shake. If the seeds are ripe they will fall onto the paper where they can be clearly seen. You can collect the seeds by cutting off the whole seed-head, placing it in a paper bag, and shaking the seeds out. If you want to collect every single seed, you will have to put the seed-heads onto a sheet of newspaper and break them open.</p>
                    </section>
                    <section>
                        <h5>Collecting Grass Seeds</h5>
                        <p>Ripe grass seeds can simply be pulled gently off the seed-head and placed in a paper bag. Note that the colour of the seed-head given on the individual plant pages refers to its colour at maturity.</p>
                    </section>
                    <section>
                        <h5>Seed Cleaning</h5>
                        <p>Professional seed cleaners have a set of sieves with progressively smaller meshes to separate the seeds from the chaff. If you have a lot of seeds to clean it is worth investing in a set, but for the average gardener, it is a bother to clean seeds and not really necessary. Just pick out the larger pieces of debris before storing the seeds. Sometimes a regular kitchen sieve will do the job of separating the seeds from the chaff.</p>
                    </section>
                    <section>
                        <h5>Long-term Storage</h5>
                        <p>To store seeds for several months or years, put the seeds in a paper bag or envelope. It is important to label each envelope with the date, name of the species, and the place of origin of the seeds. They can then be stored in any cool, dry place. Many seeds can be stored for several years without a problem, but seeds of the Aster family have a shorter storage life.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
