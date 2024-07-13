import { useContext } from "react";
import "./CheckOut.css";
import { ProductContext } from "../Context/ProductContext";
import emptyBox from "../assets/emptybox.svg";
import AddToHomeScreen from "../components/AddToHome";

function CheckOut() {
  const { cart } = useContext(ProductContext);
  return (
    <div className="checkout-container">
      <AddToHomeScreen />
      <div className="checkout-main">
        <div className="checkout-heading">
          <h3>MyOrders</h3>
        </div>
        {cart.length === 0 ? (
          <div className="emptybox">
            <img src={emptyBox} />
            <p>Nothing yet, add some produicts and check them out :)</p>
          </div>
        ) : (
          <div className="checkout-products">
            {cart.map((elem) => (
              <div key={elem.id}>
                <img src={elem.images[0]} />
                <div className="checkout-info">
                  <p>{elem.title}</p>
                  <h4>${elem.price}</h4>
                  <p className="checkout-quantity">{elem.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
