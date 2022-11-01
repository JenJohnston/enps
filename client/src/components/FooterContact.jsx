import React from 'react'

import { IoMail } from 'react-icons/io5'

export default function FooterContact() {
    

    return (
        <div className="footerContact">
            <h5>Contact Us</h5>
            <div className="iconContainer">
                <a className="iconLink" href="mailto:engedmonton@gmail.com"><IoMail/>: engedmonton@gmail.com</a>
            </div>
        </div>
    )
}
