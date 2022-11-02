import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useForm } from "react-hook-form";

import { MdOutlineCopyright }  from 'react-icons/md'
import FooterMedia from './FooterMedia'
import FooterContact from './FooterContact'

export default function Footer() {

    const { register, handleSubmit } = useForm();
    const [ result, setResult ] = useState('');
    const [honeyPot, setHoneyPot] = useState('');

    

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
        <footer className='footer'>
            <div className='footer__bgContainer'>
                <div className="rectangle"></div>
                <div className="svgContainer">
                    <svg viewBox="0 0 1440 320" className='header__background'>
                        <path fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,149.3C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                    </svg>
                    <svg viewBox="0 0 1440 320"  className='header__background__lt'>
                        <path  fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,149.3C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                    </svg>
                </div>
                
                
            </div>
            <div className="container">
                <div className="logoContainer">
                    <div className="logoContainer__link">
                        <Link to='/' className='header__link'>
                            <StaticImage
                                className='header__logo'
                                src="../images/enps-logo.png"
                                alt="logo image for for the love of dog"
                                
                            />
                        </Link>
                    </div>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)} className="container__subscribe">
                    <h4>Subscribe to Our Newsletter</h4>
                    <div className="formGroup honeyPot">
                        <input className='honeyPot' type="text" name="honey" id="honeyPot" value={honeyPot} onChange={event => setHoneyPot(event.target.value)}/>
                        <label className='honeyPot' htmlFor="honey"  aria-label='hidden' aria-hidden="true"></label>
                    </div>
                    <input placeholder="e.g. example@email.com" className='formInput' type="email" {...register("email")} required/>
                    <div className="formGroup footerSubmit">
                        
                        <input className='formSubmit' type="submit" aria-label='Submit Button' />
                    </div>   
                </form>
                <div className="container__contact">
                    <FooterMedia/>
                    <FooterContact/>
                </div>
                <div className="container__footnotes">
                    <p className='container__copywrite'><MdOutlineCopyright/> Copyright 2022 Edmonton Native Plant Society. All Rights Reserved.</p>
                    <a href="https://jennifer-johnston.netlify.app/" rel="no-follow">Designed by | Illure Design</a>
                    <p>Powered by <a href="https://www.sanity.io/" rel="no-follow">Sanity.io</a></p>
                </div>
            </div>
            
        </footer>
    )
}
