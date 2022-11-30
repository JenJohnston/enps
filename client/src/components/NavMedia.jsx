import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function NavMedia() {
    

    return (
        <ul className='navMedia'>
            <li className="navMedia__link">
                <a href="https://www.facebook.com/groups/408066590219/?pnref=lhc" target="_blank">
                    <FaFacebook/>
                </a>
            </li>
            <li className="navMedia__link">
            <a href="https://www.instagram.com/edmontonnativeplants/" aria-label='Instagram Link' target="_blank"><FaInstagram/></a>
            </li>
        </ul>
    )
}
