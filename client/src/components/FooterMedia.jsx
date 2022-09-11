import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'



export default function FooterMedia() {
    

    return (
        <div className="footerMedia">
            <h5>Connect With Us</h5>
            <div className="iconContainer">
                <a href="https://www.facebook.com/groups/408066590219/?pnref=lhc" aria-label='Facebook Link'><FaFacebook/></a>
                <a href="/" aria-label='Instagram Link'><FaInstagram/></a>
                <a href="/" aria-label='Pinterest Link'><FaPinterest/></a>
            </div>
        </div>
    )
}
