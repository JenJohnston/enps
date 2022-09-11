import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

import Seo from "../components/seo"
import { FaLeaf } from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'

export default function Membership() {

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
                    <form id="membershipForm" onSubmit={handleSubmit(onSubmit)} className="membership__form">
                        <div className="formGroup">
                            <input type="text" name="name" {...register("name")} required/>
                            <label htmlFor="name">Enter your Name</label>
                        </div>
                        <div className="formGroup honeyPot">
                            <input className='honeyPot' type="text" name="honey" id="honeyPot" value={honeyPot} onChange={event => setHoneyPot(event.target.value)}/>
                            <label className='honeyPot' htmlFor="honey"  aria-label='hidden' aria-hidden="true"></label>
                        </div>
                        <div className="formGroup">
                            <input type="email" name="email" {...register("email")} required/>
                            <label htmlFor="email">Enter your Email</label>
                        </div>
                        <div className="formGroup">
                            <input type="tel" name="phone" {...register("phone")} required/>
                            <label htmlFor="phone">Enter your Number</label>
                        </div>
                        <div className="checkMenu">
                            <div className="formGroup">
                                <input type="checkbox" name="volunteer"/>
                                <label htmlFor="volunteer">Yes I want to Volunteer!</label>
                            </div>
                            <div className="formGroup">
                                <input type="checkbox" name="newsletter"/>
                                <label htmlFor="newsletter">Subscribe to our Newsletter</label>
                            </div>
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
