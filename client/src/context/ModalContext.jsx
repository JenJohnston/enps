import React, { createContext, useState, useMemo } from 'react'

const ModalContext = createContext();

const ModalContextProvider = ({children}) => {

    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
    const [isPlantDrModalOpen, setIsPlantDrModalOpen] = useState(false)
    const [isSeedCollModalOpen, setIsSeedCollModalOpen] = useState(false)
    const [isSeedGrowModalOpen, setIsSeedGrowModalOpen] = useState(false)
    const [isSpringSeedModalOpen, setIsSpringSeedModalOpen] = useState(false)
    const [isNativeSeedModalOpen, setIsNativeSeedModalOpen] = useState(false)
    const [isCommonModalOpen, setIsCommonModalOpen] = useState(false)
    const [isBotanicalModalOpen, setIsBotanicalModalOpen] = useState(false)
    const [isPlantIndexModelOpen, setIsPlantIndexModalOpen] = useState(false)

    const initValue = useMemo(
        () => ({
          isSearchModalOpen,
          openSearchModal: () => {
            setIsSearchModalOpen(true);
          },
          closeSearchModal: () => {
            setIsSearchModalOpen(false);
          },
          isPlantDrModalOpen,
          openPlantDrModal: () => {
            setIsPlantDrModalOpen(true);
          },
          closePlantDrModal: () => {
            setIsPlantDrModalOpen(false);
          },
          isSeedGrowModalOpen,
          openSeedGrowModal: () => {
            setIsSeedGrowModalOpen(true);
          },
          closeSeedGrowModal: () => {
            setIsSeedGrowModalOpen(false);
          },
          isSeedCollModalOpen,
          openSeedCollModal: () => {
            setIsSeedCollModalOpen(true);
          },
          closeSeedCollModal: () => {
            setIsSeedCollModalOpen(false);
          },
          isSpringSeedModalOpen,
          openSpringSeedModal: () => {
            setIsSpringSeedModalOpen(true);
          },
          closeSpringSeedModal: () => {
            setIsSpringSeedModalOpen(false);
          },
          isNativeSeedModalOpen,
          openNativeSeedModal: () => {
            setIsNativeSeedModalOpen(true);
          },
          closeNativeSeedModal: () => {
            setIsNativeSeedModalOpen(false);
          },
          isCommonModalOpen,
          openCommonModal: () => {
            setIsCommonModalOpen(true);
          },
          closeCommonModal: () => {
            setIsCommonModalOpen(false);
          },
          isBotanicalModalOpen,
          openBotanicalModal: () => {
            setIsBotanicalModalOpen(true);
          },
          closeBotanicalModal: () => {
            setIsBotanicalModalOpen(false);
          },
          isPlantIndexModelOpen,
          openPlantIndexModel: () => {
            setIsPlantIndexModalOpen(true);
          },
          closePlantIndexModel: () => {
            setIsPlantIndexModalOpen(false)
          }
        }),
        [isSearchModalOpen, isPlantDrModalOpen, isSeedGrowModalOpen, isSeedCollModalOpen, isSpringSeedModalOpen, isNativeSeedModalOpen, isCommonModalOpen, isBotanicalModalOpen, isPlantIndexModelOpen]
      );

    return (
        <ModalContext.Provider value={initValue}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalContextProvider}
