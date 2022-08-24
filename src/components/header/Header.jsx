import React, {useRef} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import "./header.css"

// IMPORT IMAGES  

import siteLogo from  "../../assets/img/alibaraka-logo.svg"
import phoneImg from "../../assets/img/phone.svg"
import burgerMenu from "../../assets/img/hamburger-menu.svg"
import exitBtn from "../../assets/img/exit-btn.svg"
import videoBtn from "../../assets/img/video-btn.png"
import rightCircle from "../../assets/img/intro__right-circle.svg"
import headerBottomImg from "../../assets/img/yellow-green-images.png"


const Header = () => {
    const burgerNavbar = useRef();

    const showNavbar = () => {
        burgerNavbar.current.classList.toggle("respons__nav")
    }

    return (
        <div>
            <header className="header">
                <div className="header__video">
                    {/* <video autoplay="" class="videocha header-video headers-video" id="myVideo" loop="">
                        <source src={require("../../assets/video/Videos.mp4")} type="video/mp4"></source>
                </video> */}
                </div>
                <div className="container">
                    <div className="site__header">
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
                        {/* HEADER INTRO SECTION  */}
                    <div className="header__intro"  id='video'>
                        <div className="header__intro-left">
                            <h1 className="intro__left-title">Samarali issiqxona quraylik!</h1>
                            <p className="intro__left-text">
                                 Issiqxonalar ko'p, lekin unumli va samarali bo'lishini istasangiz biz bilan bog'laning. Biz uni siz o'ylaganingizdek quramiz. Issiqxonangizni kerakli jihozlar bilan biz bilan boyiting!
                            </p>
                            <Link className="intro__left-link" to="/#mahsulotlar">YANA</Link>
                        </div>

                        <div className="header__intro-right">
                            <img className="intro__right-circle" src={rightCircle} alt="rightCircle" width={700}/>
                           <div className="intro__right-images">
                                <div className="intro__right-img"></div>
                           </div>
                            <button className="intro__right-videoBtn">
                                <img src={videoBtn} alt="videoBtn images" width={129}/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="header__bottom">
                <img className="header__bottom-images" src={headerBottomImg} alt="headerBottomImg" />
            </div>
        </div>
    );
};


export default Header;