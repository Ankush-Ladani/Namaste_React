import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-[#D9ACF5]">
      <img
      className="h-24 m-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcJ7OhA4hZAWBtIFTFK7NNKmrn18xp8X55g&usqp=CAU"
        alt="logo"
      />
      <ul className="flex py-10">
        <Link  to="/">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt=""
            width="20px"
          /> */}
          <span className="px-3 hover:text-white text-[#F55050] text-xl font-bold">Home</span>
        </Link>
        <Link to="/about">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/157/157933.png"
            width="20px"
            alt=""
          /> */}
          <span className="px-3 hover:text-white text-[#F55050] text-xl font-bold">About</span>
        </Link>
        <Link to="/contact">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/8089/8089114.png"
            alt=""
            width="20px"
          /> */}
          <span className="px-3 hover:text-white text-[#F55050] text-xl font-bold">Contact</span>
        </Link>
        <li className="px-3 hover:cursor-pointer hover:text-white text-[#F55050] text-xl font-bold">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
            alt=""
            width="20pxs"
          /> */}
          Cart
        </li>
        <Link to="/instamart">
          <li className="px-3 hover:text-white text-[#F55050] text-xl font-bold">Instamart</li>
        </Link>
      </ul>
      <div className="mr-5 mt-10">
        {isLoggedIn ? (
          <button className="rounded-3xl bg-green-800 hover:bg-green-400 hover:text-gray-500 p-2 w-28 text-white font-bold text-md" onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button className="rounded-3xl bg-green-800 hover:bg-green-400 hover:text-gray-500 p-2 w-28 text-white font-bold text-md" onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
      {/* <div>{isLoggedIn ? <h1>Logged In..</h1> : <h1>Logged Out..</h1>}</div> */}
    </div>
  );
};

export default Header;
