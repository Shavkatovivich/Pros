import React from 'react';
import { Link } from "react-router-dom";
import "./blogs.css"

// import qilingan rasmlar 
import imgPrezident from "../../assets/img/prezident.png"
const Blogs = () => {
    return (
        <div>
            <section className="blogs" id="blogs">
                <div className="container">
                    <div className="blogs__section">
                        <div className="blogs___right">
                            <img className="blogs__right-img" src={imgPrezident} alt="imgPrezident" width={460} height={570}/>
                            <div className="blogs__right-info">
                                <h3 className="blogs__info-title">"Bugungi kunda oziq-ovqat xavfsizligi butun dunyoda eng dolzarb muammoga aylanib bormoqda."</h3>
                                <p className="blogs__info-text">Issiqxonalar aholi bandligini ta’minlash va mahsulot eksport qilishning katta manbai. Issiqxonalarni ko‘paytirish uchun tadbirkorlarning keng doirasini qiziqtirish, ularga har tomonlama yordam berish zarur.</p>
                                <h3 className="blogs__info-title">Sh.Mirziyoyev</h3>
                            </div>
                        </div>

                        <div className="blogs__left">
                            <h2 className="blogs__left-title">Foydali bloglar</h2>
                            <div className="blogs__left-info">
                                <h3 className="blogs__info-leftTitle">Issiqxona uchun joy tanlashda asosiy fikrlar</h3>
                                <p className="blogs__info-leftText">Issiqxona uchun maqbul joyni tanlashda yaxshi bo'ladi, agar: tuproq engil, qumli; joy tekis va biroz ko'tarilgan; kuchli tarafkashliksiz; shimoliy shamoldan himoya mavjud; suvning turg'unligi yo'q; uyga yaqin, lekin orqama orqa emas; kuchli soya yo'q.</p>
                                <Link className="blogs__info-link" to="/">Ko'proq ma'lumot</Link>
                            </div>
                            <div className="blogs__left-info">
                                <h3 className="blogs__info-leftTitle">Issiqxonaning joylashuvi uchun joyni to'g'ri tanlash</h3>
                                <p className="blogs__info-leftText">Yozgi uy yoki bog'ning qaysi egasi issiqxonani orzu qilmaydi?</p>
                                <Link className="blogs__info-link" to="/">Ko'proq ma'lumot</Link>
                            </div>
                            <div className="blogs__left-info">
                                <h3 className="blogs__info-leftTitle">Issiqxonani qurish uchun qanday material bo'lishi kerak?</h3>
                                <p className="blogs__info-leftText">Eng yaxshi variant quyidagi xususiyatlarga ega: material faqat asosiy xom ashyolardan tayyorlangan; sirt ultrabinafsha nurlanishidan himoya qilishni ta'minlaydigan maxsus qatlam bilan ta'minlangan; varaqning yuqori zichligi, 600 g / m dan kam bo'lmagan; yirtilgan qirralarning, rangi past chiziqlarning to'liq yo'qligi; ajralib ketayotgan plyonkalar; tovarlarning xarakteristikalari bilan ta'minlangan barcha varaqlarda belgilar mavjudligi; 15 yildan 25 yilgacha kafolat; og'irligi kamida 8 kilogramm, agar biz yuqori sifatli material haqida gapiradigan bo'lsak.</p>
                                <div className="blogs__left-links">
                                    <Link className="blogs__info-link" to="/">Ko'proq ma'lumot</Link>
                                    <Link className="blogs__info-more" to="/">Ko'proq</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Blogs;