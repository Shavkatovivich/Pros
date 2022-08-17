import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./production.css"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// IMPORT QILINGAN RASMLAR 

import imgTomato from "../../assets/img/tomato.png"
import imgBodring from "../../assets/img/bodring.png"
import imgTraktor from "../../assets/img/traktor.png"
import imgBulutcha from "../../assets/img/bulutcha.png"
import imgLogoXitoy from "../../assets/img/logo__xitoy.png"
import imgLogoSplide from "../../assets/img/logo_splide.png"
import imgLogoSlack from "../../assets/img/logos_slack.svg"
import imgLogoPFP from "../../assets/img/logo_pfp.png"
import imgLogoKi from "../../assets/img/logo_ki.png"
import imgLogoWordpress from "../../assets/img/logos_wordpress.svg"



const Production = () => {

    const burgerExit = useRef();

    const showExit = () => {
        burgerExit.current.classList.toggle("show")
    }

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("https://api.alibaraka.com/api/categories/?format=json")
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <main className="main">
                <section className="products">
                    <div className="products__img"></div>
                    <div className="container">
                        <div className="site__products">
                           <div className="site__products-info">
                                <h1 className="site__products-title">BIZNING MAHSULOTLARIMIZ</h1>
                                <p className="site__products-text">Issiqxona plyonkasi bir qatlamli yoki ko'p qatlamli bo'lishi mumkin. Ko'p qatlamli issiqxona plyonkalari odatda yirik professional issiqxonalar uchun ishlatiladi.</p>
                           </div>

                            <div className="site__products-type">

                            {category.length > 0 && (
                                <ul className="site__type-list" id="mahsulotlar">
                                    {category
                                        .filter((e) => e.image)
                                        .map((category, i) => (
                                            <li className="site__type-item" key={i} id={category.id}>
                                                <Link className="site__item-links" id={category.id} to={`/categoryId=${category.id}`}
                                                 onClick={() => window.scrollTo({ top: 0})}>
                                                     <img className="site__item-img" src={category.image} alt="" />
                                                    <div className="site__item-info">
                                                        <h3 className="site__info-title">{category.name_uz}</h3>
                                                        <p className="site__info-text">{category.text_uz}</p>
                                                    </div>
                                                 </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ) }
                            </div>
                        </div>

                        <div className="little__company" id="haqida">
                            <div className="little__company-left">
                                <h1 className="company__left-title">BIZ HAQIMIZDA</h1>
                                <p className="company__left-text">Bizning kompaniya 2016-yilda tashkil topib, ko'plab kishilarda issiqxona qurishdagi mahsulotlari yetkazishda va qurishda katta xizmat qilib keladi. Sohadagi katta tajribamiz sabab mijozlarimiz ishonchini egallab, yanada rivojlanishda davom etmoqdamiz.</p>
                                <div className="company__left-links">
                                    <Link className="left__links-more" to="/">KO'PROQ</Link>
                                    <Link className="left__links-more" to="/" onClick={showExit}>BIZNING YOUTUBE</Link>
                                </div>

                                  <div className="modal__content">
                                    <div className="modal" ref={burgerExit}>
                                                <Link className="modal__video-exit" to="/" onClick={showExit}>x</Link>
                                            <div className="modal__video"  >
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/121obV8gsCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                  </div>

                            </div>
                            <div className="little__company-right">
                                <img className="right__img1 technikal__images" src={imgTomato} alt="" />
                                <img className="right__img2 technikal__images" src={imgBodring} alt="" />
                                <img className="right__img3 technikal__images" src={imgTraktor} alt="" />
                                <img className="right__img4 technikal__images" src={imgBulutcha} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="slider__images" id='hamkorlarimiz'>
                        <div className="container">
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
                             
                                breakpoints={{
                                    200: {
                                        width: 200,
                                        slidesPerView: 1,
                                    },
                                    420: {
                                        width: 300,
                                        slidesPerView: 1,
                                    },
                                    520: {
                                        width: 400,
                                        slidesPerView: 1,
                                    },
                                    620: {
                                    width: 500,
                                    slidesPerView: 1,
                                    },
                                    720: {
                                    width: 600,
                                    slidesPerView: 3,
                                    },
                                    920: {
                                        width: 800,
                                        slidesPerView: 4,
                                    },
                                    1020: {
                                        width: 900,
                                        slidesPerView: 4,
                                    },
                                    1180: {
                                        width: 1000,
                                        slidesPerView: 4,
                                    }
                                }}
                                spaceBetween={50}
                                slidesPerView={4}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                >
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoXitoy} alt="imgLogoXitoy" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoSplide} alt="imgLogoSplide" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoSlack} alt="imgLogoSlack" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoPFP} alt="imgLogoPFP" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoKi} alt="imgLogoKi" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoWordpress} alt="imgLogoWordpress" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoXitoy} alt="imgLogoXitoy" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoKi} alt="imgLogoKi" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoWordpress} alt="imgLogoWordpress" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoXitoy} alt="imgLogoXitoy" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link className="swiper__images-link" to="/">
                                        <img className="swiper__images-img" src={imgLogoKi} alt="imgLogoKi" />
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>      
                </section>
            </main>
        </div>
    );
};


export default Production;