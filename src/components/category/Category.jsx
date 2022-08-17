import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.alibaraka.com/api/product_by_category")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  var { id } = useParams();

  return (
    <div className="p-card-wrapper">
      {/* <Navbar /> */}

      <h1>Bizning Mahsulotlar</h1>
      {products.length > 0 && (
        <div className="products-blok">
          {products
            .filter(
              (e) =>
                e.name_uz && e.cost && e.image1 && e.category === Number(id)
            )
            .map((product, i) => (
              <div className="p-card" key={i} id={product.id}>
                <Link
                  className="pro-links"
                  to={`/productId=${product.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <div className="products-item">
                    <img src={product.image1} alt="" className="products-img" />
                  </div>
                  <div className="products-item-name">
                    <h3 className="products-name">{product.name_en}</h3>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
