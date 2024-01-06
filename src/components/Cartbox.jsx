import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import "./ProductDetail.css";
import { ProductContext } from "../Context/ProductContext";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Cartbox() {
  const { cart, setCart, setCartShow, price, setPrice } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const handleQuantity = (id, val) => {
    setCart((prev) => {
      return prev.map((elem) =>
        elem.id === id
          ? { ...elem, quantity: Math.max(1, elem.quantity + val) }
          : elem
      );
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((elem) => elem.id != id));
  };

  function handlePrice() {
    const sum = cart.reduce((acc, elem) => elem.quantity * elem.price + acc, 0);
    setPrice(sum);
  }

  handlePrice();

  return (
    <div className="product-details-container">
      <div>
        <h2>My Order</h2>
        <IoMdClose
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={() => setCartShow(false)}
        />
      </div>
      <hr />
      {cart.map((elem) => (
        <>
          <div key={elem.id} className="cart-box-single">
            <div>
              <img src={elem.images[0]} />
              <div className="cart-box-details">
                <p>{elem.title}</p>
                <p>${elem.price}</p>
                <div className="cart-buttons">
                  <FaMinus
                    fontSize={25}
                    style={{
                      background: "#BBF7D0",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => handleQuantity(elem.id, -1)}
                  />
                  <p>{elem.quantity}</p>
                  <IoMdAdd
                    fontSize={25}
                    style={{
                      background: "#FECACA",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => handleQuantity(elem.id, 1)}
                  />
                </div>
              </div>
            </div>
            <div onClick={() => handleRemove(elem.id)}>
              <IoMdClose style={{ fontSize: "25px", cursor: "pointer" }} />
            </div>
          </div>
          <hr />
        </>
      ))}
      <div className="checkout-box">
        <div>
          <h4>Total:</h4>
          <h4>${price}</h4>
        </div>
        <button onClick={() => navigate("/my-orders")}>Checkout</button>
      </div>
    </div>
  );
}

export default Cartbox;
