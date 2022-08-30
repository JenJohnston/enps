import React from 'react'
import Seo from "../components/seo"

import { FaLeaf } from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'

export default function Membership(props) {
    

    return (
        <>
            <Seo title="Memberships"/>
            <section className='membership container'>
                <div className="membership__header">
                    <FaLeaf/>
                    <h1>Join Our Community</h1>
                    <div className="dividerBar"></div>
                </div>
                <div className="membership__content">
                    <IoIosPeople className='membership__icon'/>
                    <div className="membership__body">
                        <h3>Be Part of a Growing and Active Community</h3>
                        <p><span>For Only $20</span> Your lifetime membership gets you access to benefits, new friends and new opportunities.  Purchase yours today!</p>
                        <ul className="membership__list">
                            <li><FaLeaf/> Item 1</li>
                            <li><FaLeaf/> Item 2</li>
                            <li><FaLeaf/> Item 3</li>
                        </ul>
                    </div>
                    <form action="" className="membership__form">
                        <div className="formGroup">
                            <input type="text" name="name" required/>
                            <label htmlFor="name">Enter your Name</label>
                        </div>
                        <div className="formGroup">
                            <input type="email" name="email" required/>
                            <label htmlFor="email">Enter your Email</label>
                        </div>
                        <div className="formGroup">
                            <input type="tel" name="phone" required/>
                            <label htmlFor="phone">Enter your Number</label>
                        </div>
                        <div className="checkMenu">
                            <div className="formGroup">
                                <input type="checkbox" name="volunteer"/>
                                <label htmlFor="volunteer">Yes I want to Volunteer!</label>
                            </div>
                            <div className="formGroup">
                                <input type="checkbox" name="newsletter"/>
                                <label htmlFor="newsletter">Subscribe to our News Letter</label>
                            </div>
                        </div>
                        <div className="formGroup">
                            <input type="submit"  className='formSubmit'/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
