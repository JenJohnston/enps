import React from 'react'
import { Link } from 'gatsby'
import PortableTextHandler from '../PortableTextHandler'

import { MdEventAvailable } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function EventCard({path, title, excerpt, date, location}) {
    

    return (
        <aside className='card'>
            <div className="card__header">
                <MdEventAvailable/>
            </div>
            <div className="card__body">
                <div className="card__title">
                    <h4>{title}</h4>
                    <h5>{location}</h5>
                    <p>{date}</p>
                </div>
                <div className="card__content">
                    <PortableTextHandler value={excerpt}/>
                </div>
                <Link to={path}>Sign Up <FaLongArrowAltRight/></Link>
            </div>
        </aside>
    )
}
