import React, { createContext, useState, useMemo } from "react";

const ModalSearchContext = createContext()

const ModalSearchContextProvider = ({ children }) => {
    const [ isModalSearchOpen, setIsModalSearchOpen ]  = useState()
    const [ isModalPlantDrOpen, setIsModalPlantDrOpen ]  = useState()
    const [ isModalSeedGuideOpen, setIsModalSeedGuideOpen ]  = useState()
    const [ isModalSeedCollOpen, setIsModalSeedCollOpen ]  = useState()
    const [ isModalSpringSeedOpen, setIsModalSpringSeedOpen ]  = useState()
    const [ isModalNativeSeedOpen, setIsModalNativeSeedOpen ]  = useState()

    const initValue = useMemo(() => ({
        
            isModalSearchOpen,
            openModalSearch: () => {
                setIsModalSearchOpen(true)
            },

            closeModalSearch: () => {
                setIsModalSearchOpen(false)
            },
            isModalPlantDrOpen,
            openModalPlantDr: () => {
                setIsModalPlantDrOpen(true)
            },

            closeModalPlantDr: () => {
                setIsModalPlantDrOpen(false)
            },
            isModalSeedGuideOpen,
            openModalSeedGuide: () => {
                setIsModalSeedGuideOpen(true)
            },

            closeModalSeedGuide: () => {
                setIsModalSeedGuideOpen(false)
            },
            isModalSeedCollOpen,
            openModalSeedColl: () => {
                setIsModalSeedCollOpen(true)
            },

            closeModalSeedColl: () => {
                setIsModalSeedCollOpen(false)
            },
            isModalSpringSeedOpen,
            openModalSpringSeed: () => {
                setIsModalSpringSeedOpen(true)
            },

            closeModalSpringSeed: () => {
                setIsModalSpringSeedOpen(false)
            },
            isModalNativeSeedOpen,
            openModalNativeSeed: () => {
                setIsModalNativeSeedOpen(true)
            },

            closeModalNativeSeed: () => {
                setIsModalNativeSeedOpen(false)
            },
        }),
        [isModalSearchOpen, isModalPlantDrOpen, isModalSeedGuideOpen, isModalSeedCollOpen, isModalSpringSeedOpen, isModalNativeSeedOpen]
    )
    return (
        <ModalSearchContext.Provider value={initValue}>
            {children}
        </ModalSearchContext.Provider>
    )
}

export {ModalSearchContext, ModalSearchContextProvider}