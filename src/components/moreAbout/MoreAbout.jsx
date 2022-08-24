import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
// import More from  "../more/More"

import "./moreAbout.css"

import imgBtn from "../../assets/img/radius__img-link.png"

const MoreAbout = () => {

    
  const [info, setInfo] = useState([]);
  var { moreId } = useParams();
  useEffect(() => {
    fetch("https://api.alibaraka.com/api/blogs/")
      .then((res) => res.json())
      .then((data) =>  setInfo(data.find((e) => e.id === Number(moreId))))
  }, [moreId]);

    return (
        <div>
            <section className="blog">
              <div className="blog__header-img">
                <div className="container">
                        <div className="blog__header">
                            <h1 className='blog__header-title'>{info.name_uz}</h1>
                            <Link className="blog__header-link" to="#">
                                <img className="blog__header-btn" id="#product-about" src={imgBtn} alt="imgBtn"/>
                            </Link>
                        </div>
                    </div>
              </div>
                <div className="blog__about-bgi"></div>

                <div className="container">
                    <div className="blogs__info">
                        <h2 className="blogs__info-title">Nima uchun elektr boshqaruvchi o'rnatish kerak?</h2>
                        <div className="blogs__info-date">
                            <h4 className="blogs__date-title">{info.author_uz}</h4>
                            <p className="blogs__date-number">{info.date}</p>
                        </div>

                        <img className="blogs__info-img" src={info.image} alt="" />
                        <p className="blogs__info-text">{info.description_uz}</p>
                    </div>

                    <hr className="blogs__line" />
                </div>

                {/* <More/> */}

                <Link className="blogs__link" to="/more">YANA BLOGLAR </Link>

            </section>

        </div>
    );
};


export default MoreAbout;