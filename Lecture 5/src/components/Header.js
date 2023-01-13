const Header = () => {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcJ7OhA4hZAWBtIFTFK7NNKmrn18xp8X55g&usqp=CAU"
        alt="logo"
      />
      <ul className="list">
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt=""
            width="20px"
          />
          <span>Home</span>
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/157/157933.png"
            width="20px"
            alt=""
          />
          About
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8089/8089114.png"
            alt=""
            width="20px"
          />
          Contact
        </li>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
            alt=""
            width="20pxs"
          />
          Cart
        </li>
      </ul>
    </div>
  );
};

export default Header;
