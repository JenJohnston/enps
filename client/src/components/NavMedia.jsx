import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function NavMedia() {
    

    return (
        <ul className='navMedia'>
            <li className="navMedia__link">
                <a href="https://www.facebook.com/groups/408066590219/?pnref=lhc">
                    <FaFacebook/>
                </a>
            </li>
            <li className="navMedia__link">
                <a href="mailto:engedmonton@gmail.com">
                    <IoMail/>
                </a>
            </li>
        </ul>
    )
}
