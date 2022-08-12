import React from "react";
import { ModalSearchContextProvider } from '../context/ModalSearchContext'
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children }) {
    return (
        <>
            <ModalSearchContextProvider>
                <Header/>
                {children}
                <Footer/>
            </ModalSearchContextProvider>
        </>
    )
}