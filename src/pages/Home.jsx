import React, { useContext } from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../Context/ProductContext";
import ProductDetails from "../components/ProductDetails";
import Cartbox from "../components/Cartbox";
import noResult from "../assets/noresults.svg";

function Home() {
  const { show, data, cartShow } = useContext(ProductContext);

  return (
    <div className="container">
      <p>Home</p>
      <input type="text" placeholder="Seacrh a product" />
      {data.length > 0 ? (
        <div className="products-container">
          {data.map((elem) => (
            <ProductCard key={elem.id} {...elem} />
          ))}
        </div>
      ) : (
        <div className="noResults">
          <img src={noResult} />
          <p>Nothing Ralated</p>
        </div>
      )}
      {show && (
        <div className="product-detail-card">
          <ProductDetails />
        </div>
      )}
      {cartShow && (
        <div className="product-detail-card">
          <Cartbox />
        </div>
      )}
    </div>
  );
}

export default Home;
