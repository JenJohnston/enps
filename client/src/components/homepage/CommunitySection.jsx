import React from 'react'
import { Link } from 'gatsby'

import {BsPersonPlusFill} from 'react-icons/bs'
import {MdVolunteerActivism} from 'react-icons/md'
import {FaLeaf} from 'react-icons/fa'

export default function CommunitySection(props) {
    

    return (
        <section className='community'>
            <div className="container">
                <div className="community__header">
                    <h2>Be A Part Of Our Community</h2>
                    <h5>Join our growing community by purchasing a low cost lifetime membership {'(Only $20!!)'} or get involved and volunteer in some of our many projects.</h5>
                </div>
                <div className="flexContainer">
                    <div className="card card-l">
                        <div className="card__wrapper">
                            <div className="card__logoWrapper card-l-logoBG">
                                <BsPersonPlusFill className='card__logo'/>
                            </div>
                            <div className="card__inner card-l-innerBG">
                                <p>Become a <span>Life Time</span> Member</p>
                                <ul className='card__list'>
                                    <li><FaLeaf/>List Item 1</li>
                                    <li><FaLeaf/>List Item 2</li>
                                    <li><FaLeaf/>List Item 3</li>
                                </ul>
                                <Link className='card__link' to='/membership'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card card-r">
                        <div className="card__wrapper">
                            <div className="card__logoWrapper card-r-logoBG">
                                <MdVolunteerActivism className='card__logo'/> 
                            </div>
                            <div className="card__inner card-r-innerBG">
                            <p>Get Involved, Be a <span>Volunteer</span></p>
                                <ul className='card__list'>
                                    <li><FaLeaf/>List Item 1</li>
                                    <li><FaLeaf/>List Item 2</li>
                                    <li><FaLeaf/>List Item 3</li>
                                </ul>
                                <Link className='card__link' to='/volunteer'>Get Involved</Link>
                            </div>
                        </div>
                    </div>    
                </div>       
            </div>
        </section>
    )
}
