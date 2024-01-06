import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import "./ProductDetail.css";
import { ProductContext } from "../Context/ProductContext";

function ProductDetails() {
  const { singleProduct, setShow } = useContext(ProductContext);

  return (
    <div className="product-details-container">
      <div>
        <h2>Details</h2>
        <IoMdClose
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setShow(false)}
        />
      </div>
      <img src={singleProduct.images[0]} />
      <h2>${singleProduct.price}</h2>
      <h4>{singleProduct.title}</h4>
      <div>
        <p>{singleProduct.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
