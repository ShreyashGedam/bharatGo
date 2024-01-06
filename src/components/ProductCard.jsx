import React, { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import { IoIosAddCircle } from "react-icons/io";
import { ProductContext } from "../Context/ProductContext";
import { FaCheck } from "react-icons/fa";

function ProductCard(props) {
  const { category, images, price, title, id } = props;
  const { setShow, setSingleProduct, setCart, cart, setCartShow } =
    useContext(ProductContext);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const status = cart.some((elem) => elem.id == id);
    if (status) setCheck(true);
    else setCheck(false);
  }, [cart]);

  const handleClick = () => {
    setSingleProduct(props);
    setShow(true);
  };

  const addToCart = (e) => {
    e.stopPropagation();

    setCartShow(true);
    const obj = { ...props, quantity: 1 };
    setCart([...cart, obj]);
  };

  return (
    <div className="products" onClick={handleClick}>
      <img src={images[0]} />
      <div className="product-info">
        <p>{title}</p>
        <h3>{price}$</h3>
      </div>
      <p className="category">{category.name}</p>
      {check ? (
        <div
          className="addButton check-icon"
          onClick={(e) => e.stopPropagation()}
        >
          <FaCheck fontSize={22} />
        </div>
      ) : (
        <div className="addButton" onClick={(e) => addToCart(e)}>
          <IoIosAddCircle />
        </div>
      )}
    </div>
  );
}

export default ProductCard;
