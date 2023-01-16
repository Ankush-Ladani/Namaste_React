import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const styleOBJ = {
//   display: "flex",
// };

// const Header = () => (
//   <div style={styleOBJ}>
//     <img
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU"
//       alt="logo"
//     />
//     <input className="search" type="text" />
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
//       alt="user"
//       className="userImg"
//     />
//   </div>
// );

// root.render(<Header />);

// Passing Props

// Way - 1
// const Message = ({ name }) => {
//   return (
//     <div>
//       <h1> {name} </h1>
//     </div>
//   );
// };

// Way - 2
// const Message = (props) => {
//   return (
//     <div>
//       <h1> {props.name} </h1>
//     </div>
//   );
// };

// Way - 3
const Message = (props) => {
  const { name } = props;

  return (
    <div>
      <h1> {name} </h1>
    </div>
  );
};

root.render(<Message name="Ankush" />);
