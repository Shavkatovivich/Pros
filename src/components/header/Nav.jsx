import React, {useState, useRef} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./header.css"

// IMPORT QILINGAN RASMLAR 

import siteLogo from  "../../assets/img/alibaraka-logo.svg"
import phoneImg from "../../assets/img/phone.svg"
import burgerMenu from "../../assets/img/hamburger-menu.svg"
import exitBtn from "../../assets/img/exit-btn.svg"

const Nav = () => {

    const burgerNavbar = useRef();

    const showNavbar = () => {
        burgerNavbar.current.classList.toggle("respons__nav")
    }

    return (
        <div>
            <div className="container">
                <nav className="site__nav">
                            <Link to="/" className="site__header-logo">
                                <img className="site__logo-img" src={siteLogo} alt="AliBaraka logo" width={87} height={78}/>
                            </Link>
                            <ul className="site__nav-list" ref={burgerNavbar}>
                                <li className="site__list-item">
                                    <Link  to="/#mahsulotlar" className="site__item-link">Mahsulotlar</Link>
                                </li>
                                <li className="site__list-item">
                                    <Link  to="/#haqida" className="site__item-link">Haqida</Link>
                                </li>
                                <li className="site__list-item">
                                    <Link  to="/#blogs" className="site__item-link">Blog</Link>
                                </li>
                                <li className="site__list-item">
                                    <Link  to="/#aloqa" className="site__item-link">Aloqa</Link>
                                </li>
                                <li className="site__list-item">
                                    <div className="site__item-phoneImg">
                                        <img src={phoneImg} alt="telephone images" width={33} height={33}/>
                                    </div>
                                    <div className="site__nav-contact">
                                        <a href="tel:+998994054000" className="site__contact-link">99-405-40-00</a>
                                        <a href="tel:+998946666155" className="site__contact-link">94-666-61-55</a>
                                    </div>
                                </li>
                                <li className="site__list-item">
                                     <button className="exit-btn" onClick={showNavbar}>
                                        <img src={exitBtn} alt="exitBtn" width={30}/>
                                    </button> 
                                </li>
                            </ul>
                            <button className="nav__burger-btn closes__btn" onClick={showNavbar}>
                                <img src={burgerMenu} alt="burgerMenu" width={40}/>
                            </button>
                        </nav>
                </div>
        </div>
    );
};


export default Nav;