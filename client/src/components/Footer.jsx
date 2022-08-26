import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { MdOutlineCopyright }  from 'react-icons/md'
import FooterMedia from './FooterMedia'
import FooterContact from './FooterContact'

export default function Footer(props) {

    
    

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
                <form className="container__subscribe">
                    <h3>Subscribe to Our Newsletter</h3>
                    <input placeholder="e.g. example@email.com" className='formInput' type="email"  />
                    <input className='formSubmit' type="submit" />
                </form>
                <div className="container__contact">
                    <FooterMedia/>
                    <FooterContact/>
                </div>
                <div className="container__footnotes">
                    <p className='container__copywrite'><MdOutlineCopyright/> Copywrite 2022 Edmonton Native Plant Society. All Rights Reserved.</p>
                    <a href="https://jennifer-johnston.netlify.app/">Designed by | Illure Design</a>
                    <p>Powered by <a href="https://www.sanity.io/">Sanity.io</a></p>
                </div>
            </div>
            
        </footer>
    )
}
