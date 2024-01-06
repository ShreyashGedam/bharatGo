import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../Context/ProductContext";
import ProductDetails from "../components/ProductDetails";
import Cartbox from "../components/Cartbox";
import noResult from "../assets/noresults.svg";

function Home() {
  const { show, data, cartShow, items, setItems } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  // Filtering the data based on the input
  useEffect(() => {
    if (data.length > 0) {
      const res = data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setItems(res);
    }
  }, [search, data]);

  return (
    <div className="container">
      <p>Home</p>
      <input
        type="text"
        placeholder="Seacrh a product"
        onChange={(e) => setSearch(e.target.value)}
      />
      {items.length > 0 ? (
        <div className="products-container">
          {items.map((elem) => (
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
