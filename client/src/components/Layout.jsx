import React from "react";
import { ModalContextProvider } from "../context/ModalContext";
import Header from "./Header";
import Footer from "./Footer";
import SearchModal from "./modals/SearchModal";
import PlantDrModal from "./modals/PlantDrModal";
import SeedGuideModal from "./modals/SeedGuideModal";
import SeedCollModal from "./modals/SeedCollModal";
import SpringSeedModal from "./modals/SpringSeedModal";
import NativeSeedModal from "./modals/NativeSeedModal";
import CommonModal from "./modals/CommonModal";
import BotanicalModal from "./modals/BotanicalModal";


export default function Layout({ children }) {
    return (
        <ModalContextProvider>
                <SearchModal/>
                <PlantDrModal/>
                <SeedGuideModal/>
                <SeedCollModal/>
                <SpringSeedModal/>
                <NativeSeedModal/>
                <CommonModal/>
                <BotanicalModal/>
                <Header/>
                {children}
                <Footer/>
            
        </ModalContextProvider>
    )
}