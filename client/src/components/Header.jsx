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
            <div className='header__bgContainer'>
                <svg viewBox="0 0 1440 320" className='header__background'>
                    <path fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,149.3C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
                <svg viewBox="0 0 1440 320"  className='header__background__lt'>
                    <path  fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,149.3C640,139,800,117,960,117.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            
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
                </ul>
                <div className="navmenu__icons">
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
                </div>
            </nav>
            </div>
        </header>
    )
}
