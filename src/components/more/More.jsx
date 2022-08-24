import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import  "./more.css"

const More = () => {

    const [more, setMore] = useState([])

    useEffect(() => {
        fetch("https://api.alibaraka.com/api/blogs/")
          .then((res) => res.json())
          .then(data => setMore(data)) 
      }, []);
    

    return (
        <div>
            <section className="more">
                <div className="container">
                    <div className="more__title">Ko'proq bloglar</div>

                    <div className="more__product">
                        
                        {more.length > 0 && (
                                <ul className="more__list" id="mahsulotlar">
                                    {more
                                        .filter((e) => e.image)
                                        .map((mores, i) => (
                                            <li className="more__list-item" key={i} id={mores.id}>
                                                <Link className="more__item-links" id={mores.id} to={`/moreId=${mores.id}`}
                                                 onClick={() => window.scrollTo({ top: 0})}>
                                                     <img className="more__item-img" src={mores.image} alt="" />
                                                    <div className="more__item-info">
                                                        <h3 className="more__info-title">{mores.name_uz}</h3>
                                                        <p className="more__info-text">{mores.description_uz}</p>
                                                    </div>
                                                 </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}

                    </div>
                </div>
            </section>
        </div>
    );
};


export default More;