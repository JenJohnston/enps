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


export default function Layout({ children }) {
    return (
        <ModalContextProvider>
                <SearchModal/>
                <PlantDrModal/>
                <SeedGuideModal/>
                <SeedCollModal/>
                <SpringSeedModal/>
                <NativeSeedModal/>
                <Header/>
                {children}
                <Footer/>
            
        </ModalContextProvider>
    )
}