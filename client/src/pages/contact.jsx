import React from 'react'
import Seo from "../components/seo"

import { FaLeaf } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'

export default function Contact() {
    

    return (
        <>
            <Seo title="Contact"/>
            <section className='contact container'>
                <div className="contact__header">
                    <FaLeaf/>
                    <h1>Contact Us</h1>
                    <div className="dividerBar"></div>
                </div>
                <div className="contact__content">
                    <div className="contact__body">
                        <h3>Do You Have A Question?</h3>
                        <p>From anything to native plant knowledge and advice, volunteering or memberships, reach out to our Board and we will be happy to help you.</p>
                        <div className="contact__media">
                            <a href="https://www.facebook.com/groups/408066590219">
                                <FaFacebook/>
                            </a>
                            <a href="mailto:engedmonton@gmail.com">
                                <IoMail/>
                            </a>
                            <a href="tel:7804567890">
                                <FaPhoneAlt/>
                            </a>
                        </div>
                    </div>
                    <form action="" className="contact__form">
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
                        <div className="formGroup textAreaControl">
                            <textarea className='textArea' name="textarea" id="" cols="30" rows="10" placeholder='please ask your question here'></textarea>
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
