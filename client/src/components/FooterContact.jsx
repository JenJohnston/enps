import { Link } from 'gatsby'
import React from 'react'

import { IoMail } from 'react-icons/io5'

export default function FooterContact() {
    

    return (
        <div className="footerContact">
            <h5>Contact Us</h5>
            <div className="iconContainer">
                <Link className="iconLink" to="/contact"><IoMail/></Link>
            </div>
        </div>
    )
}
