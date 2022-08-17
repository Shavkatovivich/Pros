import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./footer.css"

// IMPORT QILINGAN RASMLAR 
import imgFooterLogo from "../../assets/img/footer__logo.svg"
import imgAbbaCoding from "../../assets/img/abba__coding.svg"
import imgAbbaMedia from "../../assets/img/abba__media.svg"

const Footer = () => {
    return (
        <div className='App'>
            <footer className="footer">
                <div className="container">
                    <div className="site_footer">
                      <div className="footer__addres">
                        <Link className="footer__logo" to="/">
                            <img className="footer__logo-img" src={imgFooterLogo} alt="footer__logo-img" />
                        </Link>
                        <p className="footer__addres-text">Toshkent, Yangi Qo'rg'on Azizxo'jayev,51</p>
                        <p className="footer__addres-text">Tel: +998 95 170 44 49</p>
                        <p className="footer__addres-text">E-mail: info@alibaraka.com</p>
                      </div>

                      <ul className="footer__list">
                        <li className="footer__list-item">
                            <h3 className="footer__item-title">Korxonamiz</h3>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#video">Video</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#hamkorlarimiz">Hamkorlarimiz</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#blogs">Blog</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#aloqa">A'loqa</Link>
                        </li>
                      </ul>

                      <ul className="footer__list">
                        <li className="footer__list-item">
                            <h3 className="footer__item-title">Mahsulotlar</h3>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#mahsulotlar">Plyonka</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#mahsulotlar">Zajim</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#mahsulotlar">Tomchilab sug'orish</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/#mahsulotlar">Sovutish tizimi</Link>
                        </li>
                      </ul>

                      <ul className="footer__list">
                        <li className="footer__list-item">
                            <h3 className="footer__item-title">Bloglar</h3>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/">Issiqxona ventilyatsiyasi</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/">Issiqxonaning joylashuvi</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/">Issiqxona uchun joy</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link className="footer__item-link" to="/">Issiqxonna sotib olish</Link>
                        </li>
                      </ul>
                    </div>   
                    <div className="footer__line">
                        <p className="footer__line-text">Barcha huquqlar himoyalangan.</p>
                        <div className="footer__media">
                            <p className="footer__media-text">Ishlab chiqilgan</p>
                            <Link to="/">
                                <img className="footer__media-img" src={imgAbbaCoding} alt="" />
                            </Link>
                            <Link to="/">
                                <img className="footer__media-img" src={imgAbbaMedia} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


export default Footer;