import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Buy from "../PurchaseButtons/Buy";
import "./ProductAbout.css";
import "../PurchaseButtons/buy.css"

// IMPORT QILINGAN RASMLAR 

import imgBtn from "../../assets/img/radius__img-link.png"


const ProductAbout = () => {

  
  const btnExit = useRef();

  const showExit = () => {
      btnExit.current.classList.toggle("show")
  }



  const [pro, setPro] = useState([]);
  var { productId } = useParams();
  useEffect(() => {
    fetch("https://api.alibaraka.com/api/product_by_category")
      .then((res) => res.json())
      .then((data) => setPro(data.find((e) => e.id === Number(productId))));
  }, [productId]);

  return (
    <div className="product-about">
      <div className="product__about-header">
          <div className="container">
                <h1 className="product__header-title">{pro.name_en}</h1>
            <Link className="product__header-link" to="#product-about">
                <img className="product__header-btn" id="#product-about" src={imgBtn} alt="imgBtn" width={60}/>
            </Link>
          </div>
      </div>
          <div className="product__about-bgi"></div>

          <div className="container">
            <div className="big-wrapper">
              <div className="left" id="product-about">
                <h2 className="product__about-title">{pro.name_en}</h2>
                <p className="product__about-text">{pro.sub_description_uz}</p>
                <h1 className="product__About-price">Kelishilgan narxda</h1>

                <div className="product__about-btns">
                <div className="buy__links">
                  <Link className="modal__link" to="#" onClick={showExit}>XARID QILISH</Link>
                 <Link className="modal__link" to="#" onClick={showExit}>BOG'LANISH</Link>
               </div>
                 <div className="modal__murojaat">
                    <div className="murojaat" ref={btnExit}>
                            <button className="modal__form-btn" onClick={showExit}>x</button>
                            <form className="modal__form" action="#" >
                                <h1 className="modal__form-title">XARID QILISH</h1>
                                <label className="modal__form-label" htmlFor="">Ism</label>
                                <input className="modal__form-input" type="text" required/>    
                                <label className="modal__form-label" htmlFor="">Nomer</label>
                                <input className="modal__form-input" type="text" required placeholder=""/> 
                                <button className="modal__form-link">YUBORISH</button>   
                            </form>  
                        </div> 
                 </div>
                </div>

              </div>
              <div className="right">
                <img className="pro__about-img" src={pro.image1} alt="" /> 
              </div>
            </div>
          </div>

        <div className="des">
          <div className="container">
            <h1>Tavsif</h1>
            <p>{pro.description_uz}</p>
          </div>
        </div>

    </div>
  );
};

export default ProductAbout;
