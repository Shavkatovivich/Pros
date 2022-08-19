import React, {useState} from 'react';
import "./accordion.css"
import {quesion} from "./api"


// IMPORT QILINGAN RASMLAR 
import imgAccordionFlag from "../../assets/img/alibaraka__flag.png"

const Accordeon = () => {
    const [selected, setSelected] = useState(null)

    const  toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        } else {
            setSelected(i)
        }
    }

    return (
        <div>
           <main className="main">
           <section className="accordion">
                    <div className="container">
                        <div className="accordion__blog-images">
                            <img className="accordion__img" src={imgAccordionFlag} alt="imgAccordionFlag" />
                        </div>
                        <div className="accordion__blog">
                                <div className="acordion__info">
                                    <h2 className="accordion__info-title">MIJOZLAR TOMONIDAN BERILADIGAN ENG KO'P SAVOLLAR</h2>
                                    <p className="accordion__info-text">Bu yerda sizni qiziqtirgan mavzularga javob topa olasiz va qiziqarli ma'lumotlarni bilib olishingiz mumkin.</p>
                                    <div className="accordion__box">
                                    {quesion.map((item,i ) => (
                                            <div className="item ">
                                                <div className="title accordion__box-heading" onClick={() => toggle(i)}>
                                                    <h2 className="accordion__heading-title">{item.quesion}</h2>
                                                    <span className="accordion__heading-exit">{selected === i ? "-" : "+"}</span>
                                                </div>
                                                <div className={selected === i ? "accordion__content-text show" : "accordion__content-text"}>{item.answer}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
           </main>
        </div>
    );
};



export default Accordeon;