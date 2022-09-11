import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import PortableTextHandler from '../PortableTextHandler'

import { IoMail } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function VolunteerCard({title, path, image, excerpt, email, phoneNumber, contact}) {
    

    return (
        <aside className='card'>
            <div className="card__header">
                <GatsbyImage
                    className='card__img'
                    image={image.imageData}
                    alt={image.altText}
                />
            </div>
            <div className="card__body">
                <div className="card__content">
                    <h5>{title}</h5>
                    <PortableTextHandler value={excerpt}/>
                </div>
                <div className="card__media">
                    <p>Contact: {contact}</p>
                    <a href={`mailto:${email}`}><IoMail/>: {email}</a>
                    <a href={`tel:${phoneNumber}`}><FaPhoneAlt/>: {phoneNumber}</a>
                </div>
                <div className="card__link">
                    <div className="linkbar"></div>
                    <Link to={path}>Get Involved <FaLongArrowAltRight/></Link>
                </div>
            </div>
        </aside>
    )
}
