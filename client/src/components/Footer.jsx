import React, {useContext} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { ModalSearchContext } from '../context/ModalSearchContext'
import NavMedia from './NavMedia'

import { MdSearch } from 'react-icons/md'

export default function Footer(props) {

    const { openModalSearch } = useContext(ModalSearchContext)

    const handleSearchModal = () => {
        openModalSearch();
    }
    

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
            </div>
            
        </footer>
    )
}
