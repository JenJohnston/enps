import React from 'react'

import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function FooterContact() {
    

    return (
        <div className="footerContact">
            <h5>Contact Us</h5>
            <div className="iconContainer">
                <a href="mailto:engedmonton@gmail.com"><IoMail/>: engedmonton@gmail.com</a>
                <a href="tel:7804567890"><FaPhoneAlt/>: {`(780)456-7890`}</a>
            </div>
        </div>
    )
}
