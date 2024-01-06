import axios from "axios";
import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [cartShow, setCartShow] = useState(false);
  const [price, setPrice] = useState(0);
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  //To check wether if the user has already logged in
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);

  //Fetching all products or products based on category
  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}`)
      .then((res) => {
        setData(res.data);
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <ProductContext.Provider
      value={{
        show,
        setShow,
        singleProduct,
        setSingleProduct,
        data,
        setCategory,
        cart,
        setCart,
        cartShow,
        setCartShow,
        price,
        setPrice,
        setUser,
        user,
        items,
        setItems,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
