import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Seo from "../components/seo.js"

import { FaLeaf } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'

export default function Contact() {

    const { register, handleSubmit, setValue } = useForm();
    const [ result, setResult ] = useState('');
    const [captchatoken, setCaptchaToken] = useState('');
    const [honeyPot, setHoneyPot] = useState('');

    useEffect(() => {
        setValue("recaptcha_response", captchatoken);
    });

    

    console.log(honeyPot)

    const onSubmit = async (data) => {

        if ( honeyPot === '' || honeyPot === null){

            setResult("Sending...");

        const formData = new FormData()

        formData.append("access_key", process.env.GATSBY_WEB_THREE_ACCESS_KEY)

        for ( const key in data ) {
            if (key === "file" ) {
                formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key]);
            }
        }

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
          } else {
            console.log("Error", res);
            setResult(res.message);
          }

        } else {
            return false
        }    
    }
    

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
                        <p>Ask anything from native plant knowledge to advice, volunteering or memberships, reach out to our Board and we will be happy to help you.</p>
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
                    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
                        <div className="formGroup honeyPot">
                            <input className='honeyPot' type="text" name="honey" id="honeyPot" value={honeyPot} onChange={event => setHoneyPot(event.target.value)}/>
                            <label aria-label='hidden' className='honeyPot' htmlFor="honey" aria-hidden="true"></label>
                        </div>
                        <div className="formGroup">
                            <input type="text" name="name" {...register("name")} required/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="formGroup">
                            <input type="email" name="email" {...register("email")} required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="formGroup">
                            <input type="tel" name="phone" {...register("phone")} required/>
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="formGroup textAreaControl">
                            <textarea className='textArea' name="textarea" {...register("textarea")} id="" cols="30" rows="10" placeholder='please ask your question here'></textarea>
                        </div>
                        <input
                            type="hidden"
                            {...register("recaptcha_response")}
                            id="recaptchaResponse"
                        />
                        <div className="formGroup">
                            <span>{result}</span>
                            <input type="submit"  className='formSubmit'/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
