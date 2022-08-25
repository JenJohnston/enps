import React from 'react'
import { Link } from 'gatsby'
import PortableTextHandler from '../PortableTextHandler'

import { MdEventAvailable } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function EventCard({path, title, excerpt, date, location}) {
    

    return (
        <aside className='card'>
            <div className="card__header">
                <MdEventAvailable/>
            </div>
            <div className="card__body">
                <div className="card__title">
                    <h4>{title}</h4>
                    <h5><b>Location:</b> {location}</h5>
                    <p className="date">Date: {date}</p>
                </div>
                <div className="card__content">
                    <PortableTextHandler value={excerpt}/>
                </div>
                <div className="card__links">
                    <a href="mailto:enpsvolunteer@gmail.com"><IoMail className='mailIcon'/>Register</a>
                    <Link to={path}>View Event <FaLongArrowAltRight className='arrowIcon'/></Link>
                </div>
            </div>
        </aside>
    )
}
