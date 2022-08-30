import React, {useContext} from 'react'

import { CgClose } from 'react-icons/cg'
import { ModalContext } from '../../context/ModalContext'

export default function SearchModal() {
    
    const { isSearchModalOpen, closeSearchModal } = useContext(ModalContext)

    const handleSearchModal = () => {
        closeSearchModal()
    }

    if(!isSearchModalOpen) return null
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
                <h1>I am Content</h1>
            </div>
        </div>
    )
}
