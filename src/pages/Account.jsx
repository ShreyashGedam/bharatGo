import { useContext } from "react";
import "./Account.css";
import { ProductContext } from "../Context/ProductContext";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { provider } from "../firebase";

function Account() {
  const { user, setUser } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res))
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    const auth = getAuth();

    auth.signOut().then(() => {
      setUser("");
      navigate("/");
    });
  };

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="account-main">
        {user ? (
          <>
            <h3>{user.displayName}</h3>
            <img src={user.photoURL} />
            <p>{user.email}</p>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        )}
      </div>
    </div>
  );
}

export default Account;
