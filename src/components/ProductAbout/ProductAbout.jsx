import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Buy from "../PurchaseButtons/Buy";
import "./ProductAbout.css";

// IMPORT QILINGAN RASMLAR 

import imgBtn from "../../assets/img/radius__img-link.png"


const ProductAbout = () => {


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
            <Link className="product__header-link" to="#product-about">
                <h1 className="product__header-title">{pro.name_en}</h1>
                <img className="product__header-btn" src={imgBtn} alt="imgBtn" width={60}/>
            </Link>
          </div>
      </div>
          <div className="product__about-bgi"></div>

      <div className="container">
        <div className="big-wrapper" id="product-about">
          <div className="left">
            <h2 className="product__about-title">{pro.name_en}</h2>
            <p className="product__about-text">{pro.sub_description_uz}</p>
            <h1 className="product__About-price">Kelishilgan narxda</h1>

            <div className="product__about-btns">
                <Buy />
            </div>
          </div>
          <div className="right">
            <img className="pro__about-img" src={pro.image3} alt="" /> 
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
