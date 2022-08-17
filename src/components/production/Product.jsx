import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./product.css"


const Product = () => {

    const [categorys, setCategory] = useState([])

    useEffect(() => {
        fetch("https://api.alibaraka.com/api/product_by_category/?format=json")
        .then(res => res.json())
        .then(data => setCategory(data))
    })
    var { id } = useParams()


    return (
        <div>
            <div className="container">
               <div className="site__products">
                <h1 className="category__title">BIZNING MAHSULOTLAR</h1>
                <p className="category__subtitle">Mahsulotni tanlash</p>
                <hr className="category__line"/>
                    {categorys.length > 0 && (
                        <ul className="products__blok">
                            {categorys
                                .filter((e) => e.name_uz &&
                                    e.cost && e.image1 && 
                                    e.category === Number(id))
                                    .map((category, i ) => (
                                            <li className="category__item" key={i} id={category.id}>
                                                <Link className="category__links" id="category.id"
                                                to={`/productId=${category.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                                                  <img className="category__item-img " src={category.image1} alt="" />
                                                  <div className="category__info">
                                                    <h3 className="category__name">{category.name_uz}</h3>
                                                    <p className="category__text">Narxi: Kelishilga holda</p>
                                                  </div>
                                                </Link>
                                            </li>
                                    ))
                            }
                        </ul>
                    )}
               </div>
               <Link className="category__bottom-link" to="/#mahsulotlar">BARCHASINI KO'RISH</Link>
            </div>
        </div>
    );
};


export default Product;