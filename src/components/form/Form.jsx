import React from 'react';
import "./form.css"

// IMPORT QILINGAN RASMLAR 
import imgDehqon from "../../assets/img/dehqon.png"
import imgCircleYellow from "../../assets/img/circle-yellow.svg"
import imgRotateGreen from "../../assets/img/rotate__green.svg"


const Form = () => {
    return (
        <div>
            <section className="form__section">
                <div className="container">
                    <div className="form">
                        <div className="form__circle">
                            <img className="form__circle-imgGreen" src={imgRotateGreen} alt="" />
                        </div>
                        <div className="form__box"  id='aloqa'>
                            <div className="form__box-image">
                                <img className="form__box-img" src={imgDehqon} alt="imgDehqon" />
                            </div>
                            <div className="form__box-info">
                                <h2 className="form__box-title">BIZGA SAVOLLARINGIZ BORMI?</h2>
                                <p className="form__box-text">Agar sizda biror taklif yoki savollar bo'lsa, mana shu yerda yozib qoldiring, biz doim javob berishga shaymiz.</p>
                            </div>
                            <form action="#" className="form__box-form">
                                <div className="form__inputes">
                                    <label className="form__inputes-label">
                                        <input className="form__inputes-input" type="text" placeholder='Ismingizni kiriting' required/>
                                    </label>
                                    <label className="form__inputes-label">
                                        <input className="form__inputes-input" type="text" placeholder='+998999999999'/>
                                    </label>
                                </div>
                                <label className="form__inputes-label">
                                    <input className="form__input" type="text" placeholder='Murojaatni kiriting' required/>
                                </label>

                                <button className="form__btn">Xabar Jo'natish</button>
                            </form>
                        </div>
                        <div className="form__circle">
                            <img className="form__circle-imgYellow" src={imgCircleYellow} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Form;