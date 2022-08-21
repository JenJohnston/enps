import React, {useContext} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { MdOutlineCopyright }  from 'react-icons/md'
import FooterMedia from './FooterMedia'
import FooterContact from './FooterContact'

export default function Footer(props) {

    
    

    return (
        <footer className='footer'>
            <div className="container footerContainer">
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
                <form className="footerContainer__subscribe">
                    <h2>Subscribe to Our Newsletter</h2>
                    <input type="text" value="example@email.com" />
                    <input type="submit" />
                </form>
                <div className="footerContainer__contact">
                    <FooterMedia/>
                    <FooterContact/>
                </div>
                <div className="footerContainer__footnotes">
                    <p><MdOutlineCopyright/> Copywrite 2022 Edmonton Native Plant Society. All Rights Reserved.</p>
                    <a href="https://jennifer-johnston.netlify.app/">Designed by | Illure Design</a>
                    <p>Powered by <a href="https://www.sanity.io/">Sanity.io</a></p>
                </div>
            </div>
            
        </footer>
    )
}
