import React, {useState, useContext} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { MdSearch } from 'react-icons/md'
import { RiMenu5Line } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'

import { navRouter } from '../constants/navrouter'

import { ModalSearchContext } from '../context/ModalSearchContext'
import NavMedia from './NavMedia'

export default function Header() {

    const [ isNavOpen, setIsNavOpen ] = useState(false)
    const { openModalSearch } = useContext(ModalSearchContext)
    

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    const handleNavClick = () => {
        if(isNavOpen){
            setIsNavOpen(false)
        }
    }

    const handleSearchModal = () => {
        openModalSearch();
    }
    

    return (
        <header className='header'>
            <div className="container navContainer">
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
                <button className='mobileNav__toggle' id="mobileNav__toggle" aria-controls='site__nav' aria-expanded="false" onClick={toggleNav}>
                <span className='sr-only'>Menu</span>
                {isNavOpen ? ( <CgClose/> ) : ( <RiMenu5Line/> )}
            </button>
            <nav className={isNavOpen ? 'navbar shownav' : 'navbar'} id="navbar">
                <ul className="navmenu" id="sitenav">
                    {navRouter.map(navItem => (
                        <li key={navItem.path} className="nav__item">
                            <Link className='menu__link' to={navItem.path} onClick={handleNavClick}>{navItem.title}</Link>
                        </li>
                    ))}
                    <li>
                        <div 
                            className="searchIcon__wrapper" 
                            onClick={handleSearchModal} 
                            onKeyDown={handleSearchModal}
                            role="button"
                            tabIndex={0}
                        >
                            <MdSearch className='searchIcon'></MdSearch>
                        </div>
                        <NavMedia/>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
