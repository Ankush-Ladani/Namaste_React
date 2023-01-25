import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcJ7OhA4hZAWBtIFTFK7NNKmrn18xp8X55g&usqp=CAU"
        alt="logo"
      />
      <ul className="list">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt=""
            width="20px"
          />
          <span>Home</span>
        </Link>
        <Link to="/about">
          <img
            src="https://cdn-icons-png.flaticon.com/512/157/157933.png"
            width="20px"
            alt=""
          />
          About
        </Link>
        <Link to="/contact">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8089/8089114.png"
            alt=""
            width="20px"
          />
          Contact
        </Link>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
            alt=""
            width="20pxs"
          />
          Cart
        </li>
        <Link to="/instamart">
          <li>Instamart</li>
        </Link>
      </ul>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
      <div>{isLoggedIn ? <h1>Logged In..</h1> : <h1>Logged Out..</h1>}</div>
    </div>
  );
};

export default Header;
